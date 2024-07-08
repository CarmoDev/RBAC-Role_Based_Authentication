import { getRolePermissionsUseCase } from '../application/useCases/GetRolePermissionsUseCase';

export function makeGetRolePermissionUseCase() {
  return new getRolePermissionsUseCase();
}
