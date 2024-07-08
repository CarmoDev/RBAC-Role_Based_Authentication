import { ListPermissionUseCase } from './../useCases/listPermissionUseCase';
import { IController, IResponse } from '../interfaces/IController';

export class ListPermissionController implements IController {
  constructor(private readonly listPermissionUseCase: ListPermissionUseCase) {}

  async handle(): Promise<IResponse> {
    const permissions = await this.listPermissionUseCase.execute();

    return {
      statusCode: 200,
      body: permissions
    };
  }
}
