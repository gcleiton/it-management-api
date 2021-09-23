import { mock, MockProxy } from 'jest-mock-extended'

import {
  AddAccountRepository,
  CheckAccountByEmailRepository,
  CheckAccountByUsernameRepository
} from '@/domain/contracts/repositories'
import { AddAccount } from '@/domain/usecases'
import {
  EmailInUseError,
  UsernameInUseError,
  ValidationError
} from '@/domain/entities/errors'
import { Hasher } from '@/domain/contracts/gateways'

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
    CheckAccountByUsernameRepository &
      CheckAccountByEmailRepository &
      AddAccountRepository
  >
  let cryptography: MockProxy<Hasher>
  let sut: AddAccount

  beforeAll(() => {
    accountRepository = mock()
    accountRepository.add.mockResolvedValue({
      id: 'any_id'
    })
    cryptography = mock()
    cryptography.hash.mockResolvedValue('hashed_password')
  })

  beforeEach(() => {
    sut = new AddAccount(accountRepository, cryptography)
  })

  it('should call CheckAccountByUsernameRepository with correct input', async () => {
    await sut.perform(fakeAccount)

    expect(accountRepository.checkByUsername).toHaveBeenCalledWith({
      username: fakeAccount.username
    })
    expect(accountRepository.checkByUsername).toHaveBeenCalledTimes(1)
  })

  it('should throw UsernameInUseError when username already taken', async () => {
    accountRepository.checkByUsername.mockResolvedValueOnce(true)

    const promise = sut.perform(fakeAccount)

    await expect(promise).rejects.toThrow(
      new ValidationError([new UsernameInUseError()])
    )
  })

  it('should call CheckAccountByEmailRepository with correct input', async () => {
    await sut.perform(fakeAccount)

    console.log('test')

    expect(accountRepository.checkByEmail).toHaveBeenCalledWith({
      email: fakeAccount.email
    })
    expect(accountRepository.checkByEmail).toHaveBeenCalledTimes(1)
  })

  it('should throw ValidationError when email already taken', async () => {
    accountRepository.checkByEmail.mockResolvedValueOnce(true)

    const promise = sut.perform(fakeAccount)

    await expect(promise).rejects.toThrow(
      new ValidationError([new EmailInUseError()])
    )
  })

  it('should throw ValidationError when email and username already taken', async () => {
    accountRepository.checkByEmail.mockResolvedValueOnce(true)
    accountRepository.checkByUsername.mockResolvedValueOnce(true)

    const promise = sut.perform(fakeAccount)

    await expect(promise).rejects.toThrow(
      new ValidationError([new EmailInUseError(), new UsernameInUseError()])
    )
  })

  it('should call Hasher with correct input', async () => {
    await sut.perform(fakeAccount)

    expect(cryptography.hash).toHaveBeenCalledWith({
      plaintext: fakeAccount.password
    })
    expect(cryptography.hash).toHaveBeenCalledTimes(1)
  })

  it('should call AddAccountRepository with correct input', async () => {
    await sut.perform(fakeAccount)

    expect(accountRepository.add).toHaveBeenCalledWith({
      ...fakeAccount,
      password: 'hashed_password'
    })
    expect(accountRepository.add).toHaveBeenCalledTimes(1)
  })

  it('should return id on success', async () => {
    const { id } = await sut.perform(fakeAccount)

    expect(id).toEqual('any_id')
  })
})
