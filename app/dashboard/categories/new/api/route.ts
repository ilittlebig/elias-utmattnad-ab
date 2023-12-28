import type { NextApiRequest } from 'next';
import { dbConnect } from '@/lib/mongodb';
import Category from '@/models/category';

export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();

    const body = request.body;
    const passedValue = await new Response(body).text();
    const categoryDetails = JSON.parse(passedValue);

    const category = new Category(categoryDetails);
    await category.save();

    return new Response(JSON.stringify({
      message: "Category created successfully",
      category
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
