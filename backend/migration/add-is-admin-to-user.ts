import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("users").updateMany({}, { $set: { isAdmin: false } });
};

export const down = async (db: Db) => {
  await db.collection("users").updateMany({}, { $unset: { isAdmin: 1 } });
};
