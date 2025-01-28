import { Input } from "@/components/ui/input"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { ProjectList } from "@/components/ProjectList"

export default function ProjectManagement() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">All Projects</h1>
            <div className="text-sm text-gray-600">You&apos;re using Overleaf Premium</div>
          </div>

          <Input type="search" placeholder="Search in all projects..." className="max-w-2xl mb-6" />

          <ProjectList projects={projects} />
        </main>
      </div>
    </div>
  )
}

const projects = [
  {
    id: 1,
    title: "ICASSP-5 (Copy-right)",
    owner: "294921990",
    lastModified: "5 hours ago by 294921990",
  },
  {
    id: 2,
    title: "IEEE Conference Template (2)",
    owner: "You",
    lastModified: "6 hours ago by You",
  },
  {
    id: 3,
    title: "IEEE Conference Template (1)",
    owner: "You",
    lastModified: "7 hours ago by You",
  },
  {
    id: 4,
    title: "Multi-Stage Filtering Mechanism",
    owner: "You",
    lastModified: "5 days ago by You",
  },
  {
    id: 5,
    title: "MCTS-Driven PDDL Planning",
    owner: "You",
    lastModified: "5 days ago by You",
  },
]

