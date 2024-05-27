import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $set: { "bookings.$[].cancellationReason": null } });
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $unset: { "bookings.$[].cancellationReason": 1 } });
};
