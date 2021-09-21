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

export interface CheckAccountByEmailRepository {
  checkByEmail: (
    input: CheckAccountByEmailRepository.Input
  ) => Promise<CheckAccountByEmailRepository.Output>
}

export namespace CheckAccountByEmailRepository {
  export type Input = {
    email: string
  }

  export type Output = boolean
}
