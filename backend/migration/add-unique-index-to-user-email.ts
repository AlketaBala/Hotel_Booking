import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("users").createIndex({ email: 1 }, { unique: true });
};

export const down = async (db: Db) => {
  await db.collection("users").dropIndex({ email: 1 });
};
