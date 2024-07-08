import { prismaClient } from '../libs/prismaClient';
import { RoleAlreadyExists } from '../errors/RoleAlreadyExists';

interface IInput {
  name: string;
  description: string;
}

export class CreateRoleUseCase {
  async execute({ name, description }: IInput) {
    const roleAlreadyExists = await prismaClient.role.findFirst({
      where: {
        name,
      },
    });

    if(roleAlreadyExists) {
      throw new RoleAlreadyExists();
    }

    await prismaClient.role.create({
      data: {
        name,
        description,
      },
    });

  }
}
