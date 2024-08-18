import { z } from "zod";

export const roomInputCreate = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  pricePerNight: z.number().positive("Price per night must be positive"),
  address: z.string().min(1, "Address is required"),
  locationId: z.number(), // Assuming location is already created and has an ID
  guestCapacity: z.number().positive("Guest capacity must be positive"),
  numOfBeds: z.number().positive("Number of beds must be positive"),
  isInternet: z.boolean().optional(),
  isBreakfast: z.boolean().optional(),
  isAirConditioned: z.boolean().optional(),
  isPetsAllowed: z.boolean().optional(),
  isRoomCleaning: z.boolean().optional(),
  ratings: z.number().default(0).optional(),
  numOfReviews: z.number().default(0).optional(),
  category: z.enum(["King", "Single", "Twins"]),
  images: z.array(
    z.object({
      publicId: z.string(),
      url: z.string().url(),
    }),
  ),
});

export const roomInputUpdate = z.object({
  id: z.number().int(), //required
  name: z.string().optional(),
  description: z.string().optional(),
  pricePerNight: z
    .number()
    .positive("Price per night must be positive")
    .optional(),
  address: z.string().optional(),
  locationId: z.number().optional(),
  guestCapacity: z
    .number()
    .positive("Guest capacity must be positive")
    .optional(),
  numOfBeds: z.number().positive("Number of beds must be positive").optional(),
  isInternet: z.boolean().optional(),
  isBreakfast: z.boolean().optional(),
  isAirConditioned: z.boolean().optional(),
  isPetsAllowed: z.boolean().optional(),
  isRoomCleaning: z.boolean().optional(),
  ratings: z.number().optional(),
  numOfReviews: z.number().optional(),
  category: z.enum(["King", "Single", "Twins"]).optional(),
  images: z
    .array(
      z.object({
        publicId: z.string(),
        url: z.string().url(),
      }),
    )
    .optional(),
});
