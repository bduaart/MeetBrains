import { getCustomRepository, Timestamp } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepository";

interface IEventRequest {
    name: string;
    org: string;
    event: string;
    desc: string;
    local: string;
    price: number;
    date: Date;
}

export class CreateEventService {
    async execute({name, org, event, desc, local, price, date} : IEventRequest) {
        const eventsRepositories = getCustomRepository(EventsRepositories);

        if(!name || !org || !event || !desc || !local){
            throw new Error("Dados não inseridos!")
        }

        const eventExists = await eventsRepositories.findOne({name, desc});

        if (eventExists) {
            throw new Error("Evento já existe!")
        }

        const newEvent = eventsRepositories.create({
            name, org, event, desc, local, price, date
        });
    
        await eventsRepositories.save(newEvent);

        return newEvent;
    }

}