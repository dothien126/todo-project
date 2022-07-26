import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../models/user.model';

class AuthService {
  // session login
  async login(email: string, password: string) {
    try {
      const user = await User.findOne({ email });
      const userInfor = await User.findOne({ email }).select('-password');
      if (!user) {
        return {
          success: false,
          message: 'Oop. Incorrect email or password!',
        };
      }

      const isComparePassword = user && (await bcrypt.compare(password, user.password));
      if (!isComparePassword) {
        return {
          success: false,
          message: 'Oop. Password is wrong. Please enter again!',
        };
      }

      const jwtSecret = process.env.JWT_SECRET!;
      const accessToken: string = jwt.sign(
        {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        jwtSecret,
        { expiresIn: '1d' }
      );

      return {
        sucess: true,
        data: { userInfor, accessToken },
        message: 'Login successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Login fail!',
      };
    }
  }
}

export default new AuthService();
