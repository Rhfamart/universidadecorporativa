import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Demo',
      credentials: { username:{label:'User'}, password:{label:'Password'} },
      async authorize(creds) {
        if (creds.password === 'demo') return { id:1, name: creds.username }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || 'change-me'
})