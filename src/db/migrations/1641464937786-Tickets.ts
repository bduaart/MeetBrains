import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Tickets1641462248763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tickets",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "price",
                        type: "real"
                    },
                    {
                        name: "idEvent",
                        type: "uuid"
                    },
                    {
                        name: "idUser",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "foreignUserId",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["idUser"],
                        onDelete: "SET NULL"
                    },
                    {
                        name: "foreignEventId",
                        referencedTableName: "events",
                        referencedColumnNames: ["id"],
                        columnNames: ["idEvent"],
                        onDelete: "SET NULL"
                    },
                    {
                        name: "foreignPrice",
                        referencedTableName: "events",
                        referencedColumnNames: ["price"],
                        columnNames: ["price"],
                        onDelete: "SET NULL" 
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets");
    }

}
