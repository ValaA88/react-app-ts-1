import Cookies from 'universal-cookie';
import { decryptWithAES, encryptWithAES } from '../permissionsAllow';

const cookies = new Cookies();

export function setUserRoles(roles: any) {
  const encryptedRole = encryptWithAES(roles.toString());
  cookies.set('admin_role', encryptedRole, { sameSite: true });
}

export function getUserRoles() {
  const role = cookies.get('admin_role');
  if (role) {
    const decryptedRole = decryptWithAES(role);
    return decryptedRole;
  }
}

export function removeUserRoles() {
  cookies.remove('admin_role');
}

export function setUserPermission(permission: any) {
  const encryptedRole = encryptWithAES(permission.toString());
  cookies.set('admin_permission', encryptedRole, { sameSite: true });
}

export function getUserPermission() {
  const permission = cookies.get('admin_permission');
  if (permission) {
    const decryptedPermission = decryptWithAES(permission);
    return decryptedPermission;
  }
}

export function removeUserPermission() {
  cookies.remove('admin_permission');
}
