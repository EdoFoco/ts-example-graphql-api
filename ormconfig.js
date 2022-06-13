module.exports = {
  name: "default",
  type: "postgres",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  migrationsRun: true,
  dropSchema: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/db/migrations/*.ts"],
  seeds: ["src/db/seeding/seeder.ts"],
};