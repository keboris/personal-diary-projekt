import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
      <section className="bg-base-100 shadow-md rounded-xl p-10 text-center space-y-6">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 rounded-full p-6 shadow-md">
            <span className="text-5xl text-primary">✨</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-primary">About the project</h2>

        <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
          <strong>My Personal Diary</strong> s an app designed to offer you a
          private, simple, and modern space to write, reflect, and keep track of
          your journey.
        </p>

        <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
          This project was developed by <strong>Boris Ket</strong>
          <br />. The goal: to allow everyone to capture their thoughts,
          emotions, and memories in a calming and elegant environment.
        </p>

        <div className="divider"></div>

        <h3 className="text-2xl font-semibold">🛠️ Technologies utilisées</h3>
        <ul className="list-none space-y-2 text-base-content/80">
          <li>
            ⚛️ <strong>React</strong> — for a fluid and modern interface
          </li>
          <li>
            🎨 <strong>DaisyUI + TailwindCSS</strong> — for style and visual
            consistency
          </li>
          <li>
            💾 <strong>LocalStorage</strong> — to save entries locally
          </li>
        </ul>

        <div className="divider"></div>

        <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
          This journal is more than an app: it's a personal companion, a digital
          confidant, and a tool to help you get to know yourself better day
          after day.
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <Link to="/" className="btn btn-outline btn-secondary">
            ← Back to Home
          </Link>
          <Link to="/entries" className="btn btn-primary">
            See my Entries
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
