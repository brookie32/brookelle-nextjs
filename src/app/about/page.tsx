import Image from 'next/image';

export default function About() {
  return (
    <>
      <main>
        <section className="page-section">
          <div className="container">
            <h1 className="page-title">About Brookelle</h1>
            
            <div className="content-wrapper">
              <p className="lead-text">
                Brookelle brings elegant automation and intelligent solutions to forward-thinking businesses.
              </p>
              
              <div className="content-block">
                <h2>Our Vision</h2>
                <p>
                  Scale promising businesses through AI-driven automation and graceful operational excellence.
                </p>
              </div>
              
              <div className="content-block">
                <h2>Our Approach</h2>
                <p>
                  We combine sophisticated technology with a deep understanding of business operations to create 
                  transformative solutions that are both powerful and elegant.
                </p>
              </div>
              
              <div className="content-block">
                <h2>Our Story</h2>
                <p>
                  <strong>Brookelle</strong> = <em>brook</em> (steady flow) + <em>-elle</em> (feminine suffix).
                  Signals graceful growth & a transformation—turning overlooked ventures into polished market leaders.
                </p>
                
                <div className="about-image-wrapper" style={{ margin: '40px 0', textAlign: 'center' }}>
                  <Image
                    src="/assets/ladyplusbutterfly.jpg"
                    alt="Elegant transformation symbolized"
                    width={500}
                    height={300}
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                  />
                </div>
                
                <p>
                  Founded with a vision to make sophisticated automation accessible and elegant,
                  we help businesses evolve with intelligence and grace.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p style={{ margin: 0, padding: '24px 0', textAlign: 'center', color: 'var(--grey)' }}>
            &copy; {new Date().getFullYear()} Brookelle, LTD. | C/O Langtons The Plaza, 100 Old Hall Street, Liverpool, United Kingdom, L3 9QJ | info@brookelle.ai
          </p>
        </div>
      </footer>
    </>
  );
}