import { RequiredFieldError } from '@/application/errors'
import { Validator } from '@/application/contracts'

export class RequiredValidator implements Validator {
  constructor(readonly value: any) {}

  validate(): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new RequiredFieldError()
    }
  }
}

export class StringRequiredValidator extends RequiredValidator {
  constructor(override readonly value: string) {
    super(value)
  }

  override validate(): Error | undefined {
    if (super.validate() !== undefined || this.value === '') {
      return new RequiredFieldError()
    }
  }
}
