import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FolderOpen, ExternalLink, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((data) => {
        const normalized = Array.isArray(data)
          ? data
          : Array.isArray(data?.projects)
            ? data.projects
            : [];
        setProjects(normalized);
        setLoading(false);
      })
      .catch(() => {
        setProjects([]);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-clay-50 via-white to-accent-50/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-8">
            <Sparkles className="h-4 w-4 text-accent-600 mr-2" />
            <span className="text-sm font-medium text-accent-700">Portfolio Projects</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-accent-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <p className="text-xl text-clay-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing cloud engineering solutions, 
            DevOps practices, and innovative full-stack development projects.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent-200 border-t-accent-600 mx-auto mb-6"></div>
            <p className="text-clay-600 text-lg">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <Card className="bg-white/70 backdrop-blur-sm border-clay-200/50 shadow-clay-lg rounded-clay-lg">
            <CardContent className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-clay-100 to-clay-200 rounded-clay-lg flex items-center justify-center">
                <FolderOpen className="h-10 w-10 text-clay-500" />
              </div>
              <h3 className="text-2xl font-bold text-clay-900 mb-4">No projects yet</h3>
              <p className="text-clay-600 text-lg max-w-md mx-auto">
                Check back soon for project showcases and detailed case studies.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group bg-white/70 backdrop-blur-sm border-clay-200/50 hover:shadow-clay-lg transition-all duration-300 rounded-clay-lg hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></div>
                      <CardTitle className="text-2xl text-clay-900 group-hover:text-accent-700 transition-colors">
                        {project.title}
                      </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-clay-600 leading-relaxed">
                        {project.summary}
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      asChild 
                      className="border-accent-200 text-accent-700 hover:bg-accent-50 hover:border-accent-300 rounded-clay px-6 py-3"
                    >
                      <Link href={`/projects/${project.slug}`} className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-clay-500">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm font-medium">
                        {new Date(project.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Badge className="bg-accent-100 text-accent-700 border-accent-200 rounded-full px-4 py-2">
                        AWS
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200 rounded-full px-4 py-2">
                        Cloud
                      </Badge>
                      <Badge className="bg-green-100 text-green-700 border-green-200 rounded-full px-4 py-2">
                        DevOps
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-white to-accent-50/50 border-clay-200/50 shadow-clay-lg rounded-clay-lg">
            <CardContent className="py-16">
              <h2 className="text-3xl font-bold text-clay-900 mb-6">Have a Project in Mind?</h2>
              <p className="text-lg text-clay-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your cloud infrastructure vision to life 
                with scalable, reliable, and cost-effective solutions.
              </p>
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-clay-lg rounded-clay px-8 py-4"
              >
                <a href="mailto:sean@seanphillips.net" className="flex items-center">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}