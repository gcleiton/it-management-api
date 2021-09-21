import {
  CheckAccountByEmailRepository,
  CheckAccountByUsernameRepository
} from '@/domain/contracts/repositories'
import { EmailInUseError, UsernameInUseError } from '@/domain/entities/errors'

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
    private readonly accountRepository: CheckAccountByUsernameRepository &
      CheckAccountByEmailRepository
  ) {}

  async add(input: Input): Promise<void> {
    const usernameInUse = await this.accountRepository.checkByUsername({
      username: input.username
    })
    if (usernameInUse) {
      throw new UsernameInUseError()
    }

    const emailInUse = await this.accountRepository.checkByEmail({
      email: input.email
    })

    if (emailInUse) {
      throw new EmailInUseError()
    }
  }
}
