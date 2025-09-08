import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = "shayan.developer12@gmail.com";

export async function POST(request: Request) {
  try {
    const { feedback, email } = await request.json();

    if (!feedback || !email) {
      return NextResponse.json(
        { error: "Feedback and email are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Feedback <onboarding@resend.dev>",
      to: toEmail,
      subject: "New Feedback Submission",
      html: `<p><strong>Feedback:</strong></p><p>${feedback}</p>${ 
        email ? `<p><strong>From:</strong> ${email}</p>` : ""
      }`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending feedback email:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
