import { NextApiRequest, NextApiResponse } from "next";
import productsMock from '../../../product/mock.json'

// i am going to use try cath statement to simulate a database request, to integrate when it's ready
const products = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const responseData = {
      products:await productsMock
    }

    res.status(200).json(responseData)
  }
  catch (e) {
    console.log(e)
    res.status(404).json(e)
  }
}

export default products;