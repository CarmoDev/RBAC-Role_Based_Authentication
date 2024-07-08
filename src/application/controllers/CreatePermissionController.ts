import { CreatePermissionUseCase } from './../useCases/createPermissionUseCase';
import { z, ZodError } from 'zod';
import { IController, IResponse } from '../interfaces/IController';
import { IRequest } from '../interfaces/IRequest';
import { PermissionAlreadyExists } from '../errors/PermissionAlreadyExists';

const schema = z.object({
  name: z.string().min(4),
  code: z.string().min(6),
});


export class CreatePermissionController implements IController {
  constructor(private readonly createPermissionUseCase: CreatePermissionUseCase) {}

  async handle({body}: IRequest): Promise<IResponse> {
    try {
      const { name, code } = schema.parse(body);


      await this.createPermissionUseCase.execute({ name, code });

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

      if(error instanceof PermissionAlreadyExists) {
        return  {
          statusCode: 409,
          body: {
            error: 'This Permission already exists.'
          }
        };
      }

      throw error;
    }
  }
}
