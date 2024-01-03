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

  describe('root', () => {
    it('should return created user', async () => {
      expect(await userController.create(mockUser)).toEqual({ body: mockUser });
    });
  });
});
