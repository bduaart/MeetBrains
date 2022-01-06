import { Repository, EntityRepository } from "typeorm";
import { Ticket } from "../entities/Ticket";

@EntityRepository(Ticket)
export class TicketsRepositories extends Repository<Ticket>{}