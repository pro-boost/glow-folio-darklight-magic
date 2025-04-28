
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectsManager from "@/components/admin/ProjectsManager";
import SkillsManager from "@/components/admin/SkillsManager";
import ThemeManager from "@/components/admin/ThemeManager";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={() => navigate("/")} variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Site
          </Button>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="bg-card p-6 rounded-lg border shadow-sm">
            <ProjectsManager />
          </TabsContent>
          
          <TabsContent value="skills" className="bg-card p-6 rounded-lg border shadow-sm">
            <SkillsManager />
          </TabsContent>
          
          <TabsContent value="theme" className="bg-card p-6 rounded-lg border shadow-sm">
            <ThemeManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
