import "@/styles/globals.css"
import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"

export const metadata: Metadata = {
  title: "Overleaf",
  description: "Project management for Overleaf",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

