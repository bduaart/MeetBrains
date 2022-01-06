import {Entity, PrimaryColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {v4 as uuid} from "uuid"
import { Event } from "./Event";
import { User } from "./User";

@Entity("tickets")
export class Ticket {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    price: number;

    @Column()
    idEvent: string;

    @JoinColumn({name: "idEvent"})
    @OneToOne(() => Event)
    event: Event;

    @Column()
    idUser: string;

    @JoinColumn({name: "idUser"})
    @OneToOne(() => User)
    user: User;

    constructor() {
        if (!this.id)
            this.id = uuid();
    }

}