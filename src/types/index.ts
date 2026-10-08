export type Role = "ADMIN" | "MANAGER";

export type Category = "PREMIUM" | "LEVE" | "MOTOS";

export type VehicleStatus = "AVAILABLE" | "RESERVED" | "SOLD" | "DRAFT";

export type FuelType = "GASOLINE" | "ETHANOL" | "FLEX" | "DIESEL" | "HYBRID" | "ELECTRIC";

export type Transmission = "MANUAL" | "AUTOMATIC" | "CVT" | "DSG" | "PDK" | "SEQUENTIAL";

export type LeadStatus = "NEW" | "CONTACTED" | "NEGOTIATING" | "CLOSED_WON" | "CLOSED_LOST";

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string | null;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface Vehicle {
  id: string;
  slug: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  yearModel: number;
  price: number;
  fipePrice?: number | null;
  mileage: number;
  fuelType: FuelType;
  transmission: Transmission;
  color: string;
  doors: number;
  description?: string | null;
  images: string[];
  features: string[];
  category: Category;
  status: VehicleStatus;
  location: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId?: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  vehicleId?: string | null;
  userId?: string | null;
  status: LeadStatus;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VehicleWithAuthor extends Vehicle {
  author?: Pick<User, "id" | "name" | "email">;
  _count?: {
    leads: number;
  };
}

export interface LeadWithVehicle extends Lead {
  vehicle?: Pick<Vehicle, "id" | "title" | "brand" | "model" | "year" | "price" | "images"> | null;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface VehicleFilters {
  search?: string;
  category?: Category;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  maxMileage?: number;
  fuelType?: FuelType;
  transmission?: Transmission;
  status?: VehicleStatus;
  isFeatured?: boolean;
  page?: number;
  limit?: number;
  sortBy?: "price" | "year" | "mileage" | "createdAt";
  sortOrder?: "asc" | "desc";
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}