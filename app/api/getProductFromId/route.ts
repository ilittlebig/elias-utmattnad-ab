import type { NextApiRequest } from 'next'
import { ObjectId } from 'mongodb'
import { dbConnect } from '@/lib/mongodb'
import Product from '@/models/product'

export async function GET(request: NextApiRequest) {
  const url = request.nextUrl.searchParams;
  const productId = url.get("id");

  try {
    await dbConnect();
    const product = await Product.findById(productId).exec();

    if (!product) {
      return new Response(JSON.stringify({
	message: "Product not found"
      }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    return new Response(JSON.stringify(product), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: "Internal Server Error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
