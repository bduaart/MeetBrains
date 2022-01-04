import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response){
        //Desestrutaração do body
        const {name, email, userCpf, admin } = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, userCpf, admin});

        return response.json(user);
    }
}

export { CreateUserController }