import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Hammer, Settings, TreePine, Award, Users, Clock, Star, ChevronLeft, ChevronRight, Zap, Shield, Heart, CheckCircle, Wrench } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Don Miguel Hernández",
      text: "Como mi abuelo hacía muebles, reconozco la calidad. Estos artesanos trabajan con el alma, como en los viejos tiempos.",
      rating: 5,
      project: "Mesa de Comedor Familiar"
    },
    {
      name: "Doña Carmen Vega",
      text: "Mi cómoda de 1940 parecía perdida. La restauraron con tanto cariño que ahora luce mejor que nueva.",
      rating: 5,
      project: "Restauración Antigua"
    },
    {
      name: "Familia Morales",
      text: "Nos hicieron una cocina completa en madera maciza. Cada detalle tallado a mano, una verdadera obra de arte.",
      rating: 5,
      project: "Cocina Rústica"
    },
    {
      name: "Roberto Santana",
      text: "Las puertas que me hicieron son impresionantes. Madera sólida, herrajes antiguos, trabajo de maestro.",
      rating: 5,
      project: "Puertas Coloniales"
    }
  ];

  const featuredProjects = [
    {
      title: "Cocina Colonial Completa",
      description: "Gabinetes en madera maciza con tallados tradicionales",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Madera de roble envejecida, herrajes de hierro forjado"
    },
    {
      title: "Comedor Hacienda Antigua",
      description: "Mesa y sillas talladas a mano estilo colonial",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Madera de cedro, capacidad 10 personas, acabado natural"
    },
    {
      title: "Dormitorio Rústico Completo",
      description: "Cama, cómodas y armario en estilo campestre",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Madera maciza de pino, tallados artesanales únicos"
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white shadow-2xl sticky top-0 z-50 border-b-4 border-amber-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <TreePine className="h-10 w-10 text-amber-200 group-hover:text-yellow-300 transition-colors duration-300 transform group-hover:scale-110" />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  Arte Rustico Coqui
                </h1>
                <p className="text-amber-300 text-sm font-medium">Carpintería de la Vieja Escuela</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['inicio', 'servicios', 'galeria', 'testimonios'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="hover:text-amber-200 transition-all duration-300 font-medium text-lg capitalize relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-amber-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-amber-700 animate-fade-in">
              <div className="flex flex-col space-y-3 pt-4">
                {['inicio', 'servicios', 'galeria', 'testimonios'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="text-left hover:text-amber-200 transition-colors py-2 capitalize font-medium"
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
      <section id="inicio" className="relative bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-amber-900 via-orange-800 to-red-800 bg-clip-text mb-8 leading-tight animate-fade-in-up">
              Maestros de la Madera
            </h2>
            <p className="text-2xl md:text-3xl text-amber-800 mb-12 leading-relaxed font-medium animate-fade-in-up animation-delay-200">
              Más de 15 años creando muebles únicos con técnicas tradicionales. 
              <br className="hidden md:block" />
              Cada pieza cuenta la historia de generaciones de artesanos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="bg-gradient-to-r from-amber-900 to-orange-900 hover:from-amber-800 hover:to-orange-800 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
              >
                Nuestros Trabajos
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="bg-transparent border-3 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 shadow-xl"
              >
                Ver Galería
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-r from-orange-50 to-amber-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D97706' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text mb-8">
                  Tradición y Maestría
                </h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  En Arte Rustico Coqui, preservamos las técnicas ancestrales de la carpintería. 
                  Trabajamos la madera como lo hacían nuestros abuelos: con paciencia, dedicación 
                  y el respeto que merece cada árbol que nos brinda su esencia.
                </p>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Cada herramienta cuenta una historia, cada tallado lleva el alma del artesano. 
                  No fabricamos muebles, creamos legados familiares que perdurarán por generaciones.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Award className="h-10 w-10 text-amber-900 mx-auto mb-3" />
                    <p className="font-bold text-2xl text-amber-900">15+</p>
                    <p className="text-sm text-gray-600 font-medium">Años de Tradición</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Users className="h-10 w-10 text-amber-900 mx-auto mb-3" />
                    <p className="font-bold text-2xl text-amber-900">800+</p>
                    <p className="text-sm text-gray-600 font-medium">Familias Satisfechas</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Heart className="h-10 w-10 text-amber-900 mx-auto mb-3" />
                    <p className="font-bold text-2xl text-amber-900">100%</p>
                    <p className="text-sm text-gray-600 font-medium">Hecho a Mano</p>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <div className="bg-gradient-to-br from-amber-200 via-orange-200 to-red-200 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Maestro carpintero trabajando madera"
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white p-6 rounded-2xl shadow-2xl">
                  <p className="font-bold text-lg">Técnicas Ancestrales</p>
                  <p className="text-amber-200">Herramientas Tradicionales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-red-800 via-orange-800 to-amber-900 bg-clip-text mb-6">
              Nuestras Especialidades
            </h3>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cuatro décadas de experiencia en carpintería tradicional y restauración artesanal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Hammer className="h-16 w-16 text-amber-900" />,
                title: "Muebles Rústicos",
                description: "Comedores, salas y dormitorios tallados a mano con madera maciza seleccionada.",
                image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                icon: <Settings className="h-16 w-16 text-amber-900" />,
                title: "Puertas Coloniales",
                description: "Puertas y ventanas de madera sólida con herrajes artesanales y tallados únicos.",
                image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                icon: <TreePine className="h-16 w-16 text-amber-900" />,
                title: "Restauración Antigua",
                description: "Devolvemos la vida a muebles centenarios respetando su historia y esencia original.",
                image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                icon: <Wrench className="h-16 w-16 text-amber-900" />,
                title: "Tallado Artesanal",
                description: "Decoraciones y relieves tallados a mano siguiendo patrones tradicionales centenarios.",
                image: "https://images.pexels.com/photos/5691647/pexels-photo-5691647.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-3 rounded-2xl mr-4">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-amber-900">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-24 bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6">Proyectos Destacados</h3>
            <p className="text-2xl text-amber-200 max-w-3xl mx-auto">
              Cada proyecto es único, cada pieza cuenta una historia
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0 bg-white text-gray-800">
                      <div className="p-12 flex flex-col justify-center">
                        <h4 className="text-4xl font-bold text-amber-900 mb-6">
                          {project.title}
                        </h4>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                          {project.description}
                        </p>
                        <p className="text-lg text-amber-800 font-medium">
                          {project.details}
                        </p>
                      </div>
                      <div className="h-96 lg:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => setCurrentProject((prev) => (prev + 1) % featuredProjects.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text mb-6">
              Galería de Maestría
            </h3>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cada pieza es testimonio de años de experiencia y amor por la carpintería tradicional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/5691647/pexels-photo-5691647.jpeg?auto=compress&cs=tinysrgb&w=800"
            ].map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={image} 
                  alt={`Trabajo artesanal ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-bold text-xl">Obra Maestra #{index + 1}</p>
                    <p className="text-amber-200">Carpintería Tradicional</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-orange-800 to-amber-900 bg-clip-text mb-6">
              Voces de Nuestras Familias
            </h3>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              El testimonio de quienes confían en nuestra tradición artesanal
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-xl font-bold text-amber-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-lg text-gray-600">
                    {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-amber-500 scale-125' 
                        : 'bg-gray-300 hover:bg-amber-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6">
              Hablemos de Tu Proyecto
            </h3>
            <p className="text-2xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
              Cada gran obra comienza con una conversación. Cuéntanos tu visión y la haremos realidad
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-8 w-8 text-amber-300" />
                  <h4 className="text-2xl font-bold">Llámanos</h4>
                </div>
                <p className="text-amber-200 text-lg">+1 (787) 555-0123</p>
                <p className="text-sm text-amber-300 mt-2">Lun-Vie: 7AM-6PM | Sáb: 8AM-4PM</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-8 w-8 text-amber-300" />
                  <h4 className="text-2xl font-bold">Escríbenos</h4>
                </div>
                <p className="text-amber-200 text-lg">danilolobato02@gmail.com</p>
                <p className="text-sm text-amber-300 mt-2">Respuesta en 24 horas</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-8 w-8 text-amber-300" />
                  <h4 className="text-2xl font-bold">Visitamos</h4>
                </div>
                <p className="text-amber-200 text-lg">Servicio a domicilio</p>
                <p className="text-sm text-amber-300 mt-2">Toda la isla de Puerto Rico</p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
                <h4 className="text-3xl font-bold mb-8 text-center">
                  ¿Listo para crear algo extraordinario?
                </h4>
                <div className="text-center space-y-6">
                  <p className="text-xl text-amber-200 leading-relaxed">
                    Cada proyecto es único, como la madera que utilizamos. 
                    Desde una simple reparación hasta un comedor completo, 
                    trabajamos con la misma dedicación y amor por el oficio.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/10 rounded-xl p-6">
                      <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
                      <p className="font-semibold">Consulta Gratuita</p>
                      <p className="text-sm text-amber-300">Evaluamos tu proyecto sin costo</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6">
                      <Shield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                      <p className="font-semibold">Garantía Total</p>
                      <p className="text-sm text-amber-300">Respaldamos nuestro trabajo</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <a 
                      href="tel:+17875550123"
                      className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-12 py-4 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                      Llamar Ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-950 via-orange-950 to-red-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <TreePine className="h-10 w-10 text-amber-300" />
                <div>
                  <h4 className="text-3xl font-bold">Arte Rustico Coqui</h4>
                  <p className="text-amber-300">Carpintería de la Vieja Escuela</p>
                </div>
              </div>
              <p className="text-amber-200 leading-relaxed text-lg">
                Preservando las tradiciones artesanales de Puerto Rico. 
                Cada pieza que creamos lleva el alma de generaciones de maestros carpinteros.
              </p>
            </div>
            
            <div>
              <h5 className="text-2xl font-bold mb-6 text-amber-300">Especialidades</h5>
              <ul className="space-y-3 text-amber-200 text-lg">
                <li className="hover:text-white transition-colors cursor-pointer">• Muebles Rústicos</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Puertas Coloniales</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Restauración Antigua</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Tallado Artesanal</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-2xl font-bold mb-6 text-amber-300">Contacto</h5>
              <div className="space-y-4 text-amber-200 text-lg">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  +1 (787) 555-0123
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  danilolobato02@gmail.com
                </p>
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  Puerto Rico - Servicio a domicilio
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-12 pt-8 text-center">
            <p className="text-amber-300 text-lg">
              &copy; 2024 Arte Rustico Coqui. Preservando tradiciones, creando legados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;