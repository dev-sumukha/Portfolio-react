import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-muted py-6 animate-fade-in">
                <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Sumukha Sureban.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer