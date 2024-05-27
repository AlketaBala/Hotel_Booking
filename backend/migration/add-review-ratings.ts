import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $set: { "reviews.$[].rating": null } });
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, { $unset: { "reviews.$[].rating": 1 } });
};
