import type { NextApiRequest } from 'next';
import { dbConnect } from '@/lib/mongodb';
import Product from '@/models/product';

export async function PUT(request: NextApiRequest) {
  try {
    await dbConnect();

    const url = request.nextUrl.searchParams;
    const productId = url.get("id");

    const body = request.body;
    const passedValue = await new Response(body).text();
    const productDetails = JSON.parse(passedValue);

    const updatedProduct = await Product.findByIdAndUpdate(productId, productDetails, { new: true });

    return new Response(JSON.stringify({
      message: "Product updated successfully",
      updatedProduct
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
