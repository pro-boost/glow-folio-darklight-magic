import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { X, Plus, Pencil, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

// Sample project data structure
const initialProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Personal Finance Dashboard",
    description: "An interactive dashboard for tracking expenses, investments, and financial goals.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Chart.js", "Firebase", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectsManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load projects from localStorage if available
    const savedProjects = localStorage.getItem("portfolio-projects");
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (error) {
        console.error("Error loading projects from localStorage:", error);
        setProjects(initialProjects);
      }
    } else {
      setProjects(initialProjects);
    }
  }, []);

  const emptyProject: Project = {
    id: "",
    title: "",
    description: "",
    image: "",
    tags: [],
    liveUrl: "",
    githubUrl: ""
  };

  const handleEdit = (project: Project) => {
    setCurrentProject({...project});
    setIsOpen(true);
  };

  const handleCreate = () => {
    setCurrentProject({...emptyProject, id: Date.now().toString()});
    setIsOpen(true);
  };

  const saveToLocalStorage = (updatedProjects: Project[]) => {
    localStorage.setItem("portfolio-projects", JSON.stringify(updatedProjects));
    setHasUnsavedChanges(false);
  };

  const handleSave = () => {
    if (!currentProject) return;
    
    if (!currentProject.title) {
      toast({
        title: "Error",
        description: "Project title is required",
        variant: "destructive",
      });
      return;
    }

    let updatedProjects: Project[];

    if (projects.find(p => p.id === currentProject.id)) {
      updatedProjects = projects.map(p => p.id === currentProject.id ? currentProject : p);
      setProjects(updatedProjects);
      toast({
        title: "Success",
        description: "Project updated successfully",
      });
    } else {
      updatedProjects = [...projects, currentProject];
      setProjects(updatedProjects);
      toast({
        title: "Success",
        description: "Project created successfully",
      });
    }
    
    // Save to localStorage
    saveToLocalStorage(updatedProjects);
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    
    // Save to localStorage
    saveToLocalStorage(updatedProjects);
    
    toast({
      title: "Success",
      description: "Project deleted successfully",
    });
  };

  // Track changes to projects
  useEffect(() => {
    setHasUnsavedChanges(true);
  }, [projects]);

  // Listen for global save event
  useEffect(() => {
    const handleSaveAll = () => {
      if (hasUnsavedChanges) {
        saveToLocalStorage(projects);
        toast({
          title: "Projects Saved",
          description: "Your projects have been updated successfully.",
        });
      }
    };
    
    // Listen for save-all-changes event
    window.addEventListener('save-all-changes', handleSaveAll);
    
    return () => {
      window.removeEventListener('save-all-changes', handleSaveAll);
    };
  }, [projects, hasUnsavedChanges]);

  const addTag = () => {
    if (!tagInput || !currentProject) return;
    setCurrentProject({
      ...currentProject,
      tags: [...currentProject.tags, tagInput]
    });
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    if (!currentProject) return;
    setCurrentProject({
      ...currentProject,
      tags: currentProject.tags.filter(t => t !== tag)
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Manage Projects</h2>
        <Button onClick={handleCreate} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Project
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead className="w-[120px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.title}</TableCell>
              <TableCell className="max-w-xs truncate">{project.description}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(project)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Project Edit Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {currentProject?.id ? `Edit Project: ${currentProject.title}` : "Create New Project"}
            </DialogTitle>
          </DialogHeader>
          
          {currentProject && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="title" className="text-sm font-medium">Title</label>
                <Input 
                  id="title"
                  value={currentProject.title} 
                  onChange={(e) => setCurrentProject({...currentProject, title: e.target.value})}
                  placeholder="Project title"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <Textarea 
                  id="description"
                  value={currentProject.description} 
                  onChange={(e) => setCurrentProject({...currentProject, description: e.target.value})}
                  placeholder="Project description"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="image" className="text-sm font-medium">Image URL</label>
                <Input 
                  id="image"
                  value={currentProject.image} 
                  onChange={(e) => setCurrentProject({...currentProject, image: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
                {currentProject.image && (
                  <div className="mt-2 h-32 w-full overflow-hidden rounded-md">
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className="h-full w-full object-cover" 
                      onError={(e) => (e.target as HTMLImageElement).src = 'placeholder.svg'}
                    />
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm font-medium">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {currentProject.tags.map((tag) => (
                    <div key={tag} className="bg-secondary px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="text-muted-foreground hover:text-foreground">
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input 
                    value={tagInput} 
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Enter a tag"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />
                  <Button type="button" onClick={addTag}>Add</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="liveUrl" className="text-sm font-medium">Live Demo URL</label>
                <Input 
                  id="liveUrl"
                  value={currentProject.liveUrl} 
                  onChange={(e) => setCurrentProject({...currentProject, liveUrl: e.target.value})}
                  placeholder="https://example.com"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="githubUrl" className="text-sm font-medium">GitHub URL</label>
                <Input 
                  id="githubUrl"
                  value={currentProject.githubUrl} 
                  onChange={(e) => setCurrentProject({...currentProject, githubUrl: e.target.value})}
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsManager;
