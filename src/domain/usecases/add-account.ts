import { CheckAccountByUsernameRepository } from '@/domain/contracts/repositories'

type Input = {
  username: string
  firstName: string
  lastName: string
  password: string
  passwordConfirmation: string
  email: string
  phone?: string
}

export class AddAccount {
  constructor(
    private readonly accountRepository: CheckAccountByUsernameRepository
  ) {}

  async add(input: Input): Promise<void> {
    this.accountRepository.checkByUsername({ username: input.username })
  }
}
