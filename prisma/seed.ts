import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.room.create({
    data: {
      name: "Ocean View Suite",
      description: "A luxurious suite with a stunning ocean view.",
      pricePerNight: 250,
      address: "123 Beach Ave, Miami, FL",
      location: {
        create: {
          type: "Point",
          coordinates: [-80.1918, 25.7617],
          formattedAddress: "123 Beach Ave, Miami, FL",
          city: "Miami",
          state: "FL",
          zipCode: "33101",
          country: "US",
        },
      },
      guestCapacity: 4,
      numOfBeds: 2,
      isInternet: true,
      isBreakfast: true,
      isAirConditioned: true,
      isPetsAllowed: false,
      isRoomCleaning: true,
      ratings: 4.5,
      numOfReviews: 10,
      category: "King",
      user: {
        create: {
          email: "john@example.com",
        },
      },
      images: {
        create: [
          {
            publicId: "sample-id-1",
            url: "http://example.com/image1.jpg",
          },
        ],
      },
    },
  });

  await prisma.room.create({
    data: {
      name: "Mountain Cabin",
      description: "A cozy cabin in the mountains.",
      pricePerNight: 150,
      address: "456 Mountain Rd, Denver, CO",
      location: {
        create: {
          type: "Point",
          coordinates: [-104.9903, 39.7392],
          formattedAddress: "456 Mountain Rd, Denver, CO",
          city: "Denver",
          state: "CO",
          zipCode: "80202",
          country: "US",
        },
      },
      guestCapacity: 2,
      numOfBeds: 1,
      isInternet: false,
      isBreakfast: false,
      isAirConditioned: false,
      isPetsAllowed: true,
      isRoomCleaning: false,
      ratings: 4.0,
      numOfReviews: 5,
      category: "Single",
      user: {
        create: { email: "jane@example.com" },
      },
      images: {
        create: [
          {
            publicId: "sample-id-2",
            url: "http://example.com/image2.jpg",
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
