import { JwtStrategy } from './jwt.strategy';
import { AuthService } from '../auth.service';

describe('JwtStrategy', () => {
  it('should be defined', () => {
    const authServiceMock = {} as AuthService; // Puedes utilizar un mock de AuthService si es necesario
    expect(new JwtStrategy(authServiceMock)).toBeDefined();
  });
});
