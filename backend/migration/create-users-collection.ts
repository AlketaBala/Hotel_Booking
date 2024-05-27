import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["email", "password", "firstName", "lastName"],
        properties: {
          email: { bsonType: "string", description: "must be a string and is required" },
          password: { bsonType: "string", description: "must be a string and is required" },
          firstName: { bsonType: "string", description: "must be a string and is required" },
          lastName: { bsonType: "string", description: "must be a string and is required" },
        },
      },
    },
  });
};

export const down = async (db: Db) => {
  await db.collection("users").drop();
};
