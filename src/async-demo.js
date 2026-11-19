import fs from "node:fs";
import { readFile } from "node:fs/promises";
import { text } from "node:stream/consumers";


console.log("Prva naredba");

setTimeout(() => {
    console.log("Druga naredba");
}, 1000);

console.log("Treća naredba");

// 1. način rada s asinkronim funkcijom tzv. callback način: koristimo readFile iz fs
let fileSize;
fs.readFile("expenses.json", "utf-8", (error, text) => {
    if (error) {
        console.error(`Dogodila se greška čitanja: ${error.message}`);
    }
    console.log(`Datoteka je uspješno pročitana; dužina: ${text.length}`);
    fileSize = text.length;
});

console.log("Četvrta naredba", fileSize);

// 2. način rada s asinkronom funkcijom uz upotrebu Promise objekta (obećanje da će se nešto u budućnosti završiti)
const promise = readFile("expenses.json", "utf-8");
console.log(promise);
promise
    .then((text) => console.log(`[Promise] Datoteka je uspješno pročitana; dužina: ${text.length}`))
    .catch((error) => console.error(`[Promise] Dogodila se greška čitanja: ${error.message}`));
