import { Sequelize } from "sequelize-typescript";
import env from "./env.config";

const sequelize =
  env.NODE_ENV === "test" || env.NODE_ENV === "development"
    ? new Sequelize("collabApp", "postgres", "pass1234", {
        host: "localhost",
        dialect: "postgres",
        logging: false,
      })
    : new Sequelize("postgres://postgres:pass1234@localhost:5432/postgres", {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {},
        logging: false,
      });

export default sequelize;
