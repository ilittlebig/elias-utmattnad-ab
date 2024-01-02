import type { NextRequest } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import getModelByType from '@/utils/modelSelector'

export async function DELETE(request: NextRequest) {
  const url = request.nextUrl.searchParams;
  const itemId = url.get("id");
  const type = url.get("type");

  try {
    await dbConnect();

    const model = getModelByType(type);
    await model.findByIdAndDelete(itemId);

    return new Response(JSON.stringify({
      message: "Product deleted successfully",
      success: true
    }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
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
