import Cookies from 'universal-cookie';
import { decryptWithAES, encryptWithAES } from '../permissionsAllow';

const cookies = new Cookies();

export function setToken(token: string) {
  const encryptedRole = encryptWithAES(token.toString());
  cookies.set('admin_key', encryptedRole, { sameSite: true });
}

export function getToken() {
  const token = cookies.get('admin_key');
  if (token) {
    const decryptedRole = decryptWithAES(token);
    return decryptedRole;
  }
}

export function removeToken() {
  cookies.remove('admin_key');
}
