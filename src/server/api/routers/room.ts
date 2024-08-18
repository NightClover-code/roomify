import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { roomInputCreate } from "@/server/inputs/room";

export const roomRouter = createTRPCRouter({
  create: protectedProcedure
    .input(roomInputCreate)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.room.create({
        data: {
          name: input.name,
          description: input.description,
          pricePerNight: input.pricePerNight,
          address: input.address,
          locationId: input.locationId,
          guestCapacity: input.guestCapacity,
          numOfBeds: input.numOfBeds,
          isInternet: input.isInternet,
          isBreakfast: input.isBreakfast,
          isAirConditioned: input.isAirConditioned,
          isPetsAllowed: input.isPetsAllowed,
          isRoomCleaning: input.isRoomCleaning,
          ratings: input.ratings,
          numOfReviews: input.numOfReviews,
          category: input.category,
          userId: ctx.session.user.id,
          images: {
            create:
              input.images?.map((image) => ({
                publicId: image.publicId,
                url: image.url,
              })) || [],
          },
        },
      });
    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.room.create({ data: {} });
  //   }),

  // getLatest: protectedProcedure.query(async ({ ctx }) => {
  //   const room = await ctx.db.room.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });

  //   return room ?? null;
  // }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
