import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("users").updateMany({}, { $set: { role: "user" } });
};

export const down = async (db: Db) => {
  await db.collection("users").updateMany({}, { $unset: { role: 1 } });
};
