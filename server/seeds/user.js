/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("user").del();
    await knex("user").insert([
      {
        id: 1,
        username: "Bob",
        password: "hdt2t9p",
      },
      {
        id: 2,
        username: "Josh",
        password: "jho1qp91",
      },
      {
        id: 3,
        username: "Mark",
        password: "89ydhn0",
      },
      {
        id: 4,
        username: "Emily",
        password: "em1ly456",
      },
      {
        id: 5,
        username: "Sarah",
        password: "p@ssw0rd",
      }
    ]
    );
  };
  