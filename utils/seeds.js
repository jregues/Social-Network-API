const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { usernames, emails } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  let userCheck = await connection.db
    .listCollections({ name: "User" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("User");
  }

  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data

    const username = usernames;
    const email = emails;

    users.push({
      username,
      email,
    });
  }

  // Add students to the collection and await the results
  const userData = await User.create(users);

  // Add courses to the collection and await the results
  
  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
