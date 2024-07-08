
import { CreateRoleController } from '../../application/controllers/CreateRoleController';
import { makeCreateRoleUseCase } from './makeCreateRoleUseCase';

export function makeCreateRoleController() {
  const createRoleUseCase = makeCreateRoleUseCase();

  return new CreateRoleController(createRoleUseCase);
}
