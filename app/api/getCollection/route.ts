import type { NextRequest } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import Product from '@/models/product'
import Category from '@/models/category'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;
  const collectionQuery = url.get("collection");
  const category = url.get("category");

  try {
    await dbConnect();

    let model;
    switch (collectionQuery) {
      case "products":
        model = Product;
        break;
      case "categories":
        model = Category;
        break;
      default:
        throw new Error("Invalid collection specified");
    }

    const query = category !== "all" ? { category: category } : {};
    const collection = await model.find(query).exec();

    return new Response(JSON.stringify(collection), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching collection with Mongoose:", error);
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
