"use server";
import { Resend } from 'resend';

const resend = new Resend('re_BUH2QN5H_7EZTaFjwPALvwFW6RxGMDjjN');

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ivarrais2001@gmail.com',
      subject: 'Hello world',
      react: "Hello World",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
