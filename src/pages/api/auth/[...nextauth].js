import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import prismadb from '@/lib/prismadb'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        console.log(credentials)
        const user = await prismadb.admin.findFirst({ where: {
          userName: credentials.email
        }});
        console.log("here is the user",user, credentials)
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }

      

        if (!user ) {
          throw new Error('Email does not exist');
        }

        // const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

        // if (!isCorrectPassword) {
        //   throw new Error('Incorrect password');
        // }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth'
  },
  debug: true,
  adapter: PrismaAdapter(prismadb),
  session: { strategy: 'jwt' },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET
});
