import { CreateRolePermissionController } from './../../application/controllers/CreateRolePermissionController';
import { makeCreateRolePermissionUseCase } from './makeCreateRolePermissionUseCase';

export function makeCreateRolePermissionController() {
  const createRolePermissionUseCase = makeCreateRolePermissionUseCase();

  return new CreateRolePermissionController(createRolePermissionUseCase);
}
