import { RequiredFieldError } from '@/application/errors'
import { RequiredValidator } from '@/application/validation/validators'

describe('Required', () => {
  it('should return RequiredFieldError if value is null', () => {
    const sut = new RequiredValidator(null, 'any_field')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return RequiredFieldError if value is undefined', () => {
    const sut = new RequiredValidator(undefined, 'any_field')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return undefined if value is not empty', () => {
    const sut = new RequiredValidator('any_value', 'any_field')

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
