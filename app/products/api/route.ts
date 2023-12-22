import type { NextRequest } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;
  const collectionQuery = url.get("collection");
  const category = url.get("category");

  try {
    const { db } = await connectToDatabase();
    const collection = await db.collection(collectionQuery)
      .find(category != "all" ? { category: category } : {})
      .toArray();

    return new Response(JSON.stringify(collection), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching collection:", error);
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
