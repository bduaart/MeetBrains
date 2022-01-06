import { getCustomRepository } from "typeorm"
import { TicketsRepositories } from "../repositories/TicketsRepository"

interface ITicketRequest {
    id: string;
    price: number;
    idEvent: string;
    idUser: string;
}

export class CreateTicketService {
    async execute({id, price, idEvent, idUser} : ITicketRequest) {
        const ticketRepositories = getCustomRepository(TicketsRepositories)

        const ticket = ticketRepositories.create({
            id, price, idEvent, idUser
        });

        return ticket;
    }
}