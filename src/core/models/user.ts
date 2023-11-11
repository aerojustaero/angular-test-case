// user.model.ts
export interface IUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  }

  export type UserLoginRequest =  {
    username: string;
    password: string;
}
