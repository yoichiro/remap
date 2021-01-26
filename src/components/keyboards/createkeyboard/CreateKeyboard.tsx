import React from 'react';
import './CreateKeyboard.scss';
import {
  CreateKeyboardActionsType,
  CreateKeyboardStateType,
} from './CreateKeyboard.container';
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from '@material-ui/core';
import {
  IKeyboardDefinitionStatus,
  KeyboardDefinitionStatus,
} from '../../../services/storage/Storage';
import { KeyboardDefinitionFormPart } from '../../common/keyboarddefformpart/KeyboardDefinitionFormPart';
import { KeyboardDefinitionSchema } from '../../../gen/types/KeyboardDefinition';

type CreateKeyboardState = {
  openConfirmDialog: boolean;
  isSaveAsDraft: boolean;
};
type OwnProps = {};
type CreateKeyboardProps = OwnProps &
  Partial<CreateKeyboardActionsType> &
  Partial<CreateKeyboardStateType>;

const statusSteps: IKeyboardDefinitionStatus[] = [
  KeyboardDefinitionStatus.draft,
  KeyboardDefinitionStatus.in_review,
  KeyboardDefinitionStatus.approved,
];

export default class CreateKeyboard extends React.Component<
  CreateKeyboardProps,
  CreateKeyboardState
> {
  constructor(props: CreateKeyboardProps | Readonly<CreateKeyboardProps>) {
    super(props);
    this.state = {
      openConfirmDialog: false,
      isSaveAsDraft: true,
    };
  }

  private onLoadFile(
    keyboardDefinition: KeyboardDefinitionSchema,
    jsonFilename: string,
    jsonStr: string
  ) {
    this.props.updateJsonFilename!(jsonFilename);
    this.props.updateKeyboardDefinition!(keyboardDefinition);
    this.props.updateJsonString!(jsonStr);
  }

  private isFilledInAllField(): boolean {
    return !!this.props.productName && !!this.props.keyboardDefinition;
  }

  handleBackButtonClick = () => {
    this.props.backToList!();
  };

  handleSaveAsDraftButtonClick = () => {
    this.setState({
      openConfirmDialog: true,
      isSaveAsDraft: true,
    });
  };

  handleSubmitForReviewButtonClick = () => {
    this.setState({
      openConfirmDialog: true,
      isSaveAsDraft: false,
    });
  };

  handleConfirmYesClick = () => {
    this.setState({
      openConfirmDialog: false,
    });
    if (this.state.isSaveAsDraft) {
      this.props.saveAsDraft!();
    } else {
      this.props.submitForReview!();
    }
  };

  handleConfirmNoClick = () => {
    this.setState({
      openConfirmDialog: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="create-keyboard-wrapper">
          <div className="create-keyboard-card">
            <Card>
              <CardContent>
                <Stepper>
                  {statusSteps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                <div className="create-keyboard-form-container">
                  <div className="create-keyboard-upload-form">
                    <KeyboardDefinitionFormPart
                      messageHtml={`<span class="create-keyboard-upload-msg">Please import your file (.json)</b>`}
                      validateDeviceIds={false}
                      size="small"
                      onLoadFile={(kd, name, jsonStr) => {
                        this.onLoadFile(kd, name, jsonStr);
                      }}
                    />
                  </div>
                  <div className="create-keyboard-form">
                    <div className="create-keyboard-form-row">
                      <TextField
                        id="create-keyboard-json-filename"
                        label="JSON Filename"
                        variant="outlined"
                        value={this.props.jsonFilename}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="create-keyboard-form-row">
                      <TextField
                        id="create-keyboard-name"
                        label="Name"
                        variant="outlined"
                        value={this.props.keyboardDefinition?.name || ''}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="create-keyboard-form-row">
                      <TextField
                        id="create-keyboard-vendor_id"
                        label="Vendor ID"
                        variant="outlined"
                        value={this.props.keyboardDefinition?.vendorId || ''}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="create-keyboard-form-row">
                      <TextField
                        id="create-keyboard-product_id"
                        label="Product ID"
                        variant="outlined"
                        value={this.props.keyboardDefinition?.productId || ''}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="create-keyboard-form-row">
                      <TextField
                        id="create-keyboard-product-name"
                        label="Product Name"
                        variant="outlined"
                        required={true}
                        value={this.props.productName}
                        onChange={(event) =>
                          this.props.updateProductName!(event.target.value)
                        }
                      />
                    </div>
                    <div className="create-keyboard-form-buttons">
                      <Button
                        variant="contained"
                        style={{ marginRight: '16px' }}
                        onClick={this.handleBackButtonClick}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: '16px' }}
                        onClick={this.handleSaveAsDraftButtonClick}
                        disabled={!this.isFilledInAllField()}
                      >
                        Save as Draft
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: '16px' }}
                        onClick={this.handleSubmitForReviewButtonClick}
                        disabled={!this.isFilledInAllField()}
                      >
                        Submit for Review
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Dialog
          open={this.state.openConfirmDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'A New Keyboard Registration'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.isSaveAsDraft
                ? 'Are you sure to save this new keyboard as draft?'
                : 'Are you sure to register and submit this new keyboard for review?'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleConfirmNoClick}>
              No
            </Button>
            <Button
              color="primary"
              autoFocus
              onClick={this.handleConfirmYesClick}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}