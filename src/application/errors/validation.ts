export class RequiredFieldError extends Error {
  constructor(fieldName: string) {
    super(`O campo ${fieldName} é obrigatório.`)
    this.name = 'RequiredFieldError'
  }
}
