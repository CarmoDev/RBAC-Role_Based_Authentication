import { ListRolePermissionController } from '../../application/controllers/ListRolePermissionController';
import { makeListRolePermissionUseCase } from './makeListRolePermissionUseCase';

export function makeListRolePermissionController() {
  const listRolePermissionUseCase = makeListRolePermissionUseCase();

  return new ListRolePermissionController(listRolePermissionUseCase);
}
