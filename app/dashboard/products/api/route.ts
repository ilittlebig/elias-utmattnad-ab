import type { NextApiRequest } from 'next';
import { dbConnect } from '@/lib/mongodb';
import Product from '@/models/product';

export async function GET(request: NextApiRequest) {
  try {
    await dbConnect();
    const count = await Product.countDocuments();

    return new Response(JSON.stringify({ count }), {
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
