import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

export default async function Dashboard() {
  const { userId } = await auth()

  // If the user is not authenticated, redirect to the home page
  if (!userId) {
    redirect("/")
  }

  return (
    <div className="min-h-screen p-4">
      <header className="flex justify-between items-center mb-8 p-4 bg-white shadow rounded">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard</h2>
        <p className="mb-4">This is a protected page. Only authenticated users can see this content.</p>
        <p className="text-sm text-gray-600">Your user ID: {userId}</p>
      </main>
    </div>
  )
}
