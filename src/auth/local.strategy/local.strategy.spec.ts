import { LocalStrategy } from './local.strategy';
import { AuthService } from '../auth.service';

describe('LocalStrategy', () => {
  let localStrategy: LocalStrategy;
  let authServiceMock: Partial<AuthService>;

  beforeEach(() => {
    authServiceMock = {
      validateUser: jest.fn(),
    };
    localStrategy = new LocalStrategy(authServiceMock as AuthService);
  });

  it('should be defined', () => {
    expect(localStrategy).toBeDefined();
  });
});
