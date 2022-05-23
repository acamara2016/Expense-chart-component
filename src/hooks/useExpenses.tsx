import data from '../data/data.json';

const getBudget = () => {
    const budget = localStorage.getItem('budget') || 0;
    return budget;
}
const getTotalExpense = () => {
    let total = 0;
    data.forEach(expense=>{
        total = total + expense.amount;
    })
    return total;
};
const getExpenses = () => {
    return data;
}
const getMax = () => {
    let max = data[0].amount;
    for(var i = 0; i<data.length; i++){
        if(data[i].amount>max){
            max = data[i].amount;
        }
    }
    return max;
}
export {getTotalExpense, getExpenses, getMax, getBudget};
