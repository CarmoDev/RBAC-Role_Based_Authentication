import { ListPermissionController } from './../../application/controllers/listPermissionController';
import { makeListPermissionUseCase } from './makeListPermissionUseCase';

export function makeListPermissionController() {
  const listPermissionUseCase = makeListPermissionUseCase();

  return new ListPermissionController(listPermissionUseCase);
}
