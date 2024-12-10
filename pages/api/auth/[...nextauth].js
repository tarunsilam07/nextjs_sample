import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

export const authOptions={
    providers:[
        GithubProvider({
            clientId:'Ov23ligpG89jw0DGuiFB',
            clientSecret:'693bb257f05def7752f2e57a89229d5018e71355'
        })
    ]
};

export default NextAuth(authOptions);