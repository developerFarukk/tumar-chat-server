import { Model } from "mongoose";

// Create User
export interface TUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    // role: UserRole;
    // status: 'in-progress' | 'blocked';
    // isDeleted: boolean;
    address?: string;
    image?: string;
    number?: string;
    // passwordChangedAt?: Date;
}


// export interface UserModel extends Model<TUser> {
    
//     isUserExistsByEmail(email: string): Promise<TUser>;

    
//     // checkUserExist(userId: string): Promise<TUser>;

//     getPublicUserData(email: string): Promise<Pick<TUser, '_id' | 'name' | 'email' | 'number' | 'address' | 'image'>>;

//     //instance methods for checking if passwords are matched
//     isPasswordMatched(
//         plainTextPassword: string,
//         hashedPassword: string,
//     ): Promise<boolean>;
// }

export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser | null>;

  getPublicUserData(
    email: string
  ): Promise<
    Pick<TUser, '_id' | 'name' | 'email' | 'number' | 'address' | 'image'>
  >;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}



export interface TAuth {
    email: string;
    password: string;
}

export interface TJwtPayload {
    _id: string;
    name: string;
    email: string;
    // role: UserRole;
    image?: string;
    // status: 'in-progress' | 'blocked';
    address?: string;
    number?: string;
}