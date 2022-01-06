import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email, password
        });

        if(!user) {
            throw new Error("Email errado")
        }

        const token = sign({
            email: user.email
        }, "2b7ec3d3453a315ed863d27c2a053170", {
            subject: user.id
        })

        return token;
    }
}