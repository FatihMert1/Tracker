



class StringValidator {
    
    static isNullOrEmpty = (value: string): boolean => {
        return !value || value === "";
    }

    static isNullOrWhiteSpace = (value: string): boolean => {
        if (StringValidator.isNullOrEmpty(value))
            return true;
        
        const trim = value.trim();    

        return trim === ""
    }
}

export default StringValidator;