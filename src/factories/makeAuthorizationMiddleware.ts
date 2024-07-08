import { AuthorizationMiddleware } from './../application/middlewares/AuthorizationMiddleware';
import { makeGetRolePermissionUseCase } from './makeGetRolesPermissionsUseCase';

export function makeAuthorizationMiddleware(allowedRoles: string[]) {
  return new AuthorizationMiddleware(allowedRoles, makeGetRolePermissionUseCase());
}
