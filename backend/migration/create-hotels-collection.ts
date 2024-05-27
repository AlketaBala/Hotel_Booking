import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.createCollection("hotels", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["userId", "name", "city", "country", "description", "type", "adultCount", "childCount", "facilities", "pricePerNight", "starRating", "imageUrls", "lastUpdated"],
        properties: {
          userId: { bsonType: "string", description: "must be a string and is required" },
          name: { bsonType: "string", description: "must be a string and is required" },
          city: { bsonType: "string", description: "must be a string and is required" },
          country: { bsonType: "string", description: "must be a string and is required" },
          description: { bsonType: "string", description: "must be a string and is required" },
          type: { bsonType: "string", description: "must be a string and is required" },
          adultCount: { bsonType: "int", description: "must be an integer and is required" },
          childCount: { bsonType: "int", description: "must be an integer and is required" },
          facilities: { bsonType: "array", items: { bsonType: "string" }, description: "must be an array of strings and is required" },
          pricePerNight: { bsonType: "double", description: "must be a double and is required" },
          starRating: { bsonType: "int", minimum: 1, maximum: 5, description: "must be an integer between 1 and 5 and is required" },
          imageUrls: { bsonType: "array", items: { bsonType: "string" }, description: "must be an array of strings and is required" },
          lastUpdated: { bsonType: "date", description: "must be a date and is required" },
          bookings: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["firstName", "lastName", "email", "adultCount", "childCount", "checkIn", "checkOut", "userId", "totalCost"],
              properties: {
                firstName: { bsonType: "string", description: "must be a string and is required" },
                lastName: { bsonType: "string", description: "must be a string and is required" },
                email: { bsonType: "string", description: "must be a string and is required" },
                adultCount: { bsonType: "int", description: "must be an integer and is required" },
                childCount: { bsonType: "int", description: "must be an integer and is required" },
                checkIn: { bsonType: "date", description: "must be a date and is required" },
                checkOut: { bsonType: "date", description: "must be a date and is required" },
                userId: { bsonType: "string", description: "must be a string and is required" },
                totalCost: { bsonType: "double", description: "must be a double and is required" },
              },
            },
          },
        },
      },
    },
  });
};

export const down = async (db: Db) => {
  await db.collection("hotels").drop();
};
