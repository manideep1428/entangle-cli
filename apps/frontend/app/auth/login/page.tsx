"use client"

import { useEffect } from "react";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const { isLoaded, signIn } = useSignIn();
  const search  = useSearchParams();
  const  { isSignedIn  , user } = useUser();
  const redirect = search.get("redirect") as string;


  //const LOGIN_URL = `https://your-app.com/sign-in?cli=true&redirect=http://localhost:${PORT}`;

  useEffect(() => {
    if (!isSignedIn) {
       router.push(`/?redirect="auth/login"`)
    }
      // User is already signed in, fetch token and redirect immediately
      router.push(`/api/auth?redirect=${encodeURIComponent(redirect)}`);
  }, [])
return <div></div>
 
}
 