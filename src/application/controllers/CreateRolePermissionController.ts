import { z, ZodError } from 'zod';
import { IController, IResponse } from '../interfaces/IController';
import { IRequest } from '../interfaces/IRequest';
import { RoleAlreadyExists } from '../errors/RoleAlreadyExists';
import { CreateRolePermissionUseCase } from '../useCases/createRolePermissionUseCase';

const schema = z.object({
  roleId: z.string().uuid().min(2),
  permissionCode: z.string().min(6),
});


export class CreateRolePermissionController implements IController {
  constructor(private readonly createRolePermissionUseCase: CreateRolePermissionUseCase) {}

  async handle({body}: IRequest): Promise<IResponse> {
    try {
      const { roleId, permissionCode } = schema.parse(body);


      await this.createRolePermissionUseCase.execute({ roleId, permissionCode});

      return {
        statusCode: 204,
        body: null
      };
    } catch(error) {
      if(error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues
        };
      }

      if(error instanceof RoleAlreadyExists) {
        return  {
          statusCode: 409,
          body: {
            error: 'This Relation already exists.'
          }
        };
      }

      throw error;
    }
  }
}
