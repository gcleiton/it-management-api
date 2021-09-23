export class ValidationError extends Error {
  errors: Error[]

  constructor(errors: Error[]) {
    super('Falha na Validação.')
    this.errors = errors
  }
}
