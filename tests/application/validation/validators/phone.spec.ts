import { InvalidPhoneError } from '@/application/errors'
import { PhoneValidator } from '@/application/validation/validators'

describe('PhoneValidator', () => {
  it('should return InvalidPhoneError if phone is invalid', () => {
    const sut = new PhoneValidator('invalid_phone')

    const error = sut.validate()

    expect(error).toEqual(new InvalidPhoneError())
  })

  it('should return undefined if phone is valid', () => {
    const sut = new PhoneValidator('85961234567')

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
