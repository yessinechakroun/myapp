export const isEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
export const hasUperCase = (str) => {
    return /[A-Z]/.test(str);
}
export const hasLowerCase = (str) => {
    return /[a-z]/.test(str);
}
export const hasSpecialCaracter = (str) => {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
}
export const notHasSpecialCaracter = (str) => {
    return !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
}
export const hasNumber = (str) => {
    return /[0-9]/.test(str);
}
export const isEmpty = (str = "") => {
    return str.toString().trim().length === 0
}
export const isNotEmpty = (str = "") => {
    return str.toString().trim().length !== 0
}
export const isNumber = (str) => {
    return /^\d*$/.test(str)
}
export const isLength8 = (str) => {
    return str.length >= 8
}
export const isPasswordValid = (password) => {
    if (hasSpecialCaracter(password) && hasNumber(password) && hasLowerCase(password) && hasUperCase(password) && isLength8(password) && isNotEmpty(password)) {
        return true
    } else {
        return false
    }
}