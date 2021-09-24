import { PostgresAccountRepository } from '@/infra/repositories/postgres'
import { getConnection, getRepository, Repository } from 'typeorm'
import { PostgresUser } from '@/infra/repositories/postgres/entities'
import { IBackup } from 'pg-mem'
import { makeFakeDatabase } from './mocks/connection'

describe('PostgresAccountRepository', () => {
  const fakeAccount = {
    username: 'any_username',
    firstName: 'any_firstname',
    lastName: 'any_lastName',
    password: 'any_password',
    passwordConfirmation: 'any_password',
    email: 'any_email'
  }

  let sut: PostgresAccountRepository
  let postgresUserRepository: Repository<PostgresUser>
  let backup: IBackup

  beforeAll(async () => {
    const db = await makeFakeDatabase([PostgresUser])
    backup = db.backup()
    postgresUserRepository = getRepository(PostgresUser)
  })

  beforeEach(() => {
    backup.restore()
    sut = new PostgresAccountRepository()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  describe('checkByUsername', () => {
    it('should return true if username is already taken', async () => {
      await postgresUserRepository.save(fakeAccount)

      const isUsernameInUse = await sut.checkByUsername({
        username: 'any_username'
      })

      expect(isUsernameInUse).toBeTruthy()
    })
  })
})
