export interface CheckAccountByUsernameRepository {
  checkByUsername: (input: CheckAccountByUsernameRepository.Input) => void
}

export namespace CheckAccountByUsernameRepository {
  export type Input = {
    username: string
  }
}
