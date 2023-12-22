import type { NextApiRequest } from 'next'
import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../../../lib/mongodb';

export async function GET(request: NextApiRequest) {
  const pathSegments = request.nextUrl.pathname.split('/');
  const productId = pathSegments[pathSegments.length - 2];

  try {
    const { db } = await connectToDatabase();
    const product = await db.collection("products").findOne({
      _id: new ObjectId(productId)
    });

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
