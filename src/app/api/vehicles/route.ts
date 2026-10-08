import { NextRequest, NextResponse } from "next/server";
import { getFilteredVehicles } from "@/data/vehicles";
import { VehicleFilters, Category, FuelType, Transmission, VehicleStatus } from "@/types";
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const filters: VehicleFilters = {
      search: searchParams.get("search") || undefined,
      category: (searchParams.get("category") as Category) || undefined,
      brand: searchParams.get("brand") || undefined,
      minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
      maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
      minYear: searchParams.get("minYear") ? Number(searchParams.get("minYear")) : undefined,
      maxYear: searchParams.get("maxYear") ? Number(searchParams.get("maxYear")) : undefined,
      maxMileage: searchParams.get("maxMileage") ? Number(searchParams.get("maxMileage")) : undefined,
      fuelType: (searchParams.get("fuelType") as FuelType) || undefined,
      transmission: (searchParams.get("transmission") as Transmission) || undefined,
      status: (searchParams.get("status") as VehicleStatus) || undefined,
      isFeatured: searchParams.get("isFeatured") ? searchParams.get("isFeatured") === "true" : undefined,
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
      limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : 12,
      sortBy: (searchParams.get("sortBy") as any) || "createdAt",
      sortOrder: (searchParams.get("sortOrder") as any) || "desc",
    };

    const result = getFilteredVehicles(filters);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Erro ao listar veículos:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao buscar veículos." },
      { status: 500 }
    );
  }
}
