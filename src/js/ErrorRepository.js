const arrOfErrors = new Map;

export default class CodesErrors {
  constructor(codeOfError, nameOfError) {
    this.codeOfError = codeOfError;
    this.nameOfError = nameOfError;
      
    arrOfErrors.set(this,{
      codeOfError,
      nameOfError,
      });
  }

  translate(code) {  
    return code;
  }
}