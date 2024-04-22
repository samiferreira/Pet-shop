import "dotenv/config"

const DATABASE_PORT_FALLBACK = 5432

export const config = {
  dbHost: process.env.DB_HOST ?? 'localhost',
  database: process.env.DB_DATABASE,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: Number(process.env.DB_PORT) ?? DATABASE_PORT_FALLBACK
}