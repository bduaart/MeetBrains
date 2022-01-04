import { EntityRepository, Repository } from "typeorm";
import { Event } from "../entities/Event";

@EntityRepository(Event)
export class EventsRepositories extends Repository<Event>{}