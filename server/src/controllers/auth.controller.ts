import { Request, Response } from 'express';

import AuthService from '../services/auth.service';

export class AuthController {
  async createSessionLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: '!Oop. Missing email or password',
        });
      }

      const user = await AuthService.login(email, password);

      res.cookie('jwt-token', user?.data?.accessToken, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
        domain: 'localhost',
        secure: false,
        path: '/',
      });
      res.json(user);

      console.log("cookie", user);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Oop. Login Failed!',
      });
    }
  }
}

export default new AuthController();
