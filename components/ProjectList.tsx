'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText, Monitor, Trash2 } from "lucide-react"
import type { Project } from "@/lib/types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectListProps {
  initialProjects?: Project[]
}

export function ProjectList({ initialProjects = [] }: ProjectListProps) {
  const [projects, setProjects] = useState(initialProjects)
  const [selectedAll, setSelectedAll] = useState(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const copyProject = (project: Project) => {
    const newProject = {
      ...project,
      id: Math.max(...projects.map((p) => p.id), 0) + 1,
      title: `${project.title} (copy)`,
      lastModified: new Date().toLocaleString(),
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="border rounded-lg">
      <div className="grid grid-cols-[auto_2fr_1fr_1fr_120px] gap-4 p-4 border-b bg-gray-50">
        <div className="flex items-center">
          <Checkbox
            checked={selectedAll}
            onCheckedChange={(checked) => {
              setSelectedAll(!!checked)
              setSelectedItems(checked ? projects.map((p) => p.id) : [])
            }}
          />
        </div>
        <div className="font-medium">Title</div>
        <div className="font-medium">Owner</div>
        <div className="font-medium">Last Modified ↓</div>
        <div className="font-medium text-right">Actions</div>
      </div>

      {projects.length === 0 ? (
        <div className="p-4 text-center text-gray-500">No projects found.</div>
      ) : (
        projects.map((project) => (
          <div
            key={project.id}
            className={`grid grid-cols-[auto_2fr_1fr_1fr_120px] gap-4 p-4 border-b hover:bg-gray-50 ${
              selectedItems.includes(project.id) ? "bg-green-50" : ""
            }`}
          >
            <div className="flex items-center">
              <Checkbox
                checked={selectedItems.includes(project.id)}
                onCheckedChange={(checked) => {
                  setSelectedItems(
                    checked ? [...selectedItems, project.id] : selectedItems.filter((id) => id !== project.id),
                  )
                  setSelectedAll(false)
                }}
              />
            </div>
            <div className="text-blue-600 hover:underline">{project.title}</div>
            <div>{project.owner}</div>
            <div className="text-gray-600">{project.lastModified}</div>
            <div className="flex justify-end space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-600"
                      onClick={() => copyProject(project)}
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download (.zip)</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download (.pdf)</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                      <Monitor className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Archive</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

