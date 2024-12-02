"use server";

import { supabase } from "@/lib/supabase-client";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ 
          message: "Name, email and password are required",
          errors: {
            name: !name ? "Nome é obrigatório" : null,
            email: !email ? "Email é obrigatório" : null,
            password: !password ? "Senha é obrigatória" : null
          }
        }),
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    });

    if (error) {
      return new Response(
        JSON.stringify({ 
          message: "Registration failed", 
          error: error.message,
          errors: {
            email: error.message.includes("email") ? error.message : null,
            password: error.message.includes("password") ? error.message : null
          }
        }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: "Registration successful. Please check your email to confirm your account.",
        data 
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Registration error:", error);
    return new Response(
      JSON.stringify({ message: "An unexpected error occurred" }),
      { status: 500 }
    );
  }
}
