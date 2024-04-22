
import express, { Request, Response, response } from "express"
import { client, endDatabase, startDatabase } from "./database"
import { isWeekend } from "../src/helpers/date"
import { QueriablePetshop, WorthablePetshop } from "../types"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

function findWorthablePetshopAtWeekend(petshops: QueriablePetshop[], bigDogQnty: number, smallDogQty: number): WorthablePetshop {
  const cheapestPetshop = {
    distance: petshops[0].distance,
    name: '',
    finalPrice: petshops[0].weekend_big_dog_price + petshops[0].weekend_small_dog_price
  }

  for (const petshop of petshops) {
    const totalPrice = (petshop.weekend_big_dog_price * bigDogQnty) + (petshop.weekend_small_dog_price * smallDogQty)

    const isPetshopCheapest = totalPrice < cheapestPetshop.finalPrice
    if (isPetshopCheapest) {
      cheapestPetshop.finalPrice = totalPrice
      cheapestPetshop.name = petshop.name
      cheapestPetshop.distance = petshop.distance
      continue
    }

    const isPetshopWithSamePriceNearest = totalPrice === cheapestPetshop.finalPrice && petshop.distance < cheapestPetshop.distance
    if (isPetshopWithSamePriceNearest) {
      cheapestPetshop.finalPrice = totalPrice
      cheapestPetshop.name = petshop.name
      cheapestPetshop.distance = petshop.distance
    }
  }

  return cheapestPetshop
}

function findWorthablePetshopAtNormalDay(petshops: QueriablePetshop[], bigDogQnty: number, smallDogQty: number): WorthablePetshop {
  const cheapestPetshop = {
    distance: petshops[0].distance,
    name: '',
    finalPrice: petshops[0].normal_big_dog_price + petshops[0].normal_small_dog_price
  }

  for (const petshop of petshops) {
    const totalPrice = (petshop.normal_big_dog_price * bigDogQnty) + (petshop.normal_small_dog_price * smallDogQty)

    const isPetshopCheapest = totalPrice < cheapestPetshop.finalPrice
    if (isPetshopCheapest) {
      cheapestPetshop.finalPrice = totalPrice
      cheapestPetshop.name = petshop.name
      cheapestPetshop.distance = petshop.distance
      continue
    }

    const isPetshopWithSamePriceNearest = totalPrice === cheapestPetshop.finalPrice && petshop.distance < cheapestPetshop.distance
    if (isPetshopWithSamePriceNearest) {
      cheapestPetshop.finalPrice = totalPrice
      cheapestPetshop.name = petshop.name
      cheapestPetshop.distance = petshop.distance
    }
  }

  return cheapestPetshop
}


app.get('/cheapest-petshop', async (req: Request, res: Response) => {
  const DEFAULT_DOG_QUANTITY = 0
  const smallDogQty = req.query['small_dogs'] ? Number(req.query['small_dogs']) : DEFAULT_DOG_QUANTITY
  const bigDogQnty = req.query['big_dogs'] ? Number(req.query['big_dogs']) : DEFAULT_DOG_QUANTITY

  if (!smallDogQty && !bigDogQnty) {
    return res.status(422).json({
      message: 'Por favor, informe a quantidade de pets.'
    })
  }

  const desiredPetshopDate = req.query['date']
  if (!desiredPetshopDate) {
    return res.status(422).json({
      message: 'Por favor, informe a data da ida ao petshop.'
    })
  }

  const petshops = await client.query(`
    SELECT *
    FROM petshops
  `);

  if (isWeekend(<string>desiredPetshopDate)) {
    return res.json(findWorthablePetshopAtWeekend(petshops.rows, bigDogQnty, smallDogQty))
  }

  return res.json(findWorthablePetshopAtNormalDay(petshops.rows, bigDogQnty, smallDogQty))
})


function getServerPort(): number {
  if (process.env.port) return +process.env.port

  const PORT_FALLBACK = 3333
  console.info(`ENV PORT was not found, using fallback --> PORT: ${PORT_FALLBACK}`)
  return PORT_FALLBACK
}

try {
  (async () => {
    await startDatabase()
  })()

  app.listen(getServerPort(), () => {
    console.info(`App running!`)
  })
} catch (err) {
  console.error(err);
  endDatabase()
}
