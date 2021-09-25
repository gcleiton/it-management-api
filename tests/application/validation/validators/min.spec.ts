import { StringMinFieldError } from '@/application/errors'
import { StringMinValidator } from '@/application/validation/validators'

describe('StringMinValidator', () => {
  const fieldValue = 'any_field_value'

  it('should return StringMinFieldError if quantity of characters in the field value is less than minimum value', () => {
    const sut = new StringMinValidator(fieldValue, fieldValue.length + 1)

    const error = sut.validate()

    expect(error).toEqual(new StringMinFieldError(fieldValue.length + 1))
  })

  it('should return undefined if quantity of characters in the field value is equal minimum value', () => {
    const sut = new StringMinValidator(fieldValue, fieldValue.length)

    const error = sut.validate()

    expect(error).toBeUndefined()
  })

  it('should return undefined if quantity of characters in the field value is greater than minimum value', () => {
    const sut = new StringMinValidator(fieldValue, fieldValue.length - 1)

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
