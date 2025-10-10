import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Calendar, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    'AWS (EC2, Lambda, S3, RDS, CloudWatch)',
    'Terraform & Infrastructure as Code',
    'Docker & Kubernetes',
    'Next.js & React',
    'PostgreSQL & MongoDB',
    'CI/CD Pipelines',
    'TypeScript & JavaScript',
    'Python & Node.js'
  ];

  const experience = [
    {
      title: 'AWS Cloud Engineer',
      company: 'Current Role',
      period: '2023 - Present',
      description: 'Designing and implementing scalable cloud infrastructure solutions, optimizing costs, and ensuring high availability.'
    },
    {
      title: 'DevOps Engineer',
      company: 'Previous Role',
      period: '2021 - 2023',
      description: 'Automated deployment pipelines, managed containerized applications, and improved system reliability.'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-clay-50 via-white to-accent-50/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-8">
            <Sparkles className="h-4 w-4 text-accent-600 mr-2" />
            <span className="text-sm font-medium text-accent-700">About Sean Phillips</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-accent-700 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          
          <p className="text-xl text-clay-600 max-w-3xl mx-auto leading-relaxed">
            Passionate cloud engineer with a focus on building scalable, reliable, and cost-effective solutions 
            that transform businesses and drive innovation.
          </p>
        </div>

        {/* Bio Section */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-clay-200/50 shadow-clay-lg rounded-clay-lg">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></div>
              <CardTitle className="text-3xl text-clay-900">Professional Background</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-clay-600 leading-relaxed">
              I'm an AWS Cloud Engineer with extensive experience in designing and implementing 
              scalable cloud infrastructure solutions. My passion lies in leveraging modern 
              technologies to solve complex problems and deliver robust, maintainable systems.
            </p>
            <p className="text-lg text-clay-600 leading-relaxed">
              With a strong foundation in DevOps practices, I specialize in infrastructure 
              automation, containerization, and building efficient CI/CD pipelines. I'm 
              committed to continuous learning and staying current with the latest cloud 
              technologies and best practices.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-clay-200/50 shadow-clay-lg rounded-clay-lg">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
              <CardTitle className="text-3xl text-clay-900">Technical Skills</CardTitle>
            </div>
            <CardDescription className="text-lg text-clay-600">
              Technologies and tools I work with regularly to deliver exceptional results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <Badge 
                    variant="secondary" 
                    className="w-full justify-start p-4 text-sm bg-clay-50 hover:bg-accent-50 border-clay-200 hover:border-accent-200 text-clay-700 hover:text-accent-700 transition-all duration-200 rounded-clay"
                  >
                    {skill}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-clay-200/50 shadow-clay-lg rounded-clay-lg">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
              <CardTitle className="text-3xl text-clay-900">Experience</CardTitle>
            </div>
            <CardDescription className="text-lg text-clay-600">
              My professional journey in cloud engineering and DevOps
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-clay flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-clay-900">{job.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-clay-500 mb-3">
                    <span className="font-medium">{job.company}</span>
                    <span>•</span>
                    <span>{job.period}</span>
                  </div>
                  <p className="text-clay-600 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gradient-to-br from-white to-accent-50/50 border-clay-200/50 shadow-clay-lg rounded-clay-lg overflow-hidden">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
              <CardTitle className="text-3xl text-clay-900">Get In Touch</CardTitle>
            </div>
            <CardDescription className="text-lg text-clay-600">
              Let's discuss your next project or collaboration opportunity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-clay flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-clay-900">Email</p>
                    <a 
                      href="mailto:sean@seanphillips.net" 
                      className="text-clay-600 hover:text-accent-600 transition-colors"
                    >
                      sean@seanphillips.net
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-clay flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-clay-900">Location</p>
                    <p className="text-clay-600">Remote / Available Worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-clay flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-clay-900">Availability</p>
                    <p className="text-clay-600">Open to new opportunities</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-clay-900 mb-4">Ready to work together?</h3>
                  <p className="text-clay-600 mb-6">
                    Let's discuss how I can help bring your cloud infrastructure vision to life.
                  </p>
                  <Button size="lg" asChild className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-clay-lg rounded-clay px-8 py-4">
                    <a href="mailto:sean@seanphillips.net" className="flex items-center">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}