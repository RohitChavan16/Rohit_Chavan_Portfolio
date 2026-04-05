import { NextRequest, NextResponse } from "next/server";
import getClientPromise from "@/lib/mongodb";
import { contactFormSchema } from "@/lib/validations/contact";

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "portfolio";
const COLLECTION_NAME = "contact_messages";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please provide valid form values.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const client = await getClientPromise();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const document = {
      ...parsed.data,
      source: "portfolio_contact_form",
      createdAt: new Date(),
      metadata: {
        ip:
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          request.headers.get("x-real-ip") ||
          null,
        userAgent: request.headers.get("user-agent") || null,
      },
    };

    const result = await collection.insertOne(document);

    return NextResponse.json(
      {
        message: "Contact message stored successfully.",
        id: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact failed:", error);

    return NextResponse.json(
      { message: "Unable to submit your message right now. Please try again." },
      { status: 500 }
    );
  }
}
