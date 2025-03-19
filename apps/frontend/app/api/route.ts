// pages/api/auth.ts
import { useAuth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { userId } = useAuth(); // Get the authenticated user
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const redirect = url.searchParams.get("redirect");

  // Generate a token (replace with a real implementation)
  const token = `entangle-${userId}-${Date.now()}`;

  if (redirect) {
    return NextResponse.redirect(`${redirect}?token=${token}`);
  }

  return NextResponse.json({ token });
}
