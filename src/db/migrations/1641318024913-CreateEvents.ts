import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1641318024913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "events",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "org",
                        type: "varchar"
                    },
                    {
                        name: "event",
                        type: "varchar"
                    },
                    {
                        name: "desc",
                        type: "varchar"
                    },
                    {
                        name: "local",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "real",
                        default: 0
                    },
                    {
                        name: "date",
                        type: "timestamp"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
    }

}
