import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

const mockUser = {
  name: 'John Doe',
  email: 'johndoe@email.com',
  password: 'strongpassword',
};

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('Create User', () => {
    it('should return created user', async () => {
      expect(await userController.create(mockUser)).toEqual({ body: mockUser });
    });
  });

  describe('Find All Users', () => {
    it('should return an array of users', async () => {
      expect(await userController.findAll()).toEqual({ users: [{}] });
    });
  });

  describe('Find One User', () => {
    it('should return a user by id', async () => {
      expect(await userController.findOne('1')).toEqual({ user: {}, id: '1' });
    });
  });

  describe('Update User', () => {
    it('should return updated user', async () => {
      expect(await userController.update('1', mockUser)).toEqual({
        user: {},
        id: '1',
        body: mockUser,
      });
    });
  });

  describe('Delete User', () => {
    it('should return deleted user', async () => {
      expect(await userController.remove('1')).toEqual({ user: {}, id: '1' });
    });
  });
});
