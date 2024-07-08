import { z, ZodError } from 'zod';
import { IController, IResponse } from '../interfaces/IController';
import { IRequest } from '../interfaces/IRequest';
import { CreateRoleUseCase } from '../useCases/createRoleUseCase';
import { RoleAlreadyExists } from '../errors/RoleAlreadyExists';

const schema = z.object({
  name: z.string().min(2),
  description: z.string().min(4),
});


export class CreateRoleController implements IController {
  constructor(private readonly createRoleUseCase: CreateRoleUseCase) {}

  async handle({body}: IRequest): Promise<IResponse> {
    try {
      const { name, description } = schema.parse(body);


      await this.createRoleUseCase.execute({ name, description });

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
            error: 'This Role already exists.'
          }
        };
      }

      throw error;
    }
  }
}
