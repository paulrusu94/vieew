import { FormArray, FormGroup } from '@angular/forms';

export const DEFAULT_GENERIC_VALIDATION_ERROR_MESSAGE = 'This doesn\'t seem to be a valid value.';

export const GENERIC_VALIDATION_ERROR_MESSAGES: any = {
  required: 'This field is required.',
  minlength: 'Too short.',
  maxlength: 'Too long.',
  pattern: DEFAULT_GENERIC_VALIDATION_ERROR_MESSAGE,
  MatchPassword: 'Password does not match.',
  completeAtLeastOneSection: 'Please complete at least one section.',
};


export class ValidationMessagesBuilder {

  static buildValidationMessages(form: FormGroup) {
    const errorMessages: any = {};

    // tslint:disable-next-line:forin
    for (const field in form.controls) {
      const control = form.get(field);

       // If a disabled form control has a value, it is considered invalid because it cannot be used to submit valid data, so we need to bypass that
      if (control && control.touched && !control.valid && !control.disabled) {
        errorMessages[field] = [];

        if (control instanceof FormArray) {
          const innerControlls: any = control.controls;
          Object.values(innerControlls).forEach((formGroup: any) => {
            const errors: any[] = [];
            Object.entries(formGroup.controls).forEach(([innerField, innerControl]: [string, any]) => {
              if (innerControl && innerControl.touched && !innerControl.valid) {
                for (const key in innerControl.errors) {
                  errors.push({
                    [innerField]: GENERIC_VALIDATION_ERROR_MESSAGES[key],
                  });
                }
              }
            });
            errorMessages[field].push(errors);
          });
        } else {
          // tslint:disable-next-line:forin
          for (const key in control.errors) {
            errorMessages[field].push(GENERIC_VALIDATION_ERROR_MESSAGES[key]);
          }
        }

      }
    }

    return errorMessages;
  }

  static buildFormArrayValidationMessages(form: FormArray) {
    const errorMessages: any = {};
    
    Object.values(form.controls).forEach((item: any) => {
      // tslint:disable-next-line:forin
      const questions = item.get('questions');
      
      // Validate Sections
      const groupTypeQuestions = Object.values(item.get('questions').controls).filter((question: any) => question.get('inputType').value === 'group');

      if(groupTypeQuestions?.length) {
        if(!groupTypeQuestions.some((question: any) => question.get('checked').value)) {
          errorMessages['sectionError'] = [];
          for (const key in item.get('questions').errors) {
            errorMessages['sectionError'].push(GENERIC_VALIDATION_ERROR_MESSAGES[key]);
          }
        }
      }

      // Validation Questions
      for (const field in questions.controls) {
        const control = questions.get(field);
        const { inputType } = control.value;

        if(inputType === 'checkbox') {
          const answers = control.get('answers') as FormGroup;

          if (answers && !answers.valid) {
            errorMessages[field] = [];
            Object.values(answers.controls).forEach((formGroup: any) => {
              const errors = [];
              // tslint:disable-next-line:forin
              for (const key in formGroup.errors) {
                errors.push(GENERIC_VALIDATION_ERROR_MESSAGES[key]);
              }
              errorMessages[field].push(errors);
            });
          }
        }

        if(inputType === 'radio' || inputType === 'text' || inputType === 'texarea') {
          const answers = control.get('answers') as FormGroup;

          if (answers && !answers.valid) {
            errorMessages[field] = [];
            Object.values(answers.controls).forEach((formGroup: any) => {
              const errors = [];
              // tslint:disable-next-line:forin
              for (const key in formGroup.errors) {
                errors.push(GENERIC_VALIDATION_ERROR_MESSAGES[key]);
              }
              errorMessages[field].push(errors);
            });
          }
        }
      }
    });

    return errorMessages;
  }

}
