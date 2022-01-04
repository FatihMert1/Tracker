import StringValidator from "../validations/StringValidations";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    private id!: number;

    @Column({type: "boolean", name: "is_deleted", default: false})
    private isDeleted!: boolean;

    @Column({type: "timestamptz", name: "created_at", nullable: false, default: new Date()})
    private createdAt!: Date;

    @Column({type: "timestamptz", name: "updated_at", nullable: true})
    private updatedAt!: Date | null;

    @Column({type: "varchar", name: "name", length: 100})
    private name!: string

    @Column({type: "varchar", name: "surname", length: 100})
    private surname!: string

    @Column({type: "varchar", name: "phoneNumber", length: 11})
    private phoneNumber!: string

    @Column({type: "text", name: "address"})
    private address!: string;

    private constructor() {}


    public static createTemporaryUser(name: string, surname: string, phoneNumber: string, address: string): User {

        const user = new User();

        user.setPhoneNumber(phoneNumber);
        user.setName(name);
        user.setSurname(surname);
        user.setAddress(address);

        return user;
    }

    private setName(name: string): void {
        if (StringValidator.isNullOrWhiteSpace(name))
            throw new Error(`Invalid name argument, name: ${name}`);
        this.name = name;
    }

    private setSurname(surname: string): void {
        if(StringValidator.isNullOrWhiteSpace(surname))
            throw new Error(`Invalid surname argument, surname: ${surname}`)
        this.surname = surname;
    }

    private setPhoneNumber(phoneNumber: string): void {
        if(StringValidator.isNullOrWhiteSpace(phoneNumber))
            throw new Error(`Invalid phone number argument, phone number: ${phoneNumber}`)
        this.phoneNumber = phoneNumber;
    }

    private setAddress(address: string): void {
        if (StringValidator.isNullOrWhiteSpace(address))
            throw new Error(`Invalid address argument, address: ${address}`)
        this.address = address;
    }
}

export default User;