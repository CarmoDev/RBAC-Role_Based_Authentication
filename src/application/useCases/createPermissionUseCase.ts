import { prismaClient } from '../libs/prismaClient';
import { PermissionAlreadyExists } from '../errors/PermissionAlreadyExists';

interface IInput {
  name: string;
  code: string;
}

export class CreatePermissionUseCase {
  async execute({ name, code }: IInput) {
    const permissionAlreadyExists = await prismaClient.permission.findUnique({
      where: {
        code,
      },
    });

    if(permissionAlreadyExists) {
      throw new PermissionAlreadyExists();
    }

    await prismaClient.permission.create({
      data: {
        name,
        code,
      },
    });

  }
}
