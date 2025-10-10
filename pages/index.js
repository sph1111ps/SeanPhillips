import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cloud, Code, Database, Zap, ArrowRight, Sparkles } from 'lucide-react';

const stats = [
  { value: '8+', label: 'Years in cloud engineering' },
  { value: '200+', label: 'Automation pipelines delivered' },
  { value: '99.99%', label: 'SLA uptime achieved' },
];

const partners = ['AWS', 'HashiCorp', 'Datadog', 'Docker', 'GitHub'];

const skills = [
  {
    title: 'Cloud Infrastructure',
    description: 'AWS services, EC2, Lambda, S3, RDS, CloudFormation, and scalable architecture design.',
    icon: Cloud,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, Docker, Kubernetes, Terraform, and Infrastructure as Code.',
    icon: Code,
    gradient: 'from-green-500 to-green-600',
  },
  {
    title: 'Data & Storage',
    description: 'PostgreSQL, MongoDB, DynamoDB, Redis, and data architecture best practices.',
    icon: Database,
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Full Stack Delivery',
    description: 'Next.js, React, Node.js, TypeScript, and modern web application development.',
    icon: Zap,
    gradient: 'from-orange-500 to-orange-600',
  },
];

const featuredTech = ['AWS Lambda', 'CloudWatch', 'DynamoDB', 'Serverless'];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-clay-50 via-white to-accent-50/30">
      <div className="pointer-events-none absolute top-[-15%] left-[35%] h-96 w-96 rounded-full bg-accent-500/20 blur-[160px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-[-25%] right-[10%] h-[28rem] w-[28rem] rounded-full bg-clay-500/10 blur-[200px]" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-clay-lg border border-clay-200/60 bg-white/80 shadow-clay-lg px-6 py-16 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-accent-50/40" aria-hidden />
          <div className="pointer-events-none absolute -top-12 right-10 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute bottom-[-18%] left-0 h-60 w-60 rounded-full bg-clay-400/15 blur-3xl" aria-hidden />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent-600">
              <Sparkles className="h-3.5 w-3.5" />
              Available for new projects
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-clay-900">
              <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-accent-700 bg-clip-text text-transparent">Sean Phillips</span>
            </h1>

            <p className="mt-6 text-2xl lg:text-3xl font-semibold text-clay-700">AWS Cloud Engineer</p>

            <p className="mt-6 text-lg sm:text-xl text-clay-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into scalable cloud solutions. Specializing in AWS infrastructure, DevOps automation,
              and modern web applications that drive measurable business growth and reliability.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-clay-lg rounded-clay px-8 py-4"
              >
              <Link href="/projects" className="flex items-center text-white hover:text-white">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-clay-200 text-clay-700 hover:bg-clay-50 rounded-clay px-8 py-4"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-clay border border-clay-200/70 bg-white/80 px-6 py-5 text-center shadow-clay transition hover:-translate-y-1 hover:shadow-clay-lg"
                >
                  <p className="text-3xl font-bold text-clay-900">{stat.value}</p>
                  <p className="mt-2 text-sm text-clay-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.4em] text-clay-400">
              {partners.map((partner) => (
                <span key={partner} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-clay-200" aria-hidden />
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-16 space-y-4">
            <Badge className="mx-auto rounded-full border border-clay-200/60 bg-white/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-clay-500">
              Capabilities
            </Badge>
            <h2 className="text-4xl font-bold text-clay-900">Expertise Areas</h2>
            <p className="mx-auto max-w-2xl text-lg text-clay-600">
              Comprehensive cloud engineering capabilities across the full technology stack.
              Each engagement blends robust architecture with a polished developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.title} className="group relative">
                  <Card className="h-full bg-white/75 backdrop-blur-sm border-clay-200/60 hover:shadow-clay-lg transition-all duration-300 rounded-clay-lg group-hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.gradient} rounded-clay flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-clay-900">{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-clay-600 leading-relaxed">
                        {skill.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16">
          <Card className="overflow-hidden border-clay-200/60 bg-white/85 shadow-clay-lg backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-[1.4fr,1fr] lg:items-stretch">
              <div className="p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-8 rounded-full bg-accent-500" />
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-600">Featured Project</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-clay-900">Serverless Logging System</h3>
                  <p className="text-lg text-clay-600 leading-relaxed">
                    A comprehensive serverless logging solution built with AWS Lambda, CloudWatch, and DynamoDB.
                    Real-time log ingestion, intelligent filtering, and cost-effective storage deliver clarity for
                    distributed systems at scale.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {featuredTech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-accent-100 text-accent-700 border-accent-200 rounded-full px-4 py-2 shadow-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  className="inline-flex w-full sm:w-auto mt-6 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-clay rounded-clay px-6 py-3"
                >
                  <Link href="/projects/serverless-logging" className="flex items-center justify-center gap-2 text-white hover:text-white">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-clay-900/30" aria-hidden />
                <div className="absolute inset-[12%] rounded-3xl border border-white/30 bg-white/15 backdrop-blur-xl shadow-2xl p-8 flex flex-col justify-end text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">Architecture map</p>
                  <p className="mt-4 text-lg font-medium leading-relaxed text-white/90">
                    Lambda ingestion ➔ Kinesis stream ➔ DynamoDB storage ➔ Athena analytics ➔ Grafana dashboards
                  </p>
                </div>
                <div className="absolute top-8 left-8 h-16 w-16 rounded-full bg-white/25 backdrop-blur" aria-hidden />
                <div className="absolute bottom-10 right-12 h-24 w-24 rounded-full bg-accent-400/40 blur-3xl" aria-hidden />
              </div>
            </div>
          </Card>
        </section>

        <section className="py-20">
          <div className="relative overflow-hidden rounded-clay-lg border border-clay-200/40 bg-gradient-to-br from-clay-900 via-clay-800 to-accent-900 text-white shadow-clay-lg">
            <div className="pointer-events-none absolute -top-10 right-20 h-40 w-40 rounded-full bg-accent-500/40 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute bottom-[-25%] left-0 h-72 w-72 rounded-full bg-white/10 blur-[200px]" aria-hidden />

            <div className="relative px-8 py-14 sm:px-12 lg:px-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Build Something Amazing?</h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Let's discuss how I can help transform your ideas into scalable, reliable cloud solutions that
                  drive your business forward. I typically respond within one business day.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="inline-flex items-center gap-2 rounded-clay bg-white text-clay-900 px-8 py-4 font-semibold shadow-[0_18px_45px_-15px_rgba(255,255,255,0.7)] hover:bg-white/90"
                >
                  <a href="mailto:sean@seanphillips.net">
                    Start a Conversation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <p className="text-sm text-white/60">Prefer async updates? Happy to collaborate via Notion, Linear, or Jira.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}