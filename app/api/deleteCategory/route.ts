import type { NextApiRequest } from 'next'
import { dbConnect } from '@/lib/mongodb'
import Category from '@/models/category'

export async function DELETE(request: NextApiRequest) {
  try {
    await dbConnect();

    const url = request.nextUrl.searchParams;
    const categoryId = url.get("id");
    await Category.findByIdAndDelete(categoryId);

    return new Response(JSON.stringify({
      message: "Category deleted successfully"
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
