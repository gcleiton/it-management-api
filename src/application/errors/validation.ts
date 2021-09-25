export class RequiredFieldError extends Error {
  constructor() {
    super('O campo é obrigatório.')
    this.name = 'RequiredFieldError'
  }
}

export class StringMinFieldError extends Error {
  constructor(value: number) {
    super(`O campo deve ter pelo menos ${value} caracteres.`)
  }
}
