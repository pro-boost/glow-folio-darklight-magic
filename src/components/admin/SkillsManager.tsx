import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample skill categories
const categories = ["Frontend", "Backend", "Design", "DevOps", "Mobile", "Other"];

// Sample initial skills
const defaultSkills = [
  { id: "1", name: "React", category: "Frontend", level: 90 },
  { id: "2", name: "Node.js", category: "Backend", level: 85 },
  { id: "3", name: "TypeScript", category: "Frontend", level: 80 },
  { id: "4", name: "MongoDB", category: "Backend", level: 75 },
  { id: "5", name: "TailwindCSS", category: "Frontend", level: 95 },
  { id: "6", name: "Docker", category: "DevOps", level: 70 },
];

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const SkillsManager = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load skills from localStorage if available
    const savedSkills = localStorage.getItem("portfolio-skills");
    if (savedSkills) {
      try {
        setSkills(JSON.parse(savedSkills));
      } catch (error) {
        console.error("Error loading skills from localStorage:", error);
        setSkills(defaultSkills);
      }
    } else {
      setSkills(defaultSkills);
    }
  }, []);

  const emptySkill: Skill = {
    id: "",
    name: "",
    category: categories[0],
    level: 50
  };

  const saveToLocalStorage = (updatedSkills: Skill[]) => {
    localStorage.setItem("portfolio-skills", JSON.stringify(updatedSkills));
  };

  const handleEdit = (skill: Skill) => {
    setCurrentSkill({...skill});
    setIsOpen(true);
  };

  const handleCreate = () => {
    setCurrentSkill({...emptySkill, id: Date.now().toString()});
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!currentSkill) return;
    
    if (!currentSkill.name) {
      toast({
        title: "Error",
        description: "Skill name is required",
        variant: "destructive",
      });
      return;
    }

    let updatedSkills: Skill[];

    if (skills.find(s => s.id === currentSkill.id)) {
      updatedSkills = skills.map(s => s.id === currentSkill.id ? currentSkill : s);
      setSkills(updatedSkills);
      toast({
        title: "Success",
        description: "Skill updated successfully",
      });
    } else {
      updatedSkills = [...skills, currentSkill];
      setSkills(updatedSkills);
      toast({
        title: "Success",
        description: "Skill created successfully",
      });
    }
    
    // Save to localStorage
    saveToLocalStorage(updatedSkills);
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    const updatedSkills = skills.filter(s => s.id !== id);
    setSkills(updatedSkills);
    
    // Save to localStorage
    saveToLocalStorage(updatedSkills);
    
    toast({
      title: "Success",
      description: "Skill deleted successfully",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Manage Skills</h2>
        <Button onClick={handleCreate} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Skill
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Proficiency</TableHead>
            <TableHead className="w-[120px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skills.map((skill) => (
            <TableRow key={skill.id}>
              <TableCell className="font-medium">{skill.name}</TableCell>
              <TableCell>{skill.category}</TableCell>
              <TableCell>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(skill)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(skill.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Skill Edit Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentSkill?.id ? `Edit Skill: ${currentSkill.name}` : "Create New Skill"}
            </DialogTitle>
          </DialogHeader>
          
          {currentSkill && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input 
                  id="name"
                  value={currentSkill.name} 
                  onChange={(e) => setCurrentSkill({...currentSkill, name: e.target.value})}
                  placeholder="Skill name"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <Select 
                  value={currentSkill.category} 
                  onValueChange={(value) => setCurrentSkill({...currentSkill, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between">
                  <label htmlFor="level" className="text-sm font-medium">Proficiency Level</label>
                  <span className="text-sm text-muted-foreground">{currentSkill.level}%</span>
                </div>
                <Input 
                  id="level"
                  type="range" 
                  min="0" 
                  max="100" 
                  value={currentSkill.level} 
                  onChange={(e) => setCurrentSkill({...currentSkill, level: parseInt(e.target.value)})}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
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

export default SkillsManager;
