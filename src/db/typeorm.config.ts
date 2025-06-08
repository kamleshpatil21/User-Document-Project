import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';
dotenv.config();
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  schema: process.env.SCHEMA,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: false,
};