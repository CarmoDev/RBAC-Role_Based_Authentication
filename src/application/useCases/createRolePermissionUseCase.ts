import { prismaClient } from '../libs/prismaClient';
import { RoleAlreadyExists } from '../errors/RoleAlreadyExists';

interface IInput {
  roleId: string;
  permissionCode: string;
}

export class CreateRolePermissionUseCase {
  async execute({ roleId, permissionCode }: IInput) {
    const rolePermissionAlreadyExists = await prismaClient.rolePermission.findFirst({
      where: {
        roleId,
        permissionCode
      },
    });

    if(rolePermissionAlreadyExists) {
      throw new RoleAlreadyExists();
    }

    await prismaClient.rolePermission.create({
      data: {
        roleId,
        permissionCode
      },
    });

  }
}
