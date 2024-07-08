import { ListRolePermissionUseCase } from '../../application/useCases/listRolePermissionUseCase';

export function makeListRolePermissionUseCase() {
  return new ListRolePermissionUseCase();
}
