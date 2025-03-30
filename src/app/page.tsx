'use client';

import React, { useState } from 'react';
import { 
  CodeBracketIcon, 
  BriefcaseIcon, 
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  FolderIcon,
  ArrowUpIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  details: {
    purpose: string;
    value: string;
    features: string[];
    challenges: string[];
    solutions: string[];
  };
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/yourusername/ecommerce-platform',
      details: {
        purpose: 'Create a scalable e-commerce solution for small to medium businesses',
        value: 'Increased sales by 40% for clients through improved user experience and streamlined checkout process',
        features: [
          'Real-time inventory management',
          'Secure payment processing',
          'Admin dashboard',
          'Customer analytics'
        ],
        challenges: [
          'Handling high concurrent user traffic',
          'Implementing secure payment processing',
          'Managing complex product variations'
        ],
        solutions: [
          'Implemented caching and load balancing',
          'Integrated Stripe with PCI compliance',
          'Created a flexible product schema'
        ]
      }
    },
    {
      title: 'Task Management App',
      description: 'Developed a collaborative task management application with real-time updates',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      link: 'https://github.com/yourusername/task-manager',
      details: {
        purpose: 'Build a modern task management tool for remote teams',
        value: 'Improved team productivity by 25% through better task organization and real-time collaboration',
        features: [
          'Real-time task updates',
          'Team collaboration tools',
          'Project timeline visualization',
          'Task prioritization'
        ],
        challenges: [
          'Real-time synchronization across devices',
          'Managing complex user permissions',
          'Optimizing performance with large datasets'
        ],
        solutions: [
          'Implemented WebSocket connections',
          'Created a role-based access control system',
          'Optimized database queries and caching'
        ]
      }
    },
    {
      title: 'Portfolio Website',
      description: 'Created a responsive portfolio website using modern web technologies',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://github.com/yourusername/portfolio',
      details: {
        purpose: 'Showcase professional work and skills in an engaging way',
        value: 'Increased client inquiries by 60% through improved online presence',
        features: [
          'Responsive design',
          'Interactive animations',
          'Project showcase',
          'Contact form'
        ],
        challenges: [
          'Creating smooth animations',
          'Optimizing for different devices',
          'Maintaining fast load times'
        ],
        solutions: [
          'Used Framer Motion for optimized animations',
          'Implemented responsive design patterns',
          'Optimized images and assets'
        ]
      }
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BackToTopButton = () => (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Purpose</h3>
              <p className="text-gray-600">{project.details.purpose}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Value</h3>
              <p className="text-gray-600">{project.details.value}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Challenges & Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Challenges</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Solutions</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.details.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Project
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            John Doe
          </h1>
          <p className="text-xl mb-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('skills')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Certifications
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <CodeBracketIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Frontend Development', 'Backend Development', 'Database Management'].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-3">{skill}</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• React & Next.js</li>
                  <li>• Node.js & Express</li>
                  <li>• MongoDB & PostgreSQL</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <FolderIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BriefcaseIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'Senior Developer',
                company: 'Tech Corp',
                period: '2020 - Present',
                description: 'Led development of enterprise applications'
              },
              {
                title: 'Full Stack Developer',
                company: 'StartUp Inc',
                period: '2018 - 2020',
                description: 'Developed and maintained web applications'
              }
            ].map((role) => (
              <div
                key={role.title}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <p className="text-gray-600">{role.company}</p>
                <p className="text-sm text-gray-500 mb-2">{role.period}</p>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <AcademicCapIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          
          {/* Current Certifications */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Current</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'AWS Certified Solutions Architect',
                  issuer: 'Amazon Web Services',
                  date: '2023'
                }
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Previous</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Professional Full Stack Developer',
                  issuer: 'Meta',
                  date: '2022'
                },
                {
                  title: 'MongoDB Certified Developer',
                  issuer: 'MongoDB',
                  date: '2021'
                }
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />
      )}
    </main>
  );
} 