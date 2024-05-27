import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $set: { amenities: [] } });
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $unset: { amenities: 1 } });
};
