import { getCustomRepository } from "typeorm";
import { Request } from "express";
import { EventsRepositories } from "../repositories/EventsRepository";

export class ReadEventsByIdService{
    async execute(id, request: Request){
        const eventsRepositories = getCustomRepository(EventsRepositories);
        const events = await eventsRepositories.findOne(id)
        return events;
    }
}