import { prismaClient } from '../libs/prismaClient';

export class ListRolePermissionUseCase {
  async execute(): Promise<Record<string, string>[]> {
    const rolePermissions = await prismaClient.rolePermission.findMany();

    return rolePermissions;
  }
}
