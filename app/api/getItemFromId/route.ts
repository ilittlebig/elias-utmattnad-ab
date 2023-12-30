import type { NextRequest } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import getModelByType from '@/utils/modelSelector'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;
  const itemId = url.get("id");
  const type = url.get("type");

  try {
    await dbConnect();

    const model = getModelByType(type);
    const item = await model.findById(itemId).exec();

    if (!item) {
      return new Response(JSON.stringify({
	message: "Category not found",
	success: true
      }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    return new Response(JSON.stringify(item), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      message: "Internal Server Error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
