import CryptoJS from 'crypto-js';
import { getUserRoles } from './cookies/userRolesCookies';

export const roleKey = 'CorplifeLunchRole';

export function decryptWithAES(ciphertext: any) {
  const passphrase = roleKey;
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

export function encryptWithAES(text: string) {
  const passphrase = roleKey;
  return CryptoJS.AES.encrypt(text, passphrase).toString();
}

export function isAllowed() {
  const role = getUserRoles();
  if (role === '1' || role === '5') {
    return true;
  } else {
    return false;
  }
}
