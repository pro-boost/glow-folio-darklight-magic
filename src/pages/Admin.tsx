import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectsManager from "@/components/admin/ProjectsManager";
import SkillsManager from "@/components/admin/SkillsManager";
import ThemeManager from "@/components/theme/ThemeManager";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/layout/Header";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSaveAllChanges = () => {
    // Dispatch a custom event that all managers will listen for
    window.dispatchEvent(new Event("save-all-changes"));

    // Show toast notification
    toast({
      title: "Changes Saved",
      description: "All changes have been applied to the main site.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-6 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-2">
              <Button
                onClick={handleSaveAllChanges}
                variant="default"
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save All Changes
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Site
              </Button>
            </div>
          </div>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="theme">Theme</TabsTrigger>
            </TabsList>

            <TabsContent
              value="projects"
              className="bg-card p-6 rounded-lg border shadow-sm"
            >
              <ProjectsManager />
            </TabsContent>

            <TabsContent
              value="skills"
              className="bg-card p-6 rounded-lg border shadow-sm"
            >
              <SkillsManager />
            </TabsContent>

            <TabsContent
              value="theme"
              className="bg-card p-6 rounded-lg border shadow-sm"
            >
              <ThemeManager />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
