import { CreateRoleUseCase } from '../../application/useCases/createRoleUseCase';

export function makeCreateRoleUseCase() {
  return new CreateRoleUseCase();
}
