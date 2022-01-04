import StringValidator from "../validations/StringValidations";

class User {


    private name!: string
    private surname!: string
    private phoneNumber!: string
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