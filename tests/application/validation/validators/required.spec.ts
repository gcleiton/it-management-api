import { RequiredFieldError } from '@/application/errors'
import {
  RequiredValidator,
  StringRequiredValidator
} from '@/application/validation/validators'

describe('RequiredValidator', () => {
  it('should return RequiredFieldError if value is null', () => {
    const sut = new RequiredValidator(null)

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return RequiredFieldError if value is undefined', () => {
    const sut = new RequiredValidator(undefined)

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return undefined if value is not empty', () => {
    const sut = new RequiredValidator('any_value')

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})

describe('StringRequiredValidator', () => {
  it('should extends RequiredValidator', () => {
    const sut = new StringRequiredValidator('')

    expect(sut).toBeInstanceOf(RequiredValidator)
  })

  it('should return RequiredFieldError if value is empty', () => {
    const sut = new StringRequiredValidator('')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return undefined if value is not empty', () => {
    const sut = new StringRequiredValidator('any_value')

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
