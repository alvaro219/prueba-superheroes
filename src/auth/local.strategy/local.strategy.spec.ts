import { LocalStrategy } from './local.strategy';
import { AuthService } from '../jwt.strategy/auth.service';

describe('LocalStrategy', () => {
  let LocalStrategy: LocalStrategy;
  let authServiceMock: Partial<AuthService>;

  beforeEach(() => {
    authServiceMock = {
      validateUser: jest.fn(),
    };
    LocalStrategy = new LocalStrategy(authServiceMock as AuthService);
  });


  it('should be defined', () => {
    expect(LocalStrategy).toBeDefined();
  });
});
