import { NextRequest, NextResponse } from "next/server";
import { getVehicleBySlug } from "@/data/vehicles";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const vehicle = getVehicleBySlug(slug);

    if (!vehicle) {
      return NextResponse.json(
        { success: false, error: "Veículo não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    console.error("Erro ao buscar veículo:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
