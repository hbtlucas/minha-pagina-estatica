export default function Home() {
    return (
      <div className="content">
        <div className="container">
          <div className="perfil">
            <h3>Lucas, H.</h3>
            <div className="icon">
            <img
                src="/perfil.jpg"
                alt="Foto de perfil"
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />
          </div>
          </div>
          <p>Welcome to my page!! My name is Herbert Lucas.</p>
          <p> I created this space as a portfolio, but also as something beyond that.
          I'm on a journey of self-discovery, striving to grow both professionally and personally. </p>
          <p>Here, I intend to share research projects, academic activities, experiences, and personal interests.</p>
          <p>Feel free to reach out, exchange ideas, or simply explore.</p>
  
          <div className="social-links">
            <a href="https://github.com/hbtlucas" target="_blank" rel="noopener noreferrer">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77a5.07 5.07 0 0 0-.09-3.77S17.73.92 15 2.5a13.38 13.38 0 0 0-6 0C6.27.92 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.79c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 17.13V21"/>
              </svg>
            </a>
            
            <a href="https://instagram.com/herbertlucaskt" target="_blank" rel="noopener noreferrer">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"/>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
              </svg>
            </a>
            
            <a href="https://linkedin.com/in/herbert-lucas85" target="_blank" rel="noopener noreferrer">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6H10v-6a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

        </div>
        
      </div>
    );
  }
  