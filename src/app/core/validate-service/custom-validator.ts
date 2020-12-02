// import { messageConstant } from './../../configs/app-constants';
import { FormControl } from '@angular/forms';
import {
  ErrorMesage,
  RangeOperation,
  Operator,
  CustomErrorType,
} from './validation-model';
import { FormGroup } from '@angular/forms';

export class CustomValidator {
  // Input is required
  static required(control: FormControl): ErrorMesage {
    const msg = 'This field is required.';
    const value = control.value.toString();
    if (!value.trim().length) {
      return new ErrorMesage(CustomErrorType.REQUIRED, msg);
    }
    return null;
  }

  // Input length need to be less than max
  static maxLength(max: number): any {
    return (control: FormControl): ErrorMesage => {
      if (`${control.value}`.length > max) {
        return new ErrorMesage(
          CustomErrorType.MAX_LENGTH,
          `Maximum length is ${max} characters.`
        );
      }
      return null;
    };
  }

  static numberOnly(control: FormControl): ErrorMesage {
    const msg = 'Number only';
    const value = control.value.toString().trim();
    if (value.replace(/[0-9]/g, '').length !== 0) {
      return new ErrorMesage(CustomErrorType.NUMBER_ONLY, msg);
    }
    return null;
  }

  // Input length from min to max
  static rangeLength(min: number, max: number): any {
    return (control: FormControl): ErrorMesage => {
      if (control.value !== null) {
        const length = control.value.length;
        if (length < min || length > max) {
          return new ErrorMesage(
            CustomErrorType.RANGE_LENGTH,
            `Length must be in range from ${min} to ${max}.`
          );
        }
        return null;
      } else {
        return null;
      }
    };
  }

  // Null one side if use only another side (-Inf, a] or [a, +Inf]
  static rangeValue(min?: number, max?: number, customMessage?: string): any {
    min = min || (min === 0 ? min : -Infinity);
    max = max || (max === 0 ? max : +Infinity);
    return (control: FormControl): ErrorMesage => {
      if (control.value !== null) {
        if (isNaN(control.value)) {
          return new ErrorMesage(CustomErrorType.NUMBER_ONLY, 'Number only');
        }
        const num = parseInt(control.value, 10);
        if (num < min || num > max) {
          return new ErrorMesage(
            CustomErrorType.RANGE,
            customMessage
              ? customMessage
              : `Input value must be in range from ${min} to ${max}.`
          );
        }
        return null;
      }
      return null;
    };
  }

  static rangeLengthExceptNone(min: number, max: number): any {
    return (control: FormControl): ErrorMesage => {
      if (control.value !== null && control.value.length !== 0) {
        const length = control.value.length;
        if (length < min || length > max) {
          return new ErrorMesage(
            CustomErrorType.RANGE_LENGTH,
            `Length must be in range from ${min} to ${max}.`
          );
        }
        return null;
      }
      return null;
    };
  }

  // compare value in two field with operators
  static compare(source: string, targetControlName: string, op: Operator): any {
    return (form: FormGroup): any => {
      const sourceVal = parseFloat(form.value[source]);
      const targetVal = parseFloat(form.value[targetControlName]);
      const targetControl = form.controls[source];

      if (
        sourceVal !== null &&
        targetVal !== null &&
        !isNaN(sourceVal) &&
        !isNaN(targetVal)
      ) {
        let isValid = true;
        switch (op.key) {
          case RangeOperation.GT.key: {
            isValid = sourceVal > targetVal;
            break;
          }
          case RangeOperation.LT.key: {
            isValid = sourceVal < targetVal;
            break;
          }
        }

        if (isValid) {
          if (
            targetControl.errors &&
            targetControl.errors.type === CustomErrorType.COMPARE
          ) {
            targetControl.setErrors(null);
            targetControl.updateValueAndValidity();
          }
          return form.errors;
        } else {
          targetControl.setErrors(
            new ErrorMesage(
              CustomErrorType.COMPARE,
              `Input value must be ${op.display} ${targetVal}.`
            )
          );
          return form.errors;
        }
      } else {
        return form.errors;
      }
    };
  }

  // unique value in group of input
  static unique(field: string): any {
    return (control: FormControl): any => {
      if (
        !control.value ||
        typeof control.value !== 'string' ||
        control.value.trim().length === 0
      ) {
        return null;
      }
      const duplicatedErr = new ErrorMesage(
        CustomErrorType.UNIQUE,
        `This field is duplicated.`
      );
      const currentVal: string = control.value;
      const group = control.parent;
      let isDuplicated = false;

      // check all validates
      Object.keys(group.controls).forEach((key) => {
        if (key !== field) {
          const crt = group.get(key);
          if (
            (crt.value as string).trim().toLowerCase() ===
            currentVal.trim().toLowerCase()
          ) {
            isDuplicated = true;
            return;
          }
        }
      });

      if (isDuplicated) {
        control.setErrors(duplicatedErr);
        return control.errors;
      }

      return null;
    };
  }

  // Input value must be between minControl and maxControl
  static rangeControl(
    source: string,
    minControlName: string,
    maxControlName: string
  ): any {
    return (form: FormGroup): any => {
      const sourceVal = parseFloat(form.value[source]);
      const min = parseFloat(form.value[minControlName]);
      const max = parseFloat(form.value[maxControlName]);
      const targetControl = form.controls[source];

      if (sourceVal !== null && !isNaN(min) && !isNaN(max) && min < max) {
        if (sourceVal >= min && sourceVal <= max) {
          // Valid
          if (
            targetControl.errors &&
            targetControl.errors.type === CustomErrorType.RANGE_CONTROL
          ) {
            targetControl.setErrors(null);
            targetControl.updateValueAndValidity();
          }
        } else {
          targetControl.setErrors(null);
          targetControl.setErrors(
            new ErrorMesage(
              CustomErrorType.RANGE_CONTROL,
              `Input value must be in range from ${min} to ${max}.`
            )
          );
        }
      } else {
        targetControl.setErrors(null);
      }

      return form.errors;
    };
  }

  static email(control: FormControl): ErrorMesage {
    const msg = 'Wrong email format.';
    const value = control.value;
    if (value === null) {
      return null;
    } else {
      if (`${value}`.match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        return null;
      } else {
        return new ErrorMesage(CustomErrorType.EMAIL, msg);
      }
    }
  }

  static matchField(sourceFieldName: string, matchFieldName: string): any {
    return (formGroup: FormGroup) => {
      const sourceControl = formGroup.controls[sourceFieldName];
      const matchControl = formGroup.controls[matchFieldName];

      if (
        matchControl.errors &&
        matchControl.errors.type !== CustomErrorType.MATH_PASSWORD
      ) {
        // Error in another validator
        return;
      }

      if (sourceControl.value !== matchControl.value) {
        matchControl.setErrors(
          new ErrorMesage(
            CustomErrorType.MATH_PASSWORD,
            `Target Input value and Source Input value don't match`
          )
        );
        return formGroup.errors;
      } else {
        matchControl.setErrors(null);
        sourceControl.setErrors(null);
        return formGroup.errors;
      }
    };
  }

  static checkSpecialCharacter(customMessage?: string): any {
    return (control: FormControl): ErrorMesage => {
      const msg = customMessage || 'Value must not contain special characters';
      const value = control.value;
      if (!value) {
        return null;
      } else {
        const regex = value.toString().match(/([\\{\^}%`\]>\[~<#|])+/g);
        if (!regex || regex.length === 0) {
          return null;
        } else {
          return new ErrorMesage(CustomErrorType.CHARACTER, msg);
        }
      }
    };
  }
}
