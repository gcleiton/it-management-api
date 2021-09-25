import { Validator } from '@/application/contracts'
import { InvalidPhoneError } from '@/application/errors'

export class PhoneValidator implements Validator {
  constructor(readonly value: string) {}

  validate(): Error | undefined {
    const phonePattern = /^([1-9][0-9])([9][2-9])\d{7}$/

    const isValid = phonePattern.test(this.value)

    if (!isValid) {
      return new InvalidPhoneError()
    }
  }
}
