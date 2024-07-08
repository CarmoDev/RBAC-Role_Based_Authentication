import { prismaClient } from '../libs/prismaClient';

export class ListRoleUseCase {
  async execute(): Promise<Record<string, string>[]> {
    const roles = await prismaClient.role.findMany();


    return roles;
  }
}
