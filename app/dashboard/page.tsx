import { Input } from "@/components/ui/input"
import { ProjectList } from "@/components/ProjectList"
import { projects } from "@/lib/data"

export default function DashboardPage() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Projects</h1>
        <div className="text-sm text-gray-600">You&apos;re using Overleaf Premium</div>
      </div>

      <Input type="search" placeholder="Search in all projects..." className="max-w-2xl mb-6" />

      <ProjectList projects={projects} />
    </>
  )
}

