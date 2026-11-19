// import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const FILE = join(process.cwd(), "expenses.json");
console.log("Datoteka", FILE);

export async function loadExpenses() {

    /*if (!existsSync(FILE)) {
        return [];
    }

    const text = readFileSync(FILE, "utf-8");
    return JSON.parse(text); // deserijalizacija: tekst -> objekt
    */
    try {
        const text = await readFile(FILE, "utf-8");
        return JSON.parse(text);
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }
        throw error; // prosljeđujemo grešku dalje!
    }
}

export async function saveExpenses(expenses) {
    // writeFileSync(FILE, JSON.stringify(expenses, null, 2)); // srijalizacija: objekt -> tekst
    await writeFile(FILE, JSON.stringify(expenses, null, 2));
}