import type { Knex } from "knex";


export async function up(knex: Knex) {
  await knex.schema.alterTable("file", (table) => {
    table.dropColumn("Content")
    table.string("content",10000000)
  })
}


export async function down(knex: Knex) {
  await knex.schema.alterTable("file", (table) => {
    table.dropColumn("content")
    table.string("Content")
  })
}

