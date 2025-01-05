import { users } from "@components/userList";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error("Email or Password may be empty!");

        const formData = {
          email: credentials.email,
          password: credentials.password,
        };
        const payload = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        };

        const res = await fetch(
          "http://localhost:3000/api/auth/login",
          payload
        );
        const resJson = await res.json();
        const user = resJson?.user;
        // const user = users.find((u) => u.email === credentials?.email);
        console.log(user, resJson);
        if (user?.email === credentials?.email) {
          return user;
        } else {
          throw new Error("either email or password may be Incorrect!!");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 6 * 24 * 365,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
    
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      // console.log("session", session, "user",user, "token",token);
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log("user",  user,"token",token);
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
