import { CreatePermissionUseCase } from './../../application/useCases/createPermissionUseCase';

export function makeCreatePermissionUseCase() {
  return new CreatePermissionUseCase();
}
