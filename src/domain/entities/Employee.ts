import User from "./User";
import StringValidator from "../validations/StringValidations";
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity("employees")
class Employee {

    @PrimaryGeneratedColumn("increment")
    private id!: number;

    @Column({type: "boolean", name: "is_deleted", default: false})
    private isDeleted!: boolean;

    @Column({type: "timestamptz", name: "created_at", nullable: false, default: new Date()})
    private createdAt!: Date;

    @Column({type: "timestamptz", name: "updated_at", nullable: true})
    private updatedAt!: Date | null;


    @Column({type: "integer", name: "user_id", nullable: false})
    private userId!: number;

    @OneToOne(() => User)
    @JoinColumn({name: "user_id"})
    private user!: User;

    @Column({type: "varchar", name: "identity_number", nullable: false, length: 11, unique: true})
    private identityNumber!: string;

    private constructor() {}

    public static createTemporaryEmployee(userId: number, identityNumber: string): Employee {
        const employee = new Employee();

        employee.setUserId(userId);
        employee.setIdentityNumber(identityNumber);

        return employee;

    }

    public getIdentityNumber(): string {
        return this.identityNumber;
    }

    private setIdentityNumber(identityNumber: string): void {
        if (StringValidator.isNullOrWhiteSpace(identityNumber))
            throw new Error(`Invalid identityNumber argument, identity number: ${identityNumber}`)
        if (identityNumber.length !== 11)
            throw new Error(`Invalid identityNumber argument length, identity number: ${identityNumber}`)
        this.identityNumber = identityNumber;
    }

    public getUserId(): number {
        return this.userId;
    }

    private setUserId(userId: number): void {
        if (!userId || userId <= 0)
            throw new Error(`Invalid userId argument, userId: ${userId}`);
        this.userId = userId;
    }


}


export default Employee;