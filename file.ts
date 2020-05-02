// console.log(`Your port is ${process.env.HI}`); // undefined
import * as dotenv from 'dotenv';
dotenv.config();
console.log(`Your port is ${process.env.HI}`); // 8626
