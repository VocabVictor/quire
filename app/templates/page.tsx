import { Button } from "@/components/ui/button"

const templates = [
  { id: 1, name: "Basic Project", description: "A simple project template to get you started." },
  { id: 2, name: "Agile Sprint", description: "Template for managing agile sprints and user stories." },
  { id: 3, name: "Marketing Campaign", description: "Organize and track your marketing initiatives." },
  { id: 4, name: "Product Launch", description: "Streamline your product launch process." },
  { id: 5, name: "Research Project", description: "Template for academic or business research projects." },
]

export default function TemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
            <p className="text-gray-600 mb-4">{template.description}</p>
            <Button>Use Template</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

