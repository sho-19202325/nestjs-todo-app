import { User as CustomUser } from '@prisma/client';

declare global {
  namespace Express {
    export interface Request {
      user: Omit<CustomUser, 'hashedPassword'>;
    }
  }
}
