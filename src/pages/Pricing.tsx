import { motion } from "framer-motion";
import { Check, User, Briefcase, UtensilsCrossed, Home, GraduationCap, ShoppingCart, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import GlassButton from "@/components/GlassButton";
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";

const pricingTiers = [
  {
    name: "Portfolio Website",
    category: "Basic",
    icon: User,
    price: "₹35,000",
    timeline: "2-3 Weeks",
    features: [
      "Homepage with hero section",
      "About page with bio",
      "Portfolio/Work gallery",
      "Services page",
      "Contact form with validation",
      "Mobile responsive design",
      "SEO optimization",
      "Social media integration",
    ],
    highlighted: false,
  },
  {
    name: "Business Website",
    category: "Business",
    icon: Briefcase,
    price: "₹75,000",
    timeline: "4-5 Weeks",
    features: [
      "Homepage with company overview",
      "About us page",
      "Services/Products pages",
      "Team member profiles",
      "Blog/News section",
      "Contact & location maps",
      "CMS integration",
      "Analytics dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Restaurant Website",
    category: "Business",
    icon: UtensilsCrossed,
    price: "₹60,000",
    timeline: "3-4 Weeks",
    features: [
      "Homepage with restaurant story",
      "Digital menu with categories",
      "Location and hours information",
      "Photo gallery of food/ambiance",
      "Online reservation system",
      "Customer reviews section",
      "Mobile-first design",
      "Social media feeds",
    ],
    highlighted: false,
  },
  {
    name: "Real Estate Website",
    category: "Business",
    icon: Home,
    price: "₹90,000",
    timeline: "5-6 Weeks",
    features: [
      "Property listing with photos",
      "Advanced search and filters",
      "Agent/Broker profiles",
      "Property comparison tool",
      "Virtual tour integration",
      "Mortgage calculator",
      "Lead capture forms",
      "CRM integration",
    ],
    highlighted: false,
  },
  {
    name: "Educational Website",
    category: "Business",
    icon: GraduationCap,
    price: "₹1,00,000",
    timeline: "5-7 Weeks",
    features: [
      "Course catalog and descriptions",
      "Student registration system",
      "Faculty profiles and credentials",
      "Event and announcement system",
      "Online learning portal",
      "Resource library",
      "Parent/Student dashboard",
      "Payment gateway integration",
    ],
    highlighted: false,
  },
  {
    name: "E-commerce Website",
    category: "Enterprise",
    icon: ShoppingCart,
    price: "₹1,50,000",
    timeline: "6-8 Weeks",
    features: [
      "Product catalog with categories",
      "Shopping cart & checkout system",
      "Payment gateway integration",
      "User registration & login",
      "Order tracking system",
      "Admin dashboard",
      "Inventory management",
      "Email notifications",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing — Kalipr Labs";
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-glow bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your website type and customize with specific addons for your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`glass rounded-2xl p-8 border transition-all duration-300 ${
                  tier.highlighted
                    ? "border-primary glow-primary scale-105"
                    : "border-border hover:border-primary"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="glass px-4 py-1 rounded-full text-sm text-primary border border-primary glow-primary">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">{tier.category}</span>
                  <tier.icon className="w-12 h-12 text-primary mx-auto mb-4 mt-2 animate-float" />
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tier.timeline}</p>
                  <div className="text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent">
                    {tier.price}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <GlassButton
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get Started
                </GlassButton>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20 glass p-12 rounded-3xl border border-primary/30 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Our team will reach out within 24 hours with a detailed project proposal.
            </p>
            <div className="inline-flex items-center justify-center text-primary font-medium">
              <Phone className="mr-2 w-4 h-4" />
              Reach us on WhatsApp: +91 95296 17985
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Pricing;
