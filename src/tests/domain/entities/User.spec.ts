import User from "../../../domain/entities/User";


describe("User Tests", () => {


    it("createTemporaryUser returns a new temporary user", () => {

        const name = "fatih";
        const surname = "mert";
        const phoneNumber = "05555555555";
        const address = "this is address";

        const temporaryUser = User.createTemporaryUser(name, surname, phoneNumber, address);

        expect(temporaryUser).toEqual({
            name: name,
            surname: surname,
            phoneNumber: phoneNumber,
            address: address
        });
    })

})