import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepository";
import { cpf } from 'cpf-cnpj-validator';

interface IUserRequest {
    name: string;
    email: string;
    userCpf: string;
    admin?: boolean   
}

export class CreateUserService {

    async execute({ name, email, userCpf, admin} : IUserRequest) {
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

        const newUser = usersRpository.create({
            name, email, userCpf, admin
        });

        await usersRpository.save(newUser);
        return newUser;
    }
}
