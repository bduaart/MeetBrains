import { Request, Response } from "express";
import { CreateTicketService } from "../services/CreateTicketService";

export class CreateTicketsController {
    async handle(request: Request, response, Response){
        const { id, price, idEvent, idUser} = request.body;

        const createTicketService = new CreateTicketService();

        const ticket = await createTicketService.execute({
            id, price, idEvent, idUser
        });

        return response.json(ticket);
    }
}