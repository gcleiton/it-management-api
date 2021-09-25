import { InvalidEmailError } from '@/application/errors'
import { EmailValidator } from '@/application/validation/validators'

describe('EmailValidator', () => {
  it('should return InvalidEmailValidator if email is invalid', () => {
    const sut = new EmailValidator('invalid_email')

    const error = sut.validate()

    expect(error).toEqual(new InvalidEmailError())
  })

  it('should return undefined if email is valid', () => {
    const sut = new EmailValidator('valid_email@mail.com')

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
