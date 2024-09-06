import { PrismaAdapter } from "@auth/prisma-adapter";
import Resend from "next-auth/providers/resend";

import NextAuth, { type DefaultSession, type NextAuthConfig } from "next-auth";
import { db } from "./db";
import { env } from "@/env";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  providers: [
    Resend({
      apiKey: env.AUTH_RESEND_KEY,
      from: env.EMAIL_FROM,
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
