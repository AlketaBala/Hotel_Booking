import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").createIndex({ name: 1 });
};

export const down = async (db: Db) => {
  await db.collection("hotels").dropIndex({ name: 1 });
};
