'use server';
import { createSessionClient , createAdminClient} from "@/lib/appwrite";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { parseStringify } from '../utils';

// Bejelentkezés
export const signIn = async ({email, password}: signInProps) => {
    try {

      const { account } = await createAdminClient();

      const response = await account.createEmailPasswordSession(email, password)

      return parseStringify(response);
        
    } catch (error) {
        console.error(error , 'SingIn error')
    }
}

// Regisztráció
export const signUp = async (userData : SignUpParams) => {

    const { email, password, firstName, lastName } = userData;
    try {

        const { account } = await createAdminClient();

        const newUserAccount = await account.create
        (ID.unique(), 
        email,
        password, 
        `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });             
        return parseStringify(newUserAccount);
    } catch (error) {
        console.error(error , 'SingIn error')
    }
}



export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();

      const user = await account.get();
      return parseStringify(user);
      
    } catch (error) {
      return null;
    }
  }

  
  
  
