import axios from "util/axios";
export interface ILoginInfoParams {
  username: string;
  password: string;
}
// 请求 登陆
export const getLoginInfo = (params: ILoginInfoParams): Promise<string> =>
  axios.post("/frame/login", params);
