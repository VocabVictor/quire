import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export function Header() {
  return (
    <header className="bg-[#273444] text-white">
      <div className="h-14 px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold text-white hover:text-gray-200 transition-colors">
          Quire
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4 mr-4 text-base">
            <Link href="/templates">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 text-base">
                Templates
              </Button>
            </Link>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 text-base">
              Help
              <HelpCircle className="ml-1 h-4 w-4" />
            </Button>
          </nav>
          <Button
            variant="outline"
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#273444] rounded-full"
          >
            Projects
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#273444] rounded-full"
          >
            Account
          </Button>
        </div>
      </div>
    </header>
  )
}

