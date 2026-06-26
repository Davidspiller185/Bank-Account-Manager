export function isValidName(fullname){
    return /^[a-zA-Z ]+$/.test(fullname.trim())
    }
export function isValidBalance(balance){
    return typeof balance === "number" && balance > 0
}
export function isValidTypeAcount(accountType){
    const type = ["regular","premium","student"]
    return type.includes(accountType.toLowerCase())
    }
export function checkAmount(Amount){
    return Amount > 0
}
export function isValidId(customerId){
    return customerId !== "" && !isNaN(customerId)
}

   