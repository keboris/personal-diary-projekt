import { Link, NavLink } from "react-router";

const Topbar = () => {
  return (
    <>
      <header className="bg-base-100 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="text-3xl">📖</span>
            </div>
            <h1 className="text-2xl font-bold">
              My <span className="text-primary">Personal</span> Diary
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/entries"
              className="hover:text-primary transition-colors"
            >
              My Entries
            </NavLink>
            <NavLink to="/new" className="hover:text-primary transition-colors">
              New Entry
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </NavLink>
          </nav>

          <button className="md:hidden btn btn-ghost btn-sm">
            <span className="text-xl">☰</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Topbar;
