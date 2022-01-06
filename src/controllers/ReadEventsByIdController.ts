import { Request, Response } from "express";
import { ReadEventsByIdService } from "../services/ReadEventsByIdService";

export class ReadEventsByIdController {
    async handle(request: Request, response: Response){
        const id = request.params;
        const readEventsById = new ReadEventsByIdService();
        const event = await readEventsById.execute(id, request);
        return response.json(event);
    }
}