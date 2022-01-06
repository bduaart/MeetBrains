import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepository";
import { Request } from "express";

export class ReadUsersByIdService{
    async execute(id, request: Request){
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.findOne(id)
        return users;
    }
}