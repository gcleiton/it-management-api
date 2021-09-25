import { Validator } from '@/application/contracts'
import { StringMinFieldError } from '@/application/errors'

export class StringMinValidator implements Validator {
  constructor(readonly fieldValue: string, readonly minValue: number) {}

  validate(): Error | undefined {
    if (this.fieldValue.length < this.minValue) {
      return new StringMinFieldError(this.minValue)
    }
  }
}
