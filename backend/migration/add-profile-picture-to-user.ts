import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("users").updateMany({}, { $set: { profilePicture: null } });
};

export const down = async (db: Db) => {
  await db.collection("users").updateMany({}, { $unset: { profilePicture: 1 } });
};
