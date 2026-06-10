import './App.css'

const resources = [
  {
    title: 'Beginner Bootcamp',
    date: 'July 12, 2026',
    location: 'Community Coding Lab',
    description: 'A friendly workshop for new developers to learn HTML, CSS, and JSX.',
    link: 'https://example.com/bootcamp',
    buttonText: 'Register',
  },
  {
    title: 'Open Source Meetup',
    date: 'July 18, 2026',
    location: 'Virtual event',
    description: 'Connect with local contributors and discover open source projects.',
    link: 'https://example.com/opensource',
    buttonText: 'Join',
  },
  {
    title: 'Resume Review Night',
    date: 'July 22, 2026',
    location: 'Downtown Library',
    description: 'Get one-on-one feedback on your tech resume and portfolio.',
    link: 'https://example.com/resume',
    buttonText: 'Learn more',
  },
  {
    title: 'Women in Tech Panel',
    date: 'Aug 3, 2026',
    location: 'Civic Center',
    description: 'Hear success stories from engineers, designers, and product managers.',
    link: 'https://example.com/panel',
    buttonText: 'Reserve spot',
  },
  {
    title: 'Hackathon Prep',
    date: 'Aug 9, 2026',
    location: 'Innovation Hub',
    description: 'Build your team and prepare project ideas for the fall hackathon.',
    link: 'https://example.com/hackathon',
    buttonText: 'Prepare',
  },
  {
    title: 'JavaScript Office Hours',
    date: 'Aug 14, 2026',
    location: 'Tech Co-op',
    description: 'Bring your JS questions and get live help from mentors.',
    link: 'https://example.com/js-office',
    buttonText: 'Sign up',
  },
  {
    title: 'UI Design Lab',
    date: 'Aug 20, 2026',
    location: 'Art + Code Studio',
    description: 'Practice creating accessible interfaces with real design exercises.',
    link: 'https://example.com/ui-lab',
    buttonText: 'Explore',
  },
  {
    title: 'Career Connections',
    date: 'Aug 27, 2026',
    location: 'City Hall',
    description: 'Meet hiring managers from local startups and ask about internships.',
    link: 'https://example.com/career',
    buttonText: 'View details',
  },
  {
    title: 'Tech Reading Group',
    date: 'Sept 2, 2026',
    location: 'Cafe Commons',
    description: 'Discuss one chapter of a software engineering book each week.',
    link: 'https://example.com/reading',
    buttonText: 'Join group',
  },
  {
    title: 'Portfolio Share Night',
    date: 'Sept 10, 2026',
    location: 'Studio 9',
    description: 'Showcase your projects and get friendly feedback from peers.',
    link: 'https://example.com/portfolio',
    buttonText: 'Share now',
  },
]

function ResourceCard({ title, date, location, description, link, buttonText }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="chip">Community</span>
        <span className="date">{date}</span>
      </div>
      <h3>{title}</h3>
      <p className="location">{location}</p>
      <p>{description}</p>
      <a className="card-button" href={link} target="_blank" rel="noreferrer">
        {buttonText}
      </a>
    </article>
  )
}

function App() {
  return (
    <main className="page-shell">
      <header className="hero-section">
        <div>
          <p className="eyebrow">Community Resource Board</p>
          <h1>Engineering Events & Resources</h1>
          <p className="hero-copy">
            Explore upcoming workshops, meetups, and learning opportunities for
            software builders in our neighborhood.
          </p>
        </div>
      </header>

      <section className="board">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </section>
    </main>
  )
}

export default App
