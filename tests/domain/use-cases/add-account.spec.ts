import { mock, MockProxy } from 'jest-mock-extended'

import {
  CheckAccountByEmailRepository,
  CheckAccountByUsernameRepository
} from '@/domain/contracts/repositories'
import { AddAccount } from '@/domain/usecases'
import {
  EmailInUseError,
  UsernameInUseError,
  ValidationError
} from '@/domain/entities/errors'

describe('AddAccount Usecase', () => {
  const fakeAccount = {
    username: 'any_username',
    firstName: 'any_firstname',
    lastName: 'any_lastName',
    password: 'any_password',
    passwordConfirmation: 'any_password',
    email: 'any_email'
  }

  let accountRepository: MockProxy<
    CheckAccountByUsernameRepository & CheckAccountByEmailRepository
  >
  let sut: AddAccount

  beforeAll(() => {
    accountRepository = mock()
  })

  beforeEach(() => {
    sut = new AddAccount(accountRepository)
  })

  it('should call CheckAccountByUsernameRepository with correct input', async () => {
    await sut.add(fakeAccount)

    expect(accountRepository.checkByUsername).toHaveBeenCalledWith({
      username: fakeAccount.username
    })
    expect(accountRepository.checkByUsername).toHaveBeenCalledTimes(1)
  })

  it('should throw UsernameInUseError when username already taken', async () => {
    accountRepository.checkByUsername.mockResolvedValueOnce(true)

    const promise = sut.add(fakeAccount)

    await expect(promise).rejects.toThrow(
      new ValidationError([new UsernameInUseError()])
    )
  })

  it('should call CheckAccountByEmailRepository with correct input', async () => {
    await sut.add(fakeAccount)

    console.log('test')

    expect(accountRepository.checkByEmail).toHaveBeenCalledWith({
      email: fakeAccount.email
    })
    expect(accountRepository.checkByEmail).toHaveBeenCalledTimes(1)
  })

  it('should throw ValidationError when email already taken', async () => {
    accountRepository.checkByEmail.mockResolvedValueOnce(true)

    const promise = sut.add(fakeAccount)

    await expect(promise).rejects.toThrow(
      new ValidationError([new EmailInUseError()])
    )
  })

  it('should throw ValidationError when email and username already taken', async () => {
    accountRepository.checkByEmail.mockResolvedValueOnce(true)
    accountRepository.checkByUsername.mockResolvedValueOnce(true)

    const promise = sut.add(fakeAccount)

    await expect(promise).rejects.toThrow(
      new ValidationError([new EmailInUseError(), new UsernameInUseError()])
    )
  })
})
