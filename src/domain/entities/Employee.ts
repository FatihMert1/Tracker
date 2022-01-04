import User from "./User";
import StringValidator from "../validations/StringValidations";


class Employee {

    private id!: number;
    private createdAt!: Date;
    private updatedAt!: Date | null;
    private isDeleted!: boolean;

    private userId!: number;
    private user!: User;

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