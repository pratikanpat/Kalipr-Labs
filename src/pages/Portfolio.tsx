import { motion } from "framer-motion";
import { ExternalLink, Calendar, DollarSign, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Blessin Finance Tracker",
    category: "Dashboard Solution",
    description: "We built a comprehensive dashboard solution for managing essential business operations, including: Financial Tracking: Monitoring sales, expenses, and overall profit. Logistics Management: Centralized tracking of inventory, vendors, and outstanding payments. Network Oversight: Tools for managing reseller performance and the distribution network. Social Impact Focus: The system provides the operational stability required to scale the distribution of women's healthcare essentials and supports economic activity through its managed reseller network.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "BAAS", "FinanceManagement", "WebApp", "InventoryManagement"],
    date: "September 10, 2025",
    budget: "₹1,50,000",
    timeline: "12 weeks",
    link: "https://blessinhygiene.com/login"
  },
  {
    title: "Ajinkya Deshmukh - Portfolio Website",
    category: "Portfolio Website",
    description: "Built a Portfolio Website Using Interactive 3D Components and Animations",
    // local image base name (public/images/ajinkya-portfolio.png + generated webp variants)
  image: "/images/ajinkya.png",
  imageBase: "ajinkya",
    tags: ["React", "3D", "Spline", "Animations"],
    date: "June 15, 2024",
    budget: "₹25,000",
    timeline: "4 weeks",
    link: "https://portfolio-chi-two-55.vercel.app/#contact"
  },
  {
    title: "My Campus Mate - Educational Web App",
    category: "Educational Platform",
    description: "Ongoing project - A comprehensive campus management and student networking platform",
    // local image base name (public/images/mycampusmate.png + generated webp variants)
  image: "/images/campumate.png",
  imageBase: "campumate",
    tags: ["React", "WebApp", "Social", "Education"],
    date: "Ongoing",
    budget: "2,00,000",
    timeline: "In Progress",
    link: "https://mycampusmate.in/public"
  },
  {
    title: "Raman Bhise - Portfolio Website",
    category: "Portfolio Website",
    description: "Built a Portfolio Website Using Interactive 3D Components and Animations",
    // local image base name (public/images/raman-portfolio.png + generated webp variants)
  image: "/images/raman.png",
  imageBase: "raman",
    tags: ["React", "3D", "Spline", "Animations"],
    date: "August 20, 2024",
    budget: "₹20,000",
    timeline: "4 weeks",
    link: "https://raman.chaospunk.space/"
  },
];

const Portfolio = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(card, {
          rotateY: (x - rect.width / 2) / 20,
          rotateX: -(y - rect.height / 2) / 20,
          transformPerspective: 1000,
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.5,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-dark">
        <FloatingParticles />
        <CursorEffect />
        <Navigation />

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl font-bold mb-6">
              Our <span className="bg-gradient-glow bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our portfolio showcases our previous work and highlights the quality of our services. Browse through our projects and see for yourself.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                ref={(el) => (cardsRef.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Responsive picture: webp variants generated by scripts/resize-images.js */}
                  {project.imageBase ? (
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={
                          `/images/${project.imageBase}-1200.webp 1200w, /images/${project.imageBase}-600.webp 600w`
                        }
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </picture>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                  <div className="absolute top-4 right-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass p-2 rounded-full"
                    >
                      <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>

                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-border/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Date</p>
                        <p className="text-sm font-medium">{project.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Budget</p>
                        <p className="text-sm font-medium">{project.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Timeline</p>
                        <p className="text-sm font-medium">{project.timeline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass px-3 py-1 rounded-full text-xs text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer variant="cta" />
      </div>
    </PageTransition>
  );
};

export default Portfolio;
