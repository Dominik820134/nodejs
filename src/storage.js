import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const FILE = join(process.cwd(), "expenses.json");
console.log("Datoteka", FILE);

export function loadExpenses() {
    if (!existsSync(FILE)) {
        return [];
    }

    const text = readFileSync(FILE, "utf-8");
    return JSON.parse(text); // deserijalizacija: tekst -> objekt

}

export function saveExpenses(expenses) {
    writeFileSync(FILE, JSON.stringify(expenses, null, 2)); // srijalizacija: objekt -> tekst
}