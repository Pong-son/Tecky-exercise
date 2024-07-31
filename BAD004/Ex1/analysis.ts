import Knex from 'knex';

const knexConfigs = require("./knexfile");
const configMode = process.env.NODE_ENV || "development";
const knexConfig = knexConfigs[configMode];
const knex = Knex(knexConfig);

const analysis = async () => {
  const result1 = await knex.select("users.username").count("file.name").from("users").innerJoin("file","users.id","file.user_id").groupBy("users.username")

  const result2 = await knex.select("category.name").count("file.category_id").from("category").innerJoin("file","category.id","file.category_id").groupBy("category.name")
  
  const result3 = await knex
    .select("username")
    .count("file.name")
    .from("file")
    .innerJoin("users","file.user_id","users.id")
    .innerJoin("category","file.category_id","category.id")
    .where("users.username","alex")
    .andWhere("category.name","Important")
    .groupBy("users.username")

  const result4 = await knex.select("users.username").count("file.name").from("users").innerJoin("file","users.id","file.user_id").having(knex.raw("count(file.name)"),">", 700).groupBy("users.username")

 

  console.log("1:",result1,"\n2:",result2, "\n3",result3,"\n4",result4)
}

analysis()