import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $set: { createdAt: new Date(), updatedAt: new Date() } });
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $unset: { createdAt: 1, updatedAt: 1 } });
};
