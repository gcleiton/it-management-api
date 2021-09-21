export class UsernameInUseError extends Error {
  constructor() {
    super('Este nome de usuário já está sendo usado.')
  }
}
