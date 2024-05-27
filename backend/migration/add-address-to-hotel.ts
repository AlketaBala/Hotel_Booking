import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $set: { address: null } });
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $unset: { address: 1 } });
};
