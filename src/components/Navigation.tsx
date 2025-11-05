import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/pricing", label: "Pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Logo removed as requested; show name only */}
            <span className="text-xl font-bold bg-gradient-glow bg-clip-text text-transparent">
              Kalipr Labs
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <span className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                    {item.label}
                  </span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <MobileMenu navItems={navItems} locationPath={location.pathname} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const MobileMenu = ({ navItems, locationPath }: { navItems: { path: string; label: string }[]; locationPath: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((s) => !s)}
        className="p-2 glass rounded-md"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-background/80 backdrop-blur-md glass rounded-md shadow-lg py-2 z-50">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-sm ${locationPath === item.path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
