import type { NextApiRequest } from 'next'
import { dbConnect } from '@/lib/mongodb'
import Product from '@/models/product'

export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();

    const body = request.body;
    const passedValue = await new Response(body).text();
    const productDetails = JSON.parse(passedValue);

    const product = new Product(productDetails);
    await product.save();

    return new Response(JSON.stringify({
      message: "Product created successfully",
      product
    }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
