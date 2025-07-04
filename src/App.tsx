import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Hammer, Settings, TreePine, Award, Users, Clock, Star, ChevronLeft, ChevronRight, Zap, Shield, Heart, CheckCircle, Wrench, Eye, ArrowUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Don Miguel Hernández",
      text: "Como mi abuelo hacía muebles, reconozco la calidad. Estos artesanos trabajan con el alma, como en los viejos tiempos.",
      rating: 5,
      project: "Mesa de Comedor Familiar",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Doña Carmen Vega",
      text: "Mi cómoda de 1940 parecía perdida. La restauraron con tanto cariño que ahora luce mejor que nueva.",
      rating: 5,
      project: "Restauración Antigua",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Familia Morales",
      text: "Nos hicieron una cocina completa en madera maciza. Cada detalle tallado a mano, una verdadera obra de arte.",
      rating: 5,
      project: "Cocina Rústica",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Roberto Santana",
      text: "Las puertas que me hicieron son impresionantes. Madera sólida, herrajes artesanales y tallados únicos.",
      rating: 5,
      project: "Puertas Coloniales",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const featuredProjects = [
    {
      title: "Cocina Colonial Completa",
      description: "Gabinetes en madera maciza con tallados tradicionales",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Madera de roble envejecida, herrajes de hierro forjado",
      duration: "6 semanas",
      client: "Familia Rivera"
    },
    {
      title: "Comedor Hacienda Antigua",
      description: "Mesa y sillas talladas a mano estilo colonial",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Madera de cedro, capacidad 10 personas, acabado natural",
      duration: "4 semanas",
      client: "Don Carlos Méndez"
    },
    {
      title: "Dormitorio Rústico Completo",
      description: "Cama, cómodas y armario en estilo campestre",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Madera maciza de pino, tallados artesanales únicos",
      duration: "5 semanas",
      client: "Familia Ortiz"
    }
  ];

  const stats = [
    { number: "15+", label: "Años de Tradición", icon: <Award className="h-8 w-8" /> },
    { number: "800+", label: "Familias Satisfechas", icon: <Users className="h-8 w-8" /> },
    { number: "100%", label: "Hecho a Mano", icon: <Heart className="h-8 w-8" /> },
    { number: "24/7", label: "Dedicación", icon: <Clock className="h-8 w-8" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <TreePine className="h-20 w-20 text-emerald-400 mx-auto mb-6 animate-pulse" />
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping"></div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Arte Rustico Coqui</h1>
          <div className="w-64 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-x-hidden">
      {/* Rest of the JSX code... */}
    </div>
  );
}

export default App;