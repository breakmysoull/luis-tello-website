import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChefHat, 
  Clock, 
  Users, 
  GraduationCap, 
  Phone, 
  Instagram, 
  MessageCircle,
  MessageSquare as WhatsApp 
} from 'lucide-react';
import Header from './components/Header';
import { ContactForm } from './components/ContactForm';
import { COLORS } from './constants/colors';

// Variantes de animação
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Componente de esqueleto para a galeria
const GallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="h-64 bg-gray-200 rounded-lg animate-pulse" />
    ))}
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Verificar tamanho da tela
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar inicialmente
    checkMobile();

    // Adicionar listener para mudanças de tamanho
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-[${COLORS.quinoa}]/10`}>
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <motion.section 
          className="relative h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/imagens/ceviche.jpg"
            alt="Ceviche Peruano"
            className="absolute inset-0 w-full h-full object-cover object-[60%]"
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.div 
            className="relative text-center text-white z-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className={`text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-[${COLORS.quinoa}]`}>Buena comida, conversación ligera y alma peruana.</h1>
            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://wa.me/51965439733" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition text-lg font-semibold shadow-lg hover:shadow-xl"
                aria-label="Reserve ahora via WhatsApp"
              >
                Reserve ahora
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-12 md:py-20 px-4 md:px-8 bg-white" 
          aria-labelledby="about-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.img 
              src="/imagens/principal2.jpg"
              alt="Chef Luis Tello preparando un plato"
              className="rounded-lg shadow-xl w-full"
              loading="lazy"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            />
            <motion.div variants={fadeInUp}>
              <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-[#662F3C] mb-4 md:mb-6">Sobre el Chef</h2>
              <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Con más de 15 años de experiencia en la cocina peruana, soy especialista en platos tradicionales como el ceviche, 
                causa rellena y chaufa. Cada plato se prepara con ingredientes frescos y técnicas auténticas, 
                llevando el verdadero sabor del Perú a su mesa.
              </p>
              <div className="space-y-4 text-gray-700">
                <div className={`flex items-center gap-4 text-[${COLORS.andino}]`}>
                  <ChefHat className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  <span className="text-sm md:text-base">Maestro en Ceviches y Causas</span>
                </div>
                <p className="italic text-xs md:text-sm">
                  "El secreto del ceviche perfecto está en la frescura del pescado y en el tiempo preciso de preparación."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20 px-4 md:px-8 bg-[#DDD2C1]">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-[${COLORS.aaji}] mb-8 md:mb-16`}>Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Users,
                  title: "Cenas Privadas",
                  description: "Experiencia completa con ceviche fresco, causas tradicionales y auténtico chaufa peruano"
                },
                {
                  icon: Clock,
                  title: "Eventos Pequeños",
                  description: "Buffet peruano completo con estación en vivo de ceviche y platos calientes"
                },
                {
                  icon: GraduationCap,
                  title: "Clases de Cocina",
                  description: "Aprende los secretos del ceviche perfecto y otras especialidades andinas"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/90 p-6 md:p-8 rounded-lg shadow-lg text-center hover:bg-white transition-colors"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <service.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-[${COLORS.andino}]" aria-hidden="true" />
                  <h3 className={`text-lg md:text-xl font-semibold mb-4 text-[${COLORS.aaji}]`}>{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Hidden on Mobile */}
        {!isMobile && (
          <motion.section 
            id="gallery" 
            className="py-12 md:py-20 px-4 md:px-8 bg-white" 
            aria-labelledby="gallery-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                id="gallery-title" 
                className={`text-3xl md:text-4xl font-bold text-center text-[${COLORS.aaji}] mb-8 md:mb-16`}
                variants={fadeInUp}
              >
                Galería
              </motion.h2>
              
              <motion.div variants={fadeInUp}>
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                      <div key={index} className="h-64 bg-gray-200 rounded-lg animate-pulse" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      "/imagens/foto1.jpg",
                      "/imagens/foto2.jpg",
                      "/imagens/foto3.jpg",
                      "/imagens/foto4.jpg",
                      "/imagens/foto5.jpg",
                      "/imagens/foto6.jpg"
                    ].map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.img 
                          src={image}
                          alt={`Prato ${index + 1} do Chef Luis Tello`}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 hidden md:flex items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="text-white text-center p-4"
                          >
                            <p className="text-lg font-semibold">Ver Detalhes</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 px-4 md:px-8 bg-[#DDD2C1]">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-[${COLORS.aaji}] mb-8 md:mb-16`}>Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  text: "¡El mejor ceviche que he probado! El Chef Luis Tello trae el verdadero sabor del Perú a nuestra casa.",
                  author: "Albert Vasquez"
                },
                {
                  text: "¡Las clases de cocina fueron fantásticas! Aprendí todos los secretos para hacer una causa perfecta.",
                  author: "Jorge Vella"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-sm md:text-base text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className={`text-[${COLORS.aaji}] font-semibold text-sm md:text-base`}>{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className={`text-3xl md:text-4xl font-bold text-[${COLORS.aaji}] mb-6 md:mb-8`}>Contacto</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
                Consulte la disponibilidad de agenda en WhatsApp o Instagram
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                <a 
                  href="https://wa.me/51965439733" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                  aria-label="Contacto via WhatsApp"
                >
                  <WhatsApp className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://www.instagram.com/luistello___/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#8B0000] text-white px-6 py-3 rounded-lg hover:bg-[#6B0000] transition"
                  aria-label="Contacto via Instagram"
                >
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`bg-[${COLORS.aaji}] text-[${COLORS.quinoa}] py-6 md:py-8 px-4 md:px-8`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <ChefHat className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
            <span className="text-lg md:text-xl font-semibold">Chef Luis Tello</span>
          </div>
          <p className="text-sm md:text-base">&copy; 2025 Chef Luis Tello. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/51965439733"
        className="fixed bottom-8 right-8 bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-700 transition z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacto via WhatsApp"
      >
        <WhatsApp className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
      </a>
    </div>
  );
}

export default App;