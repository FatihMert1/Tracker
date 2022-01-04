import Admin from "../../../domain/entities/Admin";


describe("Admin Tests", () => {

    describe("createTemporaryAdmin Tests", () => {

        const correctIdentityNumber = "11111111111";
        const invalidIdentityNumber = "1";
        const correctUserId = 1;
        const invalidUserId = 0;
        it('should throw error createTemporaryAdmin given less than 1 userId',  () => {

            const userId = invalidUserId;
            const identityNumber = correctIdentityNumber;

            const arrange = () => {
                Admin.createTemporaryAdmin(userId, identityNumber);
            }

            expect(arrange)
                .toThrow(`Invalid userId argument, userId: ${userId}`)
        });

        it('should throw error createTemporaryAdmin given less then 11 length', function () {
            const userId = correctUserId;
            const identityNumber = invalidIdentityNumber;

            const arrange = () => {
                Admin.createTemporaryAdmin(userId, identityNumber);
            }

            expect(arrange)
                .toThrow(`Invalid argument of identity number length, identity number: ${identityNumber}`)
        });

        it('should return new admin given arguments', function () {
            const admin = Admin.createTemporaryAdmin(correctUserId, correctIdentityNumber);

            expect(admin).not.toBeNull()
            expect(admin).toMatchObject({
                userId: correctUserId,
                identityNumber: correctIdentityNumber
            })
        });
    })
})