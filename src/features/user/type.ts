import { UserInfo } from "firebase/auth";

export interface UserDate {
  authIsReady: boolean,
  info: UserInfo | null,
}