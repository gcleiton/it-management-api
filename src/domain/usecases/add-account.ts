import {
  AddAccountRepository,
  CheckAccountByEmailRepository,
  CheckAccountByUsernameRepository
} from '@/domain/contracts/repositories'
import {
  EmailInUseError,
  UsernameInUseError,
  ValidationError
} from '@/domain/entities/errors'
import { Hasher } from '@/domain/contracts/gateways'

type Input = {
  username: string
  firstName: string
  lastName: string
  password: string
  email: string
  phone?: string
}

type Output = {
  id: string
}

export class AddAccount {
  constructor(
    private readonly accountRepository: CheckAccountByUsernameRepository &
      CheckAccountByEmailRepository &
      AddAccountRepository,
    private readonly cryptography: Hasher
  ) {}

  async add(input: Input): Promise<Output> {
    const errors = await this.canPerform(input)
    if (errors.length > 0) {
      throw new ValidationError(errors)
    }

    const hashedPassword = await this.cryptography.hash({
      plaintext: input.password
    })

    const { id } = await this.accountRepository.add({
      ...input,
      password: hashedPassword
    })

    return { id }
  }

  private async canPerform(input: Input): Promise<Error[]> {
    const errors = []

    const usernameInUse = await this.accountRepository.checkByUsername({
      username: input.username
    })
    if (usernameInUse) {
      errors.push(new UsernameInUseError())
    }

    const emailInUse = await this.accountRepository.checkByEmail({
      email: input.email
    })
    if (emailInUse) {
      errors.push(new EmailInUseError())
    }

    return errors
  }
}
