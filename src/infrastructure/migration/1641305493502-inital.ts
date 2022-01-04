import {MigrationInterface, QueryRunner} from "typeorm";

export class inital1641305493502 implements MigrationInterface {
    name = 'inital1641305493502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "is_deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '"2022-01-04T14:11:35.947Z"', "updated_at" TIMESTAMP WITH TIME ZONE, "name" character varying(100) NOT NULL, "surname" character varying(100) NOT NULL, "phoneNumber" character varying(11) NOT NULL, "address" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admins" ("id" SERIAL NOT NULL, "is_deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '"2022-01-04T14:11:35.947Z"', "updated_at" TIMESTAMP WITH TIME ZONE, "user_id" integer NOT NULL, "identity_number" character varying(11) NOT NULL, "userId" integer, CONSTRAINT "REL_420cf6d31487d2f341b40d52e3" UNIQUE ("userId"), CONSTRAINT "PK_e3b38270c97a854c48d2e80874e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" SERIAL NOT NULL, "is_deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '"2022-01-04T14:11:36.042Z"', "updated_at" TIMESTAMP WITH TIME ZONE, "user_id" integer NOT NULL, "identity_number" character varying(11) NOT NULL, "userId" integer, CONSTRAINT "REL_737991e10350d9626f592894ce" UNIQUE ("userId"), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "admins" ADD CONSTRAINT "FK_420cf6d31487d2f341b40d52e37" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_737991e10350d9626f592894cef" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_737991e10350d9626f592894cef"`);
        await queryRunner.query(`ALTER TABLE "admins" DROP CONSTRAINT "FK_420cf6d31487d2f341b40d52e37"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "admins"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
