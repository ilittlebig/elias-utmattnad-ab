import type { NextApiRequest } from 'next'
import { dbConnect } from '@/lib/mongodb'
import getModelByType from '@/utils/modelSelector'

export async function PUT(request: NextApiRequest) {
  const url = request.nextUrl.searchParams;
  const itemId = url.get("id");
  const type = url.get("type");

  try {
    await dbConnect();

    const body = request.body;
    const passedValue = await new Response(body).text();
    const itemDetails = JSON.parse(passedValue);

    const model = getModelByType(type);
    const item = await model.findByIdAndUpdate(
      itemId,
      itemDetails,
      { new: true }
    );

    // TODO: adjust text to different models
    return new Response(JSON.stringify({
      message: "Product updated successfully",
      success: true,
      item
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
