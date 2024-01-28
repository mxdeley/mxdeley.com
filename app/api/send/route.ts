import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "admin@madeleydesignstudio.org",
      to: "dev@madeleydesignstudio.org",
      subject: "Hello",
      html: "<h1>Hello<h1>",
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
