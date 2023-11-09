import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../errors/apiError';
import { JwtHelper } from '../../helpers/jwtHelper';
import { IAuthUser } from '../../interfaces/auth';

const auth =
  (...requiredRoles: string[]) =>
  async (req: any, res: Response, next: NextFunction) => {
    return new Promise(async (resolve, reject) => {
      const token = req.headers.authorization;
      console.log(token);
      if (!token) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized'));
      }

      const verifiedUser: IAuthUser = JwtHelper.verifyToken(token);

      if (!verifiedUser) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized'));
      }

      req.user = verifiedUser;
      console.log(requiredRoles.length);
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        console.log('fffor');
        return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
      }

      resolve(verifiedUser);
    })
      .then(() => next())
      .catch((err) => next(err));
  };

export default auth;
