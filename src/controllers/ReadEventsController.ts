import { Request, Response } from "express";
import { ReadEventsService } from "../services/ReadEventsService";

export class ReadEventsController {
    async handle(request: Request, response: Response){
        const readEventsService = new ReadEventsService();
        const events = await readEventsService.execute();
        return response.json(events);
    }
}