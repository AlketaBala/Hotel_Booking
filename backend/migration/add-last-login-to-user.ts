import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("users").updateMany({}, { $set: { lastLogin: null } });
};

export const down = async (db: Db) => {
  await db.collection("users").updateMany({}, { $unset: { lastLogin: 1 } });
};
