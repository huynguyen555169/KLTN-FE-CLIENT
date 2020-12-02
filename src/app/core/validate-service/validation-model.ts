export class ErrorMesage {
  type: CustomErrorType;
  message: string;

  constructor(type: CustomErrorType, message: string) {
    this.type = type;
    this.message = message;
  }
}

export enum CustomErrorType {
  REQUIRED = 0,
  MAX_LENGTH = 1,
  RANGE = 2,
  COMPARE = 3,
  UNIQUE = 4,
  POSITIVE_NUMBER = 5,
  RANGE_CONTROL = 6,
  EMAIL = 7,
  RANGE_LENGTH = 8,
  CHARACTER = 9,
  NUMBER_ONLY,
  MATH_PASSWORD
}

export interface Operator {
  key: number;
  display: string;
}

export const RangeOperation = {
  GT: {
    key: 0,
    display: 'greater than'
  },
  LT: {
    key: 1,
    display: 'less than'
  },
  EQ: {
    key: 2,
    display: 'equal to'
  }
};
