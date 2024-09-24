import React from 'react'

function Projects() {
  return (
    <>
        <section id="projects" className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project 1</h3>
                  <p className="text-sm text-muted-foreground">A web application for managing tasks and to-do lists.</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Developed a full-stack web application using React, Node.js, and MongoDB. Implemented features such as
                    user authentication, task management, and real-time updates.
                  </p>
                </div>
                <div className="flex items-center p-6">
                  <a
                    className="bg-black text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                    href="#"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project 2</h3>
                  <p className="text-sm text-muted-foreground">A responsive e-commerce website for a local clothing brand.</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Designed and developed a mobile-friendly e-commerce website using , Tailwind CSS
                    for payment processing. Implemented features such as product browsing, shopping cart, and order
                    management.
                  </p>
                </div>
                <div className="flex items-center p-6">
                  <a
                    className="bg-black text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                    href="#"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project 3</h3>
                  <p className="text-sm text-muted-foreground">
                    A data visualization dashboard for a non-profit organization.
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Developed a data visualization dashboard using React, D3.js, and Recharts. Implemented features such
                    as interactive charts, data filtering, and real-time updates.
                  </p>
                </div>
                <div className="flex items-center p-6">
                  <a
                    className="bg-black text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                    href="#"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Projects