import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepository";
import { cpf } from "cpf-cnpj-validator";
//import { createHash, Hash } from "crypto";
//const crypto = require('crypto');

interface IUserRequest {
    name: string;
    email: string;
    userCpf: string;
    admin?: boolean;
    password: string;
    idTickets: string;
}

export class CreateUserService {

    async execute({ name, email, userCpf, admin = false, password, idTickets} : IUserRequest) {
        const usersRpository = getCustomRepository(UsersRepositories);

        if (!cpf.isValid(userCpf)){
            throw new Error("CPF incorreto!")
        }

        if (!email) {
            throw new Error("Email incorreto!")
        }

        const userExist = await usersRpository.find({email, userCpf
        });

        if(!userExist){
            throw new Error("Usuário já existe!");
        }

        //const hash = crypto.createHash('sha256')

        const newUser = usersRpository.create({
            name, email, userCpf, admin, password, idTickets
        });

        await usersRpository.save(newUser);
        return newUser;
    }
}
