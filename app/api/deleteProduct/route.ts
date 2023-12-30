import type { NextApiRequest } from 'next'
import { dbConnect } from '@/lib/mongodb'
import Product from '@/models/product'

export async function DELETE(request: NextApiRequest) {
  try {
    await dbConnect();

    const url = request.nextUrl.searchParams;
    const productId = url.get("id");
    await Product.findByIdAndDelete(productId);

    return new Response(JSON.stringify({
      message: "Product deleted successfully"
    }), {
      status: 201,
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
