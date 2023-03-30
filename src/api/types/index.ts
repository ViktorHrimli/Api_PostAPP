import { Request } from "express";

export interface IUserInfo {
  uuid: string;
  activeProfile: boolean;
  id: number;
  email: string;
  username: string;
  avatarUrl: string;
}

export interface UserRequest extends Request {
  user?: IUserInfo;
}
