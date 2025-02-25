export default function Projects () {
    return (
        <div className="content"> 
            <div className="container">
                <h3>Projects</h3>
                <p>See some of my study projects - github/hbtlucas</p>
                <div className="box-container">
                    <div className="box">
                        <h3>FilmFinder</h3>
                        <p>This project was initially created as a movie search tool. It works as follows: by clicking the button, it consumes the OMDB 
                            API and imports multiple movies directly into the database. There are options to filter movies by letter and other classifications.
                        The technologies used to build this application were Next.js for the front end, Prisma 
                        ORM for data management, PostgreSQL for the database, 
                        and the OMDB API to retrieve information.</p>
                        <p>Oct 2, 2024</p>
                    </div>
                </div>

                <div className="box-container">
                    <div className="box">
                        <h3><a>CustomTrack</a></h3>
                        <p>The application aims to serve as a Control and Production Manager. It can be adapted for any company that needs a management system.</p>
                        <p>Oct 24, 2023</p>
                    </div>
                </div>

                <div className="box-container">
                    <div className="box">
                        <h3><a>scanportdnsservices-and-domains</a></h3>
                        <p>Cybersecurity Tools: Explore network security, including port scanning and subdomain recognition.</p>
                        <p>Jun 24, 2024</p>
                    </div>
                </div>

            </div>
        </div>     

    )
}