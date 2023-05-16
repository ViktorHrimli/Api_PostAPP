import { Request } from "express";

export interface IUserInfo {
  uuid: string;
  activeProfile: boolean;
  id: number;
  email: string;
  username: string;
  avatarUrl: string;
  password: string;
}

export interface UserRequest extends Request {
  user?: IUserInfo;
  file?: any;
}

export interface IUser {
  email: string;
  password: string;
  username: string;
  photo?: string;
}
