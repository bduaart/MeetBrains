import { getCustomRepository } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepository";

export class ReadEventsService {
    async execute() {
        const eventsRepositories = getCustomRepository(EventsRepositories);
        const events = await eventsRepositories.find();
        return events;
    }   
}