import { URL_API } from "../config";
import { setHeaders } from "../helpers/setHeaders";

export const PostLogin = async (data: any) => {
  return fetch(`${URL_API}/users/login`, {
    method: 'POST',
    headers: setHeaders(),
    body: JSON.stringify(data)
  });
};
