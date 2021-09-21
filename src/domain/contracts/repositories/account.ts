export interface CheckAccountByUsernameRepository {
  checkByUsername: (
    input: CheckAccountByUsernameRepository.Input
  ) => Promise<CheckAccountByUsernameRepository.Output>
}

export namespace CheckAccountByUsernameRepository {
  export type Input = {
    username: string
  }

  export type Output = boolean
}
