const Projects = () => {

    const projects = [
        {
            name: 'Password Generator',
            description: 'Built with vanilla Javascript, HTML, and CSS.',
            repo: 'https://github.com/An-Be/password-generator',
            deployed: true,
            live: 'https://password-generator-an-be.vercel.app/'

        },
        {
            name: 'Top Anime Archive',
            description: 'A very scaled down version of My Anime list. Built using React, Firebase, and Jikan API',
            repo: 'https://github.com/An-Be/top-anime-archive',
            deployed: false,
            live: ''

        },
        {
            name: 'Blog API',
            description: 'Backend for a Blog. Built using Express and Sequelize',
            repo: 'https://github.com/An-Be/BLOG_API',
            deployed: false,
            live: ''

        },
        {
            name: 'Non traditionals Blog',
            description: 'A blog built with built with ASP.Net Core. Using MVC model and Entity Framework.',
            repo: 'https://github.com/An-Be/NonTraditionalsBlog',
            deployed: false,
            live: ''

        },
        {
            name: 'Moviefy',
            description: 'ASP.NET Core MVC App that uses CRUD operations and policy-based authentication.',
            repo: 'https://github.com/An-Be/Moviefy',
            deployed: false,
            live: ''

        },
        {
            name: 'Random Number Generator',
            description: 'A number generator built with Vanilla JS, HTML, and CSS',
            repo: 'https://github.com/An-Be/random-number-generator',
            deployed: true,
            live: 'https://random-number-generator-kohl.vercel.app/'

        },
        {
            name: 'Chattr',
            description: 'This is a work in progress, it is a full-stack chat app application using React, TailwindCSS, Daisy UI, Express, Socket.io, and Postgresql. I am working on it with Dakotah DuCharme who is in charge of the backend.',
            repo: 'https://github.com/Multiverse-Workshop/Chattr',
            deployed: false,
            live: ''

        },
    ]

    return (
        <section className="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => 
                <div key={index}>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <a href={project.repo}>REPO</a>
                    {project.live? <a href={project.deployed}></a> : <div></div>}
                </div>
            )}
        </section>
    )
}
export default Projects;