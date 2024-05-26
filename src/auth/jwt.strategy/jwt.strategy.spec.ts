import { JwtStrategy } from './jwt.strategy';
import { AuthService } from '../auth.service';

describe('JwtStrategy', () => {
  it('should be defined', () => {
    const authServiceMock = {} as AuthService;
    expect(new JwtStrategy(authServiceMock)).toBeDefined();
  });
});
