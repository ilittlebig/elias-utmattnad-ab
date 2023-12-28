import type { NextRequest } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import Category from '@/models/category'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;
  const categoryId = url.get("id");

  try {
    await dbConnect();
    const category = await Category.findById(categoryId).exec();

    if (!category) {
      return new Response(JSON.stringify({
	message: "Category not found"
      }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    return new Response(JSON.stringify(category), {
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
