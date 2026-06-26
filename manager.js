let allCustomer = []
let id = 1
export function createCustomer(fullname,accountType,balance){
    let isActive = true
    return function inner(){
        allCustomer.push({id,fullname,accountType,balance,isActive})
        id++
        return "Customer created successfully"
        }
    }
export function showCustomer(){
    return allCustomer
}

export function Deposit(customerId,Amount){
    const findId = allCustomer.find(obj => obj.id === customerId)
        if (findId){
            if (findId.isActive == true){
                findId.balance +=Amount
                return "Deposit completed successfully"
            }return "coustomer not activate"
         }return "id not found"
        }
    
export function Withdraw(customerId,Amount){
        const findId = allCustomer.find(obj => obj.id === customerId)
            if (findId){
                if (findId.isActive == true){
                        if (findId.balance >=Amount){
                          findId.balance -=Amount
                          return "Withdraw completed successfully"
                        }return "you have not the sum to withdraw"
                }return "coustomer not activate"
            }return "id not found"
        }


export function SearchCustomer(customerId,fullname){
        const findName = allCustomer.find(obj =>  fullname && obj.fullname.toLowerCase() === fullname.toLowerCase() || customerId && obj.id === customerId)
        if (findName){
            return findName
        }
        return "customer not found"
    }

export function CloseAccount(customerid){
    const findId = allCustomer.find(obj => obj.id === customerid)
    if (findId){
        findId.isActive = false
        return "Account closed successfully"
}
return "not found customer"
}
export function showStatistics(){
    const totalCustomer = allCustomer.length
    const activeAcount = allCustomer.filter(obj => obj.isActive === true).length
    const totalMoney = allCustomer.reduce((acc,current) => acc + current.balance,0)
    const AverageBalance = totalMoney/totalCustomer
    const allBalance = allCustomer.map(obj => obj.balance)
    const HigestBalance = Math.max(...allBalance)
    return {totalCustomer,activeAcount,totalMoney,AverageBalance,HigestBalance}
}


