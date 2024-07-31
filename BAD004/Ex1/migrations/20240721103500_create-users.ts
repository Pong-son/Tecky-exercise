import type { Knex } from "knex";


export async function up(knex: Knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username");
    table.string("password");
    table.string("level");
    table.timestamps(false, true);
  })
}


export async function down(knex: Knex) {
  await knex.schema.dropTable("users");
}

