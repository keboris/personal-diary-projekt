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

        <h2 className="text-4xl font-bold text-primary">À propos du projet</h2>

        <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
          <strong>Mon Journal Personnel</strong> est une application conçue pour
          t’offrir un espace intime, simple et moderne pour écrire, réfléchir et
          garder une trace de ton parcours.
        </p>

        <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
          Ce projet a été imaginé par <strong>Boris Ket</strong> — développeur,
          créatif et passionné par la technologie et la musique 🎶. L’objectif :
          permettre à chacun de capturer ses pensées, émotions et souvenirs dans
          un environnement apaisant et élégant.
        </p>

        <div className="divider"></div>

        <h3 className="text-2xl font-semibold">🛠️ Technologies utilisées</h3>
        <ul className="list-none space-y-2 text-base-content/80">
          <li>
            ⚛️ <strong>React</strong> — pour une interface fluide et moderne
          </li>
          <li>
            🎨 <strong>DaisyUI + TailwindCSS</strong> — pour le style et la
            cohérence visuelle
          </li>
          <li>
            💾 <strong>LocalStorage</strong> — pour sauvegarder les entrées
            localement
          </li>
        </ul>

        <div className="divider"></div>

        <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
          Ce journal est plus qu’une application : c’est un compagnon personnel,
          un confident numérique, et un outil pour mieux te connaître jour après
          jour.
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <Link to="/" className="btn btn-outline btn-secondary">
            ← Retour à l’accueil
          </Link>
          <Link to="/entries" className="btn btn-primary">
            Voir mes entrées
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
