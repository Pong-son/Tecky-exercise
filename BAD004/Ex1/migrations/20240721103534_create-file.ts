import type { Knex } from "knex";


export async function up(knex: Knex) {
  await knex.schema.createTable("file", (table) => {
    table.increments();
    table.string("name");
    table.string("Content");
    table.boolean("is_file");
    table.integer("category");
    table.foreign("category").references("category.id")
    table.integer("owner");
    table.foreign("owner").references("users.id")
    table.timestamps(false, true);
  })
}


export async function down(knex: Knex) {
  await knex.schema.dropTable("file");
}

