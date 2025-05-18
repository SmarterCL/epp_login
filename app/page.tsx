import Link from "next/link"
import { UserButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Next.js with Clerk Auth</h1>

        <div className="flex justify-center mb-4">
          <SignedIn>
            <div className="flex flex-col items-center gap-4">
              <p className="text-center">You are signed in!</p>
              <UserButton afterSignOutUrl="/" />
              <Link
                href="/dashboard"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              >
                Go to Dashboard
              </Link>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-center mb-4">Sign in to access the dashboard</p>
              <div className="grid grid-cols-2 gap-4">
                <SignInButton mode="modal">
                  <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </div>
          </SignedOut>
        </div>
      </div>
    </main>
  )
}
