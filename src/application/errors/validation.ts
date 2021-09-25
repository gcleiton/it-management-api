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

export class InvalidEmailError extends Error {
  constructor() {
    super('O campo deve ser um endereço de e-mail válido.')
  }
}
