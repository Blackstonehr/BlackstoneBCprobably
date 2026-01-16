'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-burgundy-50 to-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold text-burgundy-500 mb-6">Blackstone Command</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Admin command centre for managing teams, incidents, training, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
          <Link
            href="/admin"
            className="p-6 bg-white border-2 border-burgundy-200 rounded-sm hover:border-burgundy-500 hover:shadow-glow transition-all"
          >
            <h2 className="text-2xl font-semibold text-burgundy-500 mb-2">Admin</h2>
            <p className="text-gray-600">Full command centre dashboard</p>
          </Link>

          <Link
            href="/owner"
            className="p-6 bg-white border-2 border-burgundy-200 rounded-sm hover:border-burgundy-500 hover:shadow-glow transition-all"
          >
            <h2 className="text-2xl font-semibold text-burgundy-500 mb-2">Owner</h2>
            <p className="text-gray-600">Owner view and reports</p>
          </Link>

          <Link
            href="/employee"
            className="p-6 bg-white border-2 border-burgundy-200 rounded-sm hover:border-burgundy-500 hover:shadow-glow transition-all"
          >
            <h2 className="text-2xl font-semibold text-burgundy-500 mb-2">Employee</h2>
            <p className="text-gray-600">Employee portal</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
