import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("users").updateMany({}, { $set: { phoneNumber: null } });
};

export const down = async (db: Db) => {
  await db.collection("users").updateMany({}, { $unset: { phoneNumber: 1 } });
};
