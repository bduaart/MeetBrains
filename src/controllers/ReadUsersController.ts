import { Request, Response } from "express";
import { ReadUsersService } from "../services/ReadUsersService";

export class ReadUsersController {
    async handle(request: Request, response: Response){
        const readUsersService = new ReadUsersService();
        const users = await readUsersService.execute();
        return response.json(users);
    }
}