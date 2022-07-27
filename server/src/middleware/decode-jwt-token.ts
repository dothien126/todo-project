import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../models/user.model';

const adminRight = [
  'get-users',
  'get-roles',
  'delete-user',
  'delete-role',
  'update-user',
  'update-role',
];
const userRight = ['create-user'];

export const middlewareAuth = {
  //verify token
  verifyToken: async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    try {
      if (token) {
        const accessToken = token.split(' ')[1];
        const secretOrKey = process.env.JWT_SECRET as string;
        const data: any = jwt.verify(accessToken, secretOrKey);

        const user = await User.findOne({ id: data.id });
        if (user) {
          next();
        }
      } else {
        return res.status(400).json('Token is not exist!');
      }
    } catch (error) {
      res.status(401).json('You are not authentication!');
    }
  },
};
