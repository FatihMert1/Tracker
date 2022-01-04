import StringValidator from "../validations/StringValidations";
import User from "./User";



class Admin {

    private id!: number;

    private isDeleted!: boolean;

    private createdAt!: Date;

    private updatedAt!: Date | null;

    private userId!: number;
    private user!: User;

    private identityNumber!: string;
    
    private constructor() {}

    public static createTemporaryAdmin(userId: number, identityNumber: string): Admin {
        const admin = new Admin();

        admin.setIdentityNumber(identityNumber);
        admin.setUserId(userId);
        admin.assignCreatedDate();
        admin.assignIsDeleted(false)
        admin.assignUpdatedDate(null);

        return admin;
    }

    public getId(): number {
        return this.id;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getUpdatedAt(): Date | null {
        return this.updatedAt;
    }

    public getIdentityNumber(): string {
        return this.identityNumber;
    }

    public getIsDeleted(): boolean {
        return this.isDeleted;
    }

    private assignCreatedDate(): void {
        this.createdAt = new Date();
    }

    private assignIsDeleted(isDeleted: boolean): void {
        this.isDeleted = isDeleted ?? false;
    }

    private assignUpdatedDate(updatedDate: Date | null): void {
        this.updatedAt = updatedDate;
    }

    private setUserId(userId: number): void {
        if(!userId || userId <= 0)
            throw new Error(`Invalid userId argument, userId: ${userId}`);
        this.userId = userId;
    }

    private setIdentityNumber(identityNumber: string): void {
        if(StringValidator.isNullOrWhiteSpace(identityNumber))
            throw new Error(`Invalid argument of identity number, identity number: ${identityNumber}`)

        if (identityNumber.length !== 11)
            throw new Error(`Invalid argument of identity number length, identity number: ${identityNumber}`)

        this.identityNumber = identityNumber;
    }
}

export default Admin;