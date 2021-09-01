import Cookies from 'universal-cookie';
import { errorHandler } from '../errorHandler';
import { decryptWithAES, encryptWithAES } from '../permissionsAllow';

const cookies = new Cookies();

export function setUserId(info: any) {
  const encryptedRole = encryptWithAES(info.toString());
  cookies.set('admin_id', encryptedRole, { sameSite: true });
}

export function getUserId() {
  const id = cookies.get('admin_id');
  if (id) {
    const decryptedRole = decryptWithAES(id);
    return decryptedRole;
  }
}

export function removeUserId() {
  cookies.remove('admin_id');
}

export function setUserCompany(company: any) {
  const encryptedRole = encryptWithAES(company.toString());
  cookies.set('admin_company', encryptedRole, { sameSite: true });
}

export function getUserCompany() {
  const company = cookies.get('admin_company');
  if (company) {
    const decryptedRole = decryptWithAES(company);
    return decryptedRole;
  }
}

export function removeUserCompany() {
  cookies.remove('admin_company');
}
