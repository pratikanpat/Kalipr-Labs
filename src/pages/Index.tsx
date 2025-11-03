import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Database, Layers, Cloud, Smartphone, Palette, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Scene3D from "@/components/Scene3D";
import GlassButton from "@/components/GlassButton";
import FloatingParticles from "@/components/FloatingParticles";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    document.title = "Home — Kalipr Labs";
  }, []);

  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web solutions using modern frameworks and best practices",
    },
    {
      icon: Database,
      title: "Database & API Services",
      description: "Robust backend infrastructure and RESTful API development",
    },
    {
      icon: Layers,
      title: "MERN Software Solutions",
      description: "Scalable applications with MongoDB, Express, React, and Node.js",
    },
    {
      icon: Cloud,
      title: "Web Hosting & Cloud Solutions",
      description: "Reliable hosting with AWS, Azure, and cloud deployment",
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging web apps that work offline",
    },
    {
      icon: Palette,
      title: "Digital Branding & Design",
      description: "Stunning UI/UX that captivates and converts",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-dark overflow-hidden">
        <FloatingParticles />
        <CursorEffect />
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 bg-gradient-primary opacity-20" />
          
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="glass px-4 py-2 rounded-full text-sm text-primary glow-primary">
                  Digital Innovation Agency
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-glow bg-clip-text text-transparent animate-glow-pulse">
                  Building the Future
                </span>
                <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  of Digital Experiences
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                We design and develop next-generation web solutions with AI, creativity, and precision.
              </p>

              <div className="flex gap-4">
                <GlassButton variant="primary" onClick={() => navigate("/portfolio")}>
                  Explore Our Work <ArrowRight className="ml-2 w-4 h-4" />
                </GlassButton>
                <GlassButton variant="secondary" onClick={() => navigate("/pricing")}>
                  Make Quote
                </GlassButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-64 md:h-[420px] lg:h-[500px] relative"
            >
              <Scene3D />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <motion.section
          style={{ y }}
          className="relative py-32 px-6"
        >
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Cutting-edge solutions for the digital age
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 group"
                >
                  <service.icon className="w-12 h-12 text-primary mb-6 group-hover:animate-float" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <section className="relative py-32 px-6">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-16 rounded-3xl border border-primary glow-primary max-w-4xl mx-auto"
            >
              <h2 className="text-5xl font-bold mb-6">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create something extraordinary together
              </p>
              <div className="inline-flex items-center text-primary font-medium">
                <Phone className="mr-2 w-4 h-4" />
                Reach us on WhatsApp: +91 95296 17985
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
