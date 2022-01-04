import StringValidator from "../../../domain/validations/StringValidations"




describe("StringValidations class tests", () => {

    it("isNullOrEmpty retuns false", () => {
        
        const strValue = ""

        const validation = StringValidator.isNullOrEmpty(strValue);

        expect(validation).toBeTruthy()
    })

    it("isNullOrEmpty returns true", () => {

        const strValue = "this is a string value";
        const validation = StringValidator.isNullOrEmpty(strValue);
        expect(validation).toBeFalsy()
    })

    it("isNullOrWhiteSpace returns true for the whiteSpace value", () => {

        const whiteSpaceStr = " ";
        const validation = StringValidator.isNullOrWhiteSpace(whiteSpaceStr);
        expect(validation).toBeTruthy();
    })

    it("isNullOrWhiteSpace returns false for includes whiteSpace string value", () => {

        const value = "This Is Includes WhiteSpace String Value";
        const value2 = " Head And Tail Has Space "
        const validation = StringValidator.isNullOrWhiteSpace(value);
        const validation2 = StringValidator.isNullOrWhiteSpace(value2);
        expect(validation).toBeFalsy();
        expect(validation2).toBeFalsy();
    })

})