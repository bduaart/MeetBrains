import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response){
        //Desestrutaração do body
        const {name, email, userCpf, admin, password, idTickets } = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, userCpf, admin, password, idTickets});

        return response.json(user);
    }
}

export { CreateUserController }