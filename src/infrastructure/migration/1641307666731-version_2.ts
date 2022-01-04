import {MigrationInterface, QueryRunner} from "typeorm";

export class version21641307666731 implements MigrationInterface {
    name = 'version21641307666731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_737991e10350d9626f592894cef"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "REL_737991e10350d9626f592894ce"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2022-01-04T14:47:49.198Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293" UNIQUE ("phoneNumber")`);
        await queryRunner.query(`ALTER TABLE "admins" ALTER COLUMN "created_at" SET DEFAULT '"2022-01-04T14:47:49.198Z"'`);
        await queryRunner.query(`ALTER TABLE "admins" ADD CONSTRAINT "UQ_f8b2b2631401bb4e3b981090604" UNIQUE ("identity_number")`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "created_at" SET DEFAULT '"2022-01-04T14:47:49.291Z"'`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "UQ_2d83c53c3e553a48dadb9722e38" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "UQ_d36ef86c689386676dae36d4ae6" UNIQUE ("identity_number")`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_2d83c53c3e553a48dadb9722e38" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_2d83c53c3e553a48dadb9722e38"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "UQ_d36ef86c689386676dae36d4ae6"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "UQ_2d83c53c3e553a48dadb9722e38"`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "created_at" SET DEFAULT '2022-01-04 14:36:08.617+00'`);
        await queryRunner.query(`ALTER TABLE "admins" DROP CONSTRAINT "UQ_f8b2b2631401bb4e3b981090604"`);
        await queryRunner.query(`ALTER TABLE "admins" ALTER COLUMN "created_at" SET DEFAULT '2022-01-04 14:36:08.527+00'`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-01-04 14:36:08.527+00'`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "REL_737991e10350d9626f592894ce" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_737991e10350d9626f592894cef" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
