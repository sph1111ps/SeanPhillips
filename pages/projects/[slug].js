import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, ExternalLink, Code, Database, Cloud, Sparkles } from 'lucide-react';

export default function ProjectPage() {
  const { query } = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query.slug) return;
    
    setLoading(true);
    fetch(`/api/projects/${query.slug}`)
      .then((r) => r.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query.slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-clay-50 via-white to-accent-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent-200 border-t-accent-600 mx-auto mb-6"></div>
            <p className="text-clay-600 text-lg">Loading project...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-clay-50 via-white to-accent-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <Card className="bg-white/70 backdrop-blur-sm border-clay-200/50 shadow-clay-lg rounded-clay-lg">
            <CardContent className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-clay-100 to-clay-200 rounded-clay-lg flex items-center justify-center">
                <Cloud className="h-10 w-10 text-clay-500" />
              </div>
              <h1 className="text-3xl font-bold text-clay-900 mb-4">Project Not Found</h1>
              <p className="text-clay-600 text-lg mb-8">
                The project you're looking for doesn't exist or has been moved.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-clay-lg rounded-clay px-8 py-4">
                <Link href="/projects" className="flex items-center">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-clay-50 via-white to-accent-50/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Button 
          variant="outline" 
          asChild 
          className="mb-8 border-clay-300 text-clay-700 hover:bg-clay-50 rounded-clay px-6 py-3"
        >
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-6">
            <Sparkles className="h-4 w-4 text-accent-600 mr-2" />
            <span className="text-sm font-medium text-accent-700">Project Showcase</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clay-gradient bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          
          <p className="text-xl text-clay-600 mb-8 leading-relaxed max-w-3xl">
            {project.summary}
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-clay-500">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">
                {new Date(project.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex gap-3">
              <Badge className="bg-accent-100 text-accent-700 border-accent-200 rounded-full px-4 py-2">
                <Cloud className="h-3 w-3 mr-1" />
                AWS
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 rounded-full px-4 py-2">
                <Code className="h-3 w-3 mr-1" />
                Cloud Engineering
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-green-200 rounded-full px-4 py-2">
                <Database className="h-3 w-3 mr-1" />
                DevOps
              </Badge>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-clay-200/50 shadow-clay-lg rounded-clay-lg">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></div>
              <CardTitle className="text-3xl text-clay-900">Project Details</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {project.content ? (
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              ) : (
                <div className="space-y-8">
                  <p className="text-lg text-clay-600 leading-relaxed">
                    This project showcases modern cloud engineering practices and demonstrates 
                    expertise in scalable infrastructure design. Built with industry best practices 
                    and cutting-edge technologies to deliver robust, reliable solutions.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50 rounded-clay">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-clay flex items-center justify-center">
                            <Cloud className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-xl text-clay-900">Infrastructure</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-clay-600">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            AWS EC2 instances
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Application Load Balancers
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Auto Scaling Groups
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            VPC configuration & security
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50 rounded-clay">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-clay flex items-center justify-center">
                            <Database className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-xl text-clay-900">Technologies</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-clay-600">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Terraform for Infrastructure as Code
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Docker containers
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            CI/CD pipelines
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Monitoring & logging
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-br from-white to-accent-50/50 border-clay-200/50 shadow-clay-lg rounded-clay-lg">
          <CardContent className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-clay-900 mb-6">Interested in this project?</h2>
              <p className="text-lg text-clay-600 mb-8 leading-relaxed">
                Let's discuss how similar solutions can benefit your organization. 
                I'm always excited to work on new challenges and help bring innovative 
                ideas to life through cloud engineering.
              </p>
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-clay-lg rounded-clay px-8 py-4"
              >
                <a href="mailto:sean@seanphillips.net" className="flex items-center">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}