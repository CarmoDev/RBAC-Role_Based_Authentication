import { CreateRolePermissionUseCase } from './../../application/useCases/createRolePermissionUseCase';

export function makeCreateRolePermissionUseCase() {
  return new CreateRolePermissionUseCase();
}
