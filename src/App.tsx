import React, { useState } from 'react';
import { Send, Menu, X, Phone, Mail, MapPin, Hammer, Settings, TreePine, Award, Users, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_default', // Este ID se configurará en EmailJS
        'template_default', // Este ID se configurará en EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'danilolobato02@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Este se configurará en EmailJS
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TreePine className="h-8 w-8 text-amber-200" />
              <div>
                <h1 className="text-2xl font-bold">Arte Rustico Coqui</h1>
                <p className="text-amber-200 text-sm">Carpintería Artesanal</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-amber-200 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="hover:text-amber-200 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('galeria')} className="hover:text-amber-200 transition-colors">
                Galería
              </button>
              <button onClick={() => scrollToSection('contacto')} className="hover:text-amber-200 transition-colors">
                Contacto
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-amber-700">
              <div className="flex flex-col space-y-2 pt-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-amber-200 transition-colors py-2">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('servicios')} className="text-left hover:text-amber-200 transition-colors py-2">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('galeria')} className="text-left hover:text-amber-200 transition-colors py-2">
                  Galería
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-left hover:text-amber-200 transition-colors py-2">
                  Contacto
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-amber-100 to-amber-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Creamos Arte en Madera
            </h2>
            <p className="text-xl md:text-2xl text-amber-800 mb-8 leading-relaxed">
              Más de 20 años transformando ideas en piezas únicas de carpintería artesanal. 
              Cada proyecto es una obra de arte hecha con pasión y dedicación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-transparent border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Contactar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-amber-900 mb-6">
                  Tradición y Calidad
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  En Arte Rustico Coqui, cada pieza de madera cuenta una historia. 
                  Combinamos técnicas tradicionales con herramientas modernas para crear 
                  muebles y estructuras que perduran en el tiempo.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <Award className="h-8 w-8 text-amber-900 mx-auto mb-2" />
                    <p className="font-semibold text-amber-900">20+ Años</p>
                    <p className="text-sm text-gray-600">Experiencia</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <Users className="h-8 w-8 text-amber-900 mx-auto mb-2" />
                    <p className="font-semibold text-amber-900">500+</p>
                    <p className="text-sm text-gray-600">Clientes Satisfechos</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <Clock className="h-8 w-8 text-amber-900 mx-auto mb-2" />
                    <p className="font-semibold text-amber-900">100%</p>
                    <p className="text-sm text-gray-600">Garantía</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg p-8 shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Carpintero trabajando"
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-amber-900 mb-4">
              Nuestros Servicios
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de carpintería para satisfacer todas tus necesidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Hammer className="h-12 w-12 text-amber-900" />,
                title: "Muebles Personalizados",
                description: "Diseñamos y fabricamos muebles únicos adaptados a tu espacio y estilo personal.",
                image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500"
              },
              {
                icon: <Settings className="h-12 w-12 text-amber-900" />,
                title: "Carpintería Estructural",
                description: "Construcción y reparación de estructuras de madera para casas y edificios.",
                image: "https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=500"
              },
              {
                icon: <TreePine className="h-12 w-12 text-amber-900" />,
                title: "Restauración",
                description: "Devolvemos la vida a muebles antiguos con técnicas especializadas de restauración.",
                image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=500"
              },
              {
                icon: <Award className="h-12 w-12 text-amber-900" />,
                title: "Puertas y Ventanas",
                description: "Fabricación e instalación de puertas y ventanas de madera de alta calidad.",
                image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500"
              },
              {
                icon: <Users className="h-12 w-12 text-amber-900" />,
                title: "Decoración de Interiores",
                description: "Elementos decorativos en madera para crear ambientes únicos y acogedores.",
                image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=500"
              },
              {
                icon: <Clock className="h-12 w-12 text-amber-900" />,
                title: "Mantenimiento",
                description: "Servicios de mantenimiento preventivo y correctivo para tus muebles de madera.",
                image: "https://images.pexels.com/photos/5691647/pexels-photo-5691647.jpeg?auto=compress&cs=tinysrgb&w=500"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h4 className="text-xl font-bold text-amber-900 ml-3">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-amber-900 mb-4">
              Galería de Trabajos
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Algunos de nuestros trabajos más destacados que reflejan la calidad y dedicación en cada proyecto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/5691647/pexels-photo-5691647.jpeg?auto=compress&cs=tinysrgb&w=800"
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={`Trabajo ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Proyecto {index + 1}</p>
                    <p className="text-sm">Carpintería Artesanal</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Contactanos
            </h3>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-200 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Teléfono</h4>
                  <p className="text-amber-200">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-amber-200 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <p className="text-amber-200">danilolobato02@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-200 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ubicación</h4>
                  <p className="text-amber-200">Servicio a domicilio<br />Consulta disponibilidad en tu área</p>
                </div>
              </div>
              
              <div className="bg-amber-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Horarios de Atención</h4>
                <div className="space-y-2 text-amber-200">
                  <p>Lunes - Viernes: 7:00 AM - 6:00 PM</p>
                  <p>Sábado: 8:00 AM - 4:00 PM</p>
                  <p>Domingo: Solo emergencias</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
              <h4 className="text-2xl font-bold text-amber-900 mb-6">
                Solicita tu Cotización
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="muebles">Muebles Personalizados</option>
                      <option value="estructural">Carpintería Estructural</option>
                      <option value="restauracion">Restauración</option>
                      <option value="puertas">Puertas y Ventanas</option>
                      <option value="decoracion">Decoración</option>
                      <option value="mantenimiento">Mantenimiento</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe tu Proyecto *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Cuéntanos sobre tu proyecto, dimensiones, materiales preferidos, presupuesto aproximado, etc."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-900 hover:bg-amber-800 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Error al enviar el mensaje. Por favor, intenta nuevamente o contacta directamente por teléfono.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <TreePine className="h-8 w-8 text-amber-200" />
                <div>
                  <h4 className="text-2xl font-bold">Arte Rustico Coqui</h4>
                  <p className="text-amber-200">Carpintería Artesanal</p>
                </div>
              </div>
              <p className="text-amber-200 leading-relaxed">
                Transformamos la madera en obras de arte funcionales. 
                Cada proyecto es único y refleja la pasión por nuestro oficio.
              </p>
            </div>
            
            <div>
              <h5 className="text-xl font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-amber-200">
                <li>Muebles Personalizados</li>
                <li>Carpintería Estructural</li>
                <li>Restauración</li>
                <li>Puertas y Ventanas</li>
                <li>Decoración</li>
                <li>Mantenimiento</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-xl font-semibold mb-4">Contacto</h5>
              <div className="space-y-2 text-amber-200">
                <p>📞 +1 (555) 123-4567</p>
                <p>📧 danilolobato02@gmail.com</p>
                <p>📍 Servicio a domicilio</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 Arte Rustico Coqui. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;