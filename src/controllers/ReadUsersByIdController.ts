import { Request, Response } from "express";
import { ReadUsersByIdService } from "../services/ReadUsersByIdService";

export class ReadUsersByIdController {
    async handle(request: Request, response: Response){
        const id = request.params;
        const readUsersByIdService = new ReadUsersByIdService();
        const user = await readUsersByIdService.execute(id, request);
        return response.json(user);
    }
}