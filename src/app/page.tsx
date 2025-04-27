import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section - Exactly matching the original HTML structure */}
      <section className="hero">
        <div className="container hero-wrapper">
          <div className="hero-copy">
            <h1 className="headline">
              Elegant automation,<br />
              exceptional results.
            </h1>
            <p className="subhead">
              Transforming businesses with intelligent elegance.
            </p>
            <Link href="/contact" className="cta-btn">Get Started</Link>
          </div>

          <div className="hero-visual">
            <img src="/assets/brookelle-hero2.png" alt="Brookelle hero" />
          </div>
        </div>
      </section>
    </main>
  );
}
