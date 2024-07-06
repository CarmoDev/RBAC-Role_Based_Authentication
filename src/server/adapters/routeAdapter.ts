import { Request, Response } from 'express';
import { IController } from '../../application/interfaces/IController';

// Currying: uma função q retorna outra função
export function routeAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    console.log(request.metadata);

    const {statusCode, body}  = await controller.handle({
      body: request.body,
      params: request.params,
      account: request.metadata?.account,
      headers: request.headers as Record<string, string>
    });

    response.status(statusCode).json(body);
  };
}
