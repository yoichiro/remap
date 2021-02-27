import { KeyLabel } from './KeyLabel';

// define here because of avoiding the recursive reference
const MOD_RIGHT = 0b10000;
//const MOD_CTL = 0b0001;
const MOD_SFT = 0b0010;
//const MOD_ALT = 0b0100;
//const MOD_GUI = 0b1000;

export const KeyLabelJp: KeyLabel[] = [
  {
    code: 4,
    label: 'A',
  },
  {
    code: 5,
    label: 'B',
  },
  {
    code: 6,
    label: 'C',
  },
  {
    code: 7,
    label: 'D',
  },
  {
    code: 8,
    label: 'E',
  },
  {
    code: 9,
    label: 'F',
  },
  {
    code: 10,
    label: 'G',
  },
  {
    code: 11,
    label: 'H',
  },
  {
    code: 12,
    label: 'I',
  },
  {
    code: 13,
    label: 'J',
  },
  {
    code: 14,
    label: 'K',
  },
  {
    code: 15,
    label: 'L',
  },
  {
    code: 16,
    label: 'M',
  },
  {
    code: 17,
    label: 'N',
  },
  {
    code: 18,
    label: 'O',
  },
  {
    code: 19,
    label: 'P',
  },
  {
    code: 20,
    label: 'Q',
  },
  {
    code: 21,
    label: 'R',
  },
  {
    code: 22,
    label: 'S',
  },
  {
    code: 23,
    label: 'T',
  },
  {
    code: 24,
    label: 'U',
  },
  {
    code: 25,
    label: 'V',
  },
  {
    code: 26,
    label: 'W',
  },
  {
    code: 27,
    label: 'X',
  },
  {
    code: 28,
    label: 'Y',
  },
  {
    code: 29,
    label: 'Z',
  },
  {
    code: 30,
    label: '1',
    meta: [
      {
        label: '!',
        modifiers: MOD_SFT,
      },
      {
        label: '!',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 31,
    label: '2',
    meta: [
      {
        label: '"',
        modifiers: MOD_SFT,
      },
      {
        label: '"',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 32,
    label: '3',
    meta: [
      {
        label: '#',
        modifiers: MOD_SFT,
      },
      {
        label: '#',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 33,
    label: '4',
    meta: [
      {
        label: '$',
        modifiers: MOD_SFT,
      },
      {
        label: '$',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 34,
    label: '5',
    meta: [
      {
        label: '%',
        modifiers: MOD_SFT,
      },
      {
        label: '%',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 35,
    label: '6',
    meta: [
      {
        label: '&',
        modifiers: MOD_SFT,
      },
      {
        label: '&',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 36,
    label: '7',
    meta: [
      {
        label: "'",
        modifiers: MOD_SFT,
      },
      {
        label: "'",
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 37,
    label: '8',
    meta: [
      {
        label: '(',
        modifiers: MOD_SFT,
      },
      {
        label: '(',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 38,
    label: '9',
    meta: [
      {
        label: ')',
        modifiers: MOD_SFT,
      },
      {
        label: ')',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 39,
    label: '0',
  },
  {
    code: 45,
    label: '-',
    meta: [
      {
        label: '=',
        modifiers: MOD_SFT,
      },
      {
        label: '=',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 46,
    label: '^',
    meta: [
      {
        label: '~',
        modifiers: MOD_SFT,
      },
      {
        label: '~',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 47,
    label: '@',
    meta: [
      {
        label: '`',
        modifiers: MOD_SFT,
      },
      {
        label: '`',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 48,
    label: '[',
    meta: [
      {
        label: '{',
        modifiers: MOD_SFT,
      },
      {
        label: '{',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 49,
    label: ']',
    meta: [
      {
        label: '}',
        modifiers: MOD_SFT,
      },
      {
        label: '}',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 50,
    label: ']',
    meta: [
      {
        label: '}',
        modifiers: MOD_SFT,
      },
      {
        label: '}',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 51,
    label: ';',
    meta: [
      {
        label: '+',
        modifiers: MOD_SFT,
      },
      {
        label: '+',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 52,
    label: ':',
    meta: [
      {
        label: '*',
        modifiers: MOD_SFT,
      },
      {
        label: '*',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 53,
    label: '半角/全角',
  },
  {
    code: 54,
    label: ',',
    meta: [
      {
        label: '<',
        modifiers: MOD_SFT,
      },
      {
        label: '<',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 55,
    label: '.',
    meta: [
      {
        label: '>',
        modifiers: MOD_SFT,
      },
      {
        label: '>',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 56,
    label: '/',
    meta: [
      {
        label: '?',
        modifiers: MOD_SFT,
      },
      {
        label: '?',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 57,
    label: '英数',
    meta: [
      {
        label: 'Caps Lock',
        modifiers: MOD_SFT,
      },
      {
        label: 'Caps Lock',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 135,
    label: '¥',
    meta: [
      {
        label: '_',
        modifiers: MOD_SFT,
      },
      {
        label: '_',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 136,
    label: 'かな',
  },
  {
    code: 137,
    label: '¥',
    meta: [
      {
        label: '|',
        modifiers: MOD_SFT,
      },
      {
        label: '|',
        modifiers: MOD_RIGHT | MOD_SFT,
      },
    ],
  },
  {
    code: 138,
    label: '変換',
  },
  {
    code: 139,
    label: '無変換',
  },
  {
    code: 144,
    label: 'かな',
  },
  {
    code: 145,
    label: '英数',
  },
];
