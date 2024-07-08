import { IController, IResponse } from '../interfaces/IController';
import { ListRolePermissionUseCase } from '../useCases/listRolePermissionUseCase';

export class ListRolePermissionController implements IController {
  constructor(private readonly listRolePermissionUseCase: ListRolePermissionUseCase) {}

  async handle(): Promise<IResponse> {
    const roles = await this.listRolePermissionUseCase.execute();

    return {
      statusCode: 200,
      body: roles
    };
  }
}
