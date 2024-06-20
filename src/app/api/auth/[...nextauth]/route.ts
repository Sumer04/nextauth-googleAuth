
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
const authoptions=NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
     pages :{signIn:'/'}
})
export{authoptions as GET,authoptions as POST}