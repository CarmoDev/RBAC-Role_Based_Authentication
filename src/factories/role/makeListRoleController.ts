import { ListRoleController } from '../../application/controllers/ListRoleController';
import { makeListRoleUseCase } from './makeListRoleUseCase copy';

export function makeListRoleController() {
  const listRoleUseCase = makeListRoleUseCase();

  return new ListRoleController(listRoleUseCase);
}
