import { isNull, isNotNull, isNotBlank } from './functions';

const errorMessages = (number) => ({
    required: "This field is required",
    url: "This field must be a valid url",
    min: `This field must have min ${number} chars`,
    max: `This field must have max ${number} chars`
})

//utils
const validationFunctions = {
    required: (value) => isNull(value) || value === "",

    max: (value, mx) => (isNotNull(value) && value.length >= mx),

    min: (value, mn) => isNotNull(value) && isNotBlank(value) && value.length < mn,

    url: (value) => isNotNull(value) && isNotBlank(value) && !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(value)
}


export const runValidations = (value, validations = {}) => {
    let check = {
        message: "false",
        error: false
    }
    Object.keys(validations).some(name => {

        if (validationFunctions[name](value, validations[name])) {
            check = {
                message: errorMessages(validations[name])[name],
                error: true
            }
            return true
        }
        return false;
    });

    return check
}