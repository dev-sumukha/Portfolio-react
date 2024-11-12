import React from 'react';

function About() {
  return (
    <>
      <section id="about" className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-in">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              I am a recent graduate with a degree in Computer Science. During my studies, I developed a strong passion for{' '}
              <strong>web development</strong> and <strong>machine learning</strong>, and I have been honing my skills in various technologies and frameworks.
            </p>
            <p className="mt-4 text-muted-foreground">
              I am a quick learner, a problem-solver, and a team player. I am excited to apply my knowledge and skills to real-world projects and contribute to the growth and success of the companies I work with.
            </p>
            <div className="mt-6">
              <a
                className="bg-black text-white items-center justify-center rounded-md bg-primary px-4 py-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                href="/Sumukha Sureban.pdf"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium">Master Of Computer Application</h3>
                <p className="text-muted-foreground">PES University, 2023 - 2025</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Bachelor Of Computer Application</h3>
                <p className="text-muted-foreground">KLE JT BCA, 2020 - 2023</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Pre University Course</h3>
                <p className="text-muted-foreground">Sanmarg PU College, 2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
