import type { Knex } from "knex";


export async function up(knex: Knex) {
  await knex.schema.alterTable("file", (table) => {
    table.renameColumn("category","category_id");
    table.renameColumn("owner","user_id");
  })
}


export async function down(knex: Knex) {
  await knex.schema.alterTable("file", (table) => {
    table.renameColumn("category_id","category");
    table.renameColumn("user_id","owner");
  })
}

