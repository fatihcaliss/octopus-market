"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function LogInButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex gap-5">
        <div className="flex items-center">
          <Image
            src={session.user.image as string}
            alt={session.user.image as string}
            width={32}
            height={32}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          />
        </div>

        <div className="flex items-center">
          <h2 className="bold">{session?.user?.email}</h2>
        </div>
        <button
          onClick={() => signOut()}
          className="border rounded-md p-2 hover:bg-slate-100"
        >
          Sign out
        </button>
      </div>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}
