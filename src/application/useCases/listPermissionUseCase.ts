import { prismaClient } from '../libs/prismaClient';

export class ListPermissionUseCase {
  async execute(): Promise<Record<string, string>[]> {
    const permissions = await prismaClient.permission.findMany();

    return permissions;
  }
}
