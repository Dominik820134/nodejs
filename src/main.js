import formatExpense from "./format.js";

const APP_NAME = "Troškovnik";
console.log(`== ${APP_NAME} ==`);

const args = process.argv.slice(2);
const command = args[0];
const arg1 = args[1];
const arg2 = args[2];

console.log("Naredba:", command);
console.log("Prvi argument:", arg1);
console.log("Drugi argument:", arg2);

const expenses = [
    { id: 1, description: "Kruh", amount: 2.5 }, //0
    { id: 2, description: "Kino", amount: 12 } //1
];

switch (command) {
    case "add":
        const amount = Number(arg2); 


        if (arg1 === undefined || Number.isNaN(amount)) {
            console.error("Korištenje: add 'opis' iznos");
            process.exit(1);
        }

        let newId = 1;
        if (expenses.length >0) {
            newId = expenses[expenses.length -1].id + 1;
        }

        expenses.push({ id: newId, description: arg1, amount: amount});
        console.log(`Dodano: ${arg1} (id: ${newId})`);
        
        break;

    case "list":
        if (expenses.length === 0) {
            console.log("Nema troškova.");
        } else {
            for (let i = 0; i < expenses.length; i++) {
                const expense = expenses[i];
                console.log(formatExpense(expense)); //nastavljamo
            }
        }

        break;
    
    case "total":

    let total = 0;
    
    for (const expense of expenses) {
        total = total + expense.amount;
    }
        console.log(`Ukupno: ${total}`);
        break;

    default:
        console.error("Nepoznata naredba. Koristi: add, list, total.");
        process.exit(1);
}