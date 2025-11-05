import { motion } from "framer-motion";
import { Mail, Phone, Heart } from "lucide-react";

interface FooterProps {
  variant?: "default" | "cta";
}

const Footer = ({ variant = "default" }: FooterProps) => {
  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      {variant === "cta" && (
        <div className="container mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Get in touch for an exploratory chat. We'll discuss your ideas and see if we're a good fit.
            </p>
          </motion.div>
        </div>
      )}

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-glow bg-clip-text text-transparent">
              Kalipr Labs
            </h3>
            <p className="text-xs text-muted-foreground mt-1">- by Pratik Anpat</p>
            <p className="text-muted-foreground">
              Building the Future of Digital Experiences
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>9529617984</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>kaliprlabs@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/portfolio" className="block text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground text-sm">
            <p className="flex items-center justify-center gap-2">
            © 2024 Built by Kalipr Labs with <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
