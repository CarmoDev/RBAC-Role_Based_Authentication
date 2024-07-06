import { SignUpUseCase } from './../useCases/SignUpUseCase';
import { z, ZodError } from 'zod';
import { IController, IResponse } from '../interfaces/IController';
import { AccountAlreadyExists } from '../errors/AccountAlreadyExists';
import { IRequest } from '../interfaces/IRequest';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email().min(4),
  password: z.string().min(8)
});


export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle({body}: IRequest): Promise<IResponse> {
    try {
      const {email, name, password} = schema.parse(body);


      await this.signUpUseCase.execute({ email, name, password });

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

      if(error instanceof AccountAlreadyExists) {
        return  {
          statusCode: 409,
          body: {
            error: 'This e-mail is already in use.'
          }
        };
      }

      throw error;
    }
  }
}
