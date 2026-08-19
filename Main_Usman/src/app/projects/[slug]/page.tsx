import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/lib/projects';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {project.frontmatter.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {project.frontmatter.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {project.frontmatter.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {project.frontmatter.category}
            </span>
          </div>
        </header>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.frontmatter.technologies.map((tech: string) => (
            <span
              key={tech}
              className="rounded-full bg-muted px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {project.content}
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}
