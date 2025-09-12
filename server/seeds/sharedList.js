/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("sharedList").del();
    await knex("sharedList").insert([
        {
          id: 1,
          user_id: 1,
          addItem: "Buy Apples",
          category: "Grocery",
          complete: 0,
          due_at: new Date(2023, 8, 15),
        },
        {
          id: 8,
          user_id: 1,
          addItem: "Purchase Milk",
          category: "Grocery",
          complete: 0,
          due_at: new Date(2023, 8, 18),
        },
        {
          id: 15,
          user_id: 2,
          addItem: "Get Bread",
          category: "Grocery",
          complete: 1,
          due_at: new Date(2023, 8, 20),
        },
        {
          id: 22,
          user_id: 2,
          addItem: "Buy Eggs",
          category: "Grocery",
          complete: 0,
          due_at: new Date(2023, 8, 22),
        },
        {
          id: 29,
          user_id: 1,
          addItem: "Grab Cereal",
          category: "Grocery",
          complete: 0,
          due_at: new Date(2023, 8, 25),
        },
        {
          id: 36,
          user_id: 1,
          addItem: "Purchase Vegetables",
          category: "Grocery",
          complete: 1,
          due_at: new Date(2023, 8, 27),
        },
        {
          id: 43,
          user_id: 2,
          addItem: "Buy Snacks",
          category: "Grocery",
          complete: 0,
          due_at: new Date(2023, 8, 30),
        }
      ]
      
    );
  };
  