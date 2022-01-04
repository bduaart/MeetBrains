import { Request, Response } from "express";
import { CreateEventService } from "../services/CreateEventService";

export class CreateEventController {

    async handle(request: Request, response: Response){
        //Desestrutaração do body
        const {name, org, event, desc, local, price, date} = request.body
        const createEventService = new CreateEventService();
        const newEvent = await createEventService.execute({name, org, event, desc, local, price, date})

        return response.json(newEvent)
    }
}