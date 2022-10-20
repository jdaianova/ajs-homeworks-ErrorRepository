const arrOfErrors = new Map();

export class CodesErrors {
  constructor(codeOfError, nameOfError) {
    this.codeOfError = codeOfError;
    this.nameOfError = nameOfError;

    arrOfErrors.set(
      codeOfError,
      nameOfError,
    );
  }
}

export function translate(code) {
  if ([...arrOfErrors.keys()].includes(code)) {
    return arrOfErrors.get(code);
  } return 'Unknown error';
}
