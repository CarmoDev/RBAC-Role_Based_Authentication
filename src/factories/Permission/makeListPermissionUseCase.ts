import { ListPermissionUseCase } from './../../application/useCases/listPermissionUseCase';

export function makeListPermissionUseCase() {
  return new ListPermissionUseCase();
}
