import pkg from "pg";
const  {Client} = pkg;

export const client = new Client({
    host: "db.wrpfzumzxvimdvoifled.supabase.co",
    user: "postgres",
    password: "amaliarisma2301",
    database: "postgres",

});

 await client.connect();
console.log("connect to database");