import type { NextRequest } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import getModelByType from '@/utils/modelSelector'

export async function POST(request: NextRequest) {
  const url = request.nextUrl.searchParams;
  const type = url.get("type");

  try {
    await dbConnect();

    const body = request.body;
    const passedValue = await new Response(body).text();
    const itemDetails = JSON.parse(passedValue);

    const model = getModelByType(type);
    const item = new model(itemDetails);
    await item.save();

    // TODO: this should adapt to which model is being used
    return new Response(JSON.stringify({
      message: "Product created successfully",
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
