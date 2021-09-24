import {
  CheckAccountByEmailRepository,
  CheckAccountByUsernameRepository
} from '@/domain/contracts/repositories'
import { getRepository } from 'typeorm'
import { PostgresUser } from './entities'

export class PostgresAccountRepository
  implements CheckAccountByUsernameRepository, CheckAccountByEmailRepository
{
  async checkByUsername({
    username
  }: CheckAccountByUsernameRepository.Input): Promise<CheckAccountByUsernameRepository.Output> {
    const postgresAccountRepository = getRepository(PostgresUser)
    const locatedUser = await postgresAccountRepository.findOne({
      username
    })

    return locatedUser !== undefined
  }

  async checkByEmail({
    email
  }: CheckAccountByEmailRepository.Input): Promise<CheckAccountByEmailRepository.Output> {
    const postgresAccountRepository = getRepository(PostgresUser)
    const locatedUser = await postgresAccountRepository.findOne({
      email
    })

    return locatedUser !== undefined
  }
}
