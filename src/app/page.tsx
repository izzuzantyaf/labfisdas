"use client"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Home</h1>
      <Link href="/lab-works">Lab Works Page</Link>
    </main>
  )
}
