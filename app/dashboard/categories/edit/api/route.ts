import type { NextApiRequest } from 'next'
import { dbConnect } from '@/lib/mongodb'
import Category from '@/models/category'

export async function PUT(request: NextApiRequest) {
  try {
    await dbConnect();

    const url = request.nextUrl.searchParams;
    const categoryId = url.get("id");

    const body = request.body;
    const passedValue = await new Response(body).text();
    const categoryDetails = JSON.parse(passedValue);

    const updatedCategory = await Category.findByIdAndUpdate(categoryId, categoryDetails, { new: true });

    return new Response(JSON.stringify({
      message: "Category updated successfully",
      updatedCategory
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
