import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepository";

export class ReadUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.find();
        return users;
    }
}