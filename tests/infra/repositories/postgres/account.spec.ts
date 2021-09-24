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

    it('should return false if username is not already taken', async () => {
      const isUsernameInUse = await sut.checkByUsername({
        username: 'any_username'
      })

      expect(isUsernameInUse).toBeFalsy()
    })
  })

  describe('checkByEmail', () => {
    it('should return true if email is already taken', async () => {
      await postgresUserRepository.save(fakeAccount)

      const isEmailInUse = await sut.checkByEmail({
        email: 'any_email'
      })

      expect(isEmailInUse).toBeTruthy()
    })

    it('should return false if email is not already taken', async () => {
      const isEmailInUse = await sut.checkByEmail({
        email: 'any_email'
      })

      expect(isEmailInUse).toBeFalsy()
    })
  })

  describe('add', () => {
    it('should return an account id on success', async () => {
      const { id } = await sut.add(fakeAccount)
      const postgresUser = await postgresUserRepository.findOne(id)

      expect(postgresUser).toMatchObject({
        id: parseInt(id)
      })
    })
  })
})
