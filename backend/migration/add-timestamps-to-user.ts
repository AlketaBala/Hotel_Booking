import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("users").updateMany({}, { $set: { createdAt: new Date(), updatedAt: new Date() } });
};

export const down = async (db: Db) => {
  await db.collection("users").updateMany({}, { $unset: { createdAt: 1, updatedAt: 1 } });
};
