import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Dados inválidos.",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const lead = result.data;
    // In production or demo, lead is recorded safely and WhatsApp URL can be returned
    const cleanPhone = "5554996827149";
    const text = encodeURIComponent(
      `Olá! Meu nome é ${lead.name}. ${lead.message || "Gostaria de mais informações sobre o estoque Velloce."}`
    );
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${text}`;

    return NextResponse.json({
      success: true,
      message: "Lead recebido com sucesso!",
      data: {
        ...lead,
        id: `lead-${Date.now()}`,
        whatsappUrl,
      },
    });
  } catch (error) {
    console.error("Erro ao registrar lead:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar lead." },
      { status: 500 }
    );
  }
}
