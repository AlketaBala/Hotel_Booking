import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $set: { reviews: [] } });
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $unset: { reviews: 1 } });
};
