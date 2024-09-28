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
                Our Todo List application features <strong>JWT authentication</strong>for secure user sessions and sends
                <strong>email reminders</strong> via Nodemailer to keep tasks on track. All tasks and user information
                are securely stored in a <strong>scalable cloud-based MongoDB database</strong>, providing flexibility
                and reliability for managing data.
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project 2</h3>
              <p className="text-sm text-muted-foreground">Password Manager(Kavach)</p>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground">
                Our Password Manager uses <strong>AES encryption</strong> to securely store passwords, requiring a key
                for decryption. Passwords are visible for <strong>30 seconds</strong> before hiding. <strong>Users can
                  also upload profile photos, stored securely in Cloudinary</strong>. Token-based authentication ensures
                only authorized access to accounts.
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project 3</h3>
              <p className="text-sm text-muted-foreground">
                College ERP (Freelance Client Project)
              </p>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground">
                In my freelance College ERP project, I’m developing the backend with features like email OTP
                verification and password management. Built using <strong>Node.js, Express, MongoDB, Mongoose, and
                  Mailtrap</strong>, this setup ensures secure user authentication and efficient management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects