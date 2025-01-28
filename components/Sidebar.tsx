import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-60 bg-[#475876] text-white p-4">
      <Button className="w-full bg-green-600 hover:bg-green-700 mb-6">
        <Plus className="mr-2 h-4 w-4" />
        New Project
      </Button>

      <nav className="space-y-1">
        <Link href="/" className="block px-2 py-1 rounded text-white hover:bg-white/10">
          All Projects
        </Link>
        <Link href="/your-projects" className="block px-2 py-1 rounded text-white/70 hover:bg-white/10">
          Your Projects
        </Link>
        <Link href="/shared" className="block px-2 py-1 rounded text-white/70 hover:bg-white/10">
          Shared with you
        </Link>
        <Link href="/archived" className="block px-2 py-1 rounded text-white/70 hover:bg-white/10">
          Archived Projects
        </Link>
        <Link href="/trash" className="block px-2 py-1 rounded text-white/70 hover:bg-white/10">
          Trashed Projects
        </Link>
      </nav>

      <div className="mt-8">
        <h3 className="px-2 text-sm font-medium text-white/50 mb-2">ORGANIZE PROJECTS</h3>
        <Button variant="ghost" className="w-full justify-start text-white/70 hover:bg-white/10 hover:text-white">
          <Plus className="mr-2 h-4 w-4" />
          New Tag
        </Button>
      </div>
    </aside>
  )
}

