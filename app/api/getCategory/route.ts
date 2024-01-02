import type { NextRequest } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import Category from '@/models/category'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;
  const category = url.get("category");

  try {
    await dbConnect();

    let model = Category;
    const query = { href: category };
    const collection = await model.find(query).exec();

    return new Response(JSON.stringify(collection), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error fetching collection:", error);
    return new Response(JSON.stringify({
      message: error.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
