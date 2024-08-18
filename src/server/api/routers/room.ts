import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { roomInputCreate, roomInputUpdate } from "@/server/inputs/room";

export const roomRouter = createTRPCRouter({
  //fetch all rooms
  // todo: limit the number of rooms fetched
  getRooms: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.room.findMany({
      // include: {
      //   images: true, // Include related images if you want to fetch them as well
      //   location: true, // Include related location if needed
      //   reviews: true, // Include related reviews if needed
      // },
    });
  }),

  // get a single room by ID
  getRoomById: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .query(async ({ ctx, input }) => {
      const room = await ctx.db.room.findUnique({
        where: {
          id: input.id,
        },
        // include: {
        //   images: true, // Include related images
        //   location: true, // Include related location
        //   reviews: true, // Include related reviews
        // },
      });

      if (!room) throw new Error(`Room with ID ${input.id} not found`);

      return room;
    }),

  // create a room
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

  // update a room by ID
  updateRoom: protectedProcedure
    .input(roomInputUpdate)
    .mutation(async ({ ctx, input }) => {
      const room = await ctx.db.room.update({
        where: { id: input.id },
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
          images: {
            deleteMany: {}, // Remove all existing images
            create:
              input.images?.map((image) => ({
                publicId: image.publicId,
                url: image.url,
              })) ?? [],
          },
        },
      });

      return room;
    }),

  // delete a room by ID
  deleteRoom: protectedProcedure
    .input(z.object({ id: z.number().int() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.room.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),
});
