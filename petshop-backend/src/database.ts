import { Pool } from "pg"
import { config } from "../config/env"
import { PetShop } from "../types"

export const client = new Pool({
  database: config.database,
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  port: config.dbPort
})

async function createDatabase() {
  await client.query(`
    CREATE TABLE IF NOT EXISTS petshops (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      normal_small_dog_price DECIMAL NOT NULL,
      normal_big_dog_price DECIMAL NOT NULL,
      weekend_small_dog_price DECIMAL NOT NULL,
      weekend_big_dog_price DECIMAL NOT NULL,
      distance INTEGER NOT NULL
    )`
  )
}

export async function endDatabase() {
  await client.end()
}

const makePetshops = (): PetShop[] => {
  return [
    {
      name: 'Meu Canino Feliz',
      distanceInKm: 2000,
      price: {
        normal: {
          small: 2000,
          big: 4000
        },
        weekend: {
          small: 2400,
          big: 4800
        }
      },
    },
    {
      name: 'Vai Rex',
      distanceInKm: 1700,
      price: {
        normal: {
          small: 1500,
          big: 5000
        },
        weekend: {
          small: 2000,
          big: 5500
        }
      }
    },
    {
      name: 'ChowChawgas',
      distanceInKm: 800,
      price: {
        normal: {
          small: 3000,
          big: 4500
        },
        weekend: {
          small: 3000,
          big: 4500
        }
      }
    }
  ]
}

export async function seedDatabse() {
  const petshops = makePetshops()
  const queries = [];
  for (const petshop of petshops) {
    const query = {
      text: `INSERT INTO petshops (name, normal_small_dog_price, normal_big_dog_price, weekend_small_dog_price, weekend_big_dog_price, distance) 
      VALUES ($1, $2, $3, $4, $5, $6)`,
      values: [
        petshop.name,
        petshop.price.normal.small,
        petshop.price.normal.big,
        petshop.price.weekend.small,
        petshop.price.weekend.big,
        petshop.distanceInKm
      ]
    }

    queries.push(client.query(query))
  }

  await Promise.all(queries)
}

export async function startDatabase() {
  await createDatabase()
  await client.connect()
  await seedDatabse()
}