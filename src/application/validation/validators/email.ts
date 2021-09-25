import { Validator } from '@/application/contracts'
import { InvalidEmailError } from '@/application/errors'

export class EmailValidator implements Validator {
  constructor(readonly value: string) {}

  validate(): Error | undefined {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const isValidEmail = emailPattern.test(this.value)

    if (!isValidEmail) {
      return new InvalidEmailError()
    }
  }
}
