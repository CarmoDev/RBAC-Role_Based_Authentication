import { ListRoleUseCase } from './../useCases/listRoleUseCase';
import { IController, IResponse } from '../interfaces/IController';

export class ListRoleController implements IController {
  constructor(private readonly listRoleUseCase: ListRoleUseCase) {}

  async handle(): Promise<IResponse> {
    const roles = await this.listRoleUseCase.execute();

    return {
      statusCode: 200,
      body: roles
    };
  }
}
