Here's the fixed version with all missing closing brackets added:

```javascript
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
      {/* Cursor personalizado */}
      <div 
        className="fixed w-6 h-6 bg-emerald-400/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Botón scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-110 z-40 animate-bounce-slow"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white shadow-2xl sticky top-0 z-40 border-b-4 border-emerald-500 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <TreePine className="h-12 w-12 text-emerald-400 group-hover:text-teal-300 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Arte Rustico Coqui
                </h1>
                <p className="text-emerald-300 text-sm font-medium tracking-wide">Carpintería de la Vieja Escuela</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['inicio', 'servicios', 'galeria', 'testimonios'].map((section, index) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="hover:text-emerald-300 transition-all duration-300 font-medium text-lg capitalize relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-emerald-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 rounded-xl hover:bg-slate-800 transition-all duration-300 relative overflow-hidden group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              {isMenuOpen ? <X className="h-6 w-6 relative z-10" /> : <Menu className="h-6 w-6 relative z-10" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-6 pb-6 border-t border-slate-700 animate-slide-down">
              <div className="flex flex-col space-y-4 pt-6">
                {['inicio', 'servicios', 'galeria', 'testimonios'].map((section, index) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="text-left hover:text-emerald-300 transition-all duration-300 py-3 px-4 capitalize font-medium rounded-lg hover:bg-slate-800/50 transform hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
          }}
        />
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 animate-fade-in-up">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                Maestros Artesanos desde 2009
              </span>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text mb-8 leading-tight animate-fade-in-up animation-delay-200">
              Maestros de la Madera
            </h2>
            
            <p className="text-2xl md:text-3xl text-slate-700 mb-12 leading-relaxed font-medium animate-fade-in-up animation-delay-400 max-w-4xl mx-auto">
              Más de 15 años creando muebles únicos con técnicas tradicionales. 
              <br className="hidden md:block" />
              <span className="text-emerald-700 font-semibold">Cada pieza cuenta la historia de generaciones de artesanos.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="group bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative z-10">Nuestros Trabajos</span>
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="group bg-transparent border-3 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 shadow-xl hover:shadow-slate-500/25 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Ver Galería
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-emerald-500/20">
                  <div className="text-emerald-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {stat.number}
                  </p>
                  <p className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                    Nuestra Historia
                  </span>
                </div>
                <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text mb-8">
                  Tradición y Maestría
                </h3>
                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  En Arte Rustico Coqui, preservamos las técnicas ancestrales de la carpintería. 
                  Trabajamos la madera como lo hacían nuestros abuelos: con paciencia, dedicación 
                  y el respeto que merece cada árbol que nos brinda su esencia.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Cada herramienta cuenta una historia, cada tallado lleva el alma del artesano. 
                  No fabricamos muebles, creamos legados familiares que perdurarán por generaciones.
                </p>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">¿Por qué elegirnos?</h4>
                  <div className="space-y-3">
                    {[
                      "Técnicas tradicionales transmitidas por generaciones",
                      "Madera seleccionada de la más alta calidad",
                      "Cada pieza es única y personalizada",
                      "Garantía de por vida en nuestros trabajos"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in-right">
                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105">
                    <img 
                      src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Maestro carpintero trabajando madera"
                      className="rounded-2xl shadow-xl w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 rounded-2xl shadow-2xl animate-pulse-slow">
                    <p className="font-bold text-lg">Técnicas Ancestrales</p>
                    <p className="text-emerald-300">Herramientas Tradicionales</p>
                  </div>
                  
                  {/* Elementos decorativos */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 animate-bounce-slow"></div>
                  <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 animate-float"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Nuestros Servicios
            </span>
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text mb-6">
              Especialidades Artesanales
            </h3>
            <p className="text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Cuatro décadas de experiencia en carpintería tradicional y restauración artesanal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Hammer className="h-16 w-16" />,
                title: "Muebles Rústicos",
                description: "Comedores, salas y dormitorios tallados a mano con madera maciza seleccionada.",
                image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: <Settings className="h-16 w-16" />,
                title: "Puertas Coloniales",
                description: "Puertas y ventanas de madera sólida con herrajes artesanales y tallados únicos.",
                image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: <TreePine className="h-16 w-16" />,
                title: "Restauración Antigua",
                description: "Devolvemos la vida a muebles centenarios respetando su historia y esencia original.",
                image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: <Wrench className="h-16 w-16" />,
                title: "Tallado Artesanal",
                description: "Decoraciones y relieves tallados a mano siguiendo patrones tradicionales centenarios.",
                image: "https://images.pexels.com/photos/5691647/pexels-photo-5691647.jpeg?auto=compress&cs=tinysrgb&w=600",
                color: "from-slate-500 to-gray-600"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up border border-slate-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-80 transition-all duration-500 flex items-center justify-center`}>
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${service.color} p-3 rounded-2xl mr-4 text-white`}>
                      {React.cloneElement(service.icon, { className: "h-8 w-8" })}
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow