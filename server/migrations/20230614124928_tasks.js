/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("todo", (table) => {
    table.increments("id").primary();
    table.string("user_id").notNullable();
    table.string("task").notNullable();
    table.string("category").notNullable();
    table.boolean("complete").notNullable().defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("due_at").notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("todo");
};
