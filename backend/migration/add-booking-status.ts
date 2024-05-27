import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $set: { "bookings.$[].status": "pending" } });
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $unset: { "bookings.$[].status": 1 } });
};
