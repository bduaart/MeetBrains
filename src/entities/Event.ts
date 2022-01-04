import {Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("events")
export class Event {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    name: string;
    @Column()
    org: string;
    @Column()
    event: string;
    @Column()
    desc: string;
    @Column()
    local: string;
    @Column()
    price: number;
    @CreateDateColumn()
    date: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}
