import { CheckAccountByUsernameRepository } from '@/domain/contracts/repositories'
import { getRepository } from 'typeorm'
import { PostgresUser } from './entities'

export class PostgresAccountRepository
  implements CheckAccountByUsernameRepository
{
  async checkByUsername(
    input: CheckAccountByUsernameRepository.Input
  ): Promise<CheckAccountByUsernameRepository.Output> {
    const postgresAccountRepository = getRepository(PostgresUser)
    const locatedUser = await postgresAccountRepository.findOne({
      username: input.username
    })

    return locatedUser !== undefined
  }
}
