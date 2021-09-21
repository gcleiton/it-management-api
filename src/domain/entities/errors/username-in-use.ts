export class UsernameInUseError extends Error {
  constructor() {
    super('Este e-mail já está sendo usado.')
  }
}
