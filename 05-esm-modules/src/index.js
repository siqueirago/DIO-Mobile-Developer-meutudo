
import {  
    conectToDatabase, 
    disconnectDatabase, 
    databaseType } from "./utils/database.js";



await conectToDatabase('meuBancoDeDados');


disconnectDatabase();

console.log(databaseType);
