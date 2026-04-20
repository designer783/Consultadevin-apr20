// Consulta VIN - Modern VIN Checking SaaS Application
import { Search, Shield, FileText, Car, AlertTriangle, Users, Clock, CheckCircle2, Smartphone, FileCheck, Gauge, Camera, ArrowRight, Zap, TrendingUp, BarChart, DollarSign, ChevronRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Badge from './components/Badge';
import StatCard from './components/StatCard';
import Input from './components/Input';
import SectionHeader from './components/SectionHeader';
import FeatureWithImage from './components/FeatureWithImage';
import SimpleFeatureCard from './components/SimpleFeatureCard';
import PricingCard from './components/PricingCard';
import TestimonialCard from './components/TestimonialCard';
import FAQItem from './components/FAQItem';
import ComponentShowcase from './components/ComponentShowcase';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import TrustpilotBadge from './components/TrustpilotBadge';
import MobileAppButtons from './components/MobileAppButtons';
import BrandPattern from './components/BrandPattern';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <ComponentShowcase />

      {/* Hero Section - Left Aligned with Image */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-muted/20">
        <BrandPattern opacity={0.15} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            {/* Left Column - Content */}
            <div className="max-w-xl">
              {/* Badge */}
              <TrustpilotBadge />

              {/* Headline - Bricolage Grotesque - Refined Size */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold mt-5 mb-4 leading-[1.15] text-foreground">
                Verifica el historial de{' '}
                <span className="text-primary">cualquier vehículo</span> antes de comprar
              </h1>

              {/* Subheading - Rubik */}
              <p className="text-base sm:text-lg text-muted-foreground mb-7 leading-relaxed">
                Obtén reportes completos con datos verificados. Evita fraudes, accidentes ocultos y toma decisiones informadas.
              </p>

              {/* Form - No Card */}
              <div className="mb-7">
                <div className="flex gap-3 mb-4">
                  <Button variant="primary" className="flex-1">
                    Por VIN
                  </Button>
                  <Button variant="ghost" className="flex-1">
                    Por Placa
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Input
                    type="text"
                    placeholder="Ingresa el VIN de 17 dígitos"
                    className="flex-1"
                  />
                  <Button variant="primary" size="lg">
                    <Search size={20} />
                    Buscar
                  </Button>
                </div>

                <div className="flex flex-wrap gap-5 text-sm">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors font-medium flex items-center gap-1">
                    ¿Dónde encontrar el VIN?
                    <ChevronRight size={14} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors font-medium flex items-center gap-1">
                    Ver ejemplo de reporte
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>

              {/* Mobile App Download Buttons */}
              <MobileAppButtons />
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 border border-border/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
                  alt="Vehicle inspection report dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Trust Indicator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Confiado por más de <span className="text-primary font-semibold">10,000+ compradores</span> en México
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="text-primary" size={16} />
              <span className="text-xs font-medium">50,000+ reportes</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="text-primary" size={16} />
              <span className="text-xs font-medium">Datos en tiempo real</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="text-primary" size={16} />
              <span className="text-xs font-medium">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Why You Need VIN Check */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FeatureWithImage
            title="Conoce la historia completa del vehículo"
            description="Accede a información detallada que el vendedor no te dirá. Nuestros reportes incluyen historial de accidentes, títulos salvage, kilometraje real y mucho más."
            imagePosition="right"
            features={[
              'Historial de accidentes y daños estructurales',
              'Verificación de títulos (salvage, rebuilt, flood)',
              'Lectura del odómetro y detección de fraudes',
              'Número de propietarios anteriores',
              'Fotos de subastas con fechas y condiciones'
            ]}
            image={
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-12 shadow-2xl border-2 border-border">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileText className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-foreground">Reporte VIN Completo</h4>
                      <p className="text-sm text-muted-foreground font-semibold">1HGBH41JXMN109186</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-semibold text-foreground">Estado del Título</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Clean</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-semibold text-foreground">Accidentes</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">2 reportados</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-semibold text-foreground">Propietarios</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">3</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-semibold text-foreground">Kilometraje</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">85,420 km</span>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Feature Section 2 - How It Works */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
        <BrandPattern opacity={0.08} />
        <div className="max-w-7xl mx-auto relative z-10">
          <FeatureWithImage
            title="Reportes instantáneos en segundos"
            description="Nuestro sistema automatizado genera reportes completos en menos de 30 segundos. Solo ingresa el VIN y obtén acceso inmediato a toda la información que necesitas."
            imagePosition="left"
            features={[
              'Generación automática en tiempo real',
              'Datos actualizados de múltiples fuentes',
              'Reportes disponibles 24/7 sin restricciones',
              'Descarga en PDF para compartir fácilmente'
            ]}
            image={
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 shadow-2xl border-2 border-border">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3 bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Search className="text-accent" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-muted-foreground mb-1">PASO 1</div>
                        <div className="text-sm font-bold text-foreground">Ingresa el VIN</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3 bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Zap className="text-accent" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-muted-foreground mb-1">PASO 2</div>
                        <div className="text-sm font-bold text-foreground">Generación Automática</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3 bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <FileCheck className="text-primary" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-muted-foreground mb-1">PASO 3</div>
                        <div className="text-sm font-bold text-foreground">Reporte Completo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Simple Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Características"
            title={
              <>
                Todo lo que necesitas para{' '}
                <span className="text-primary">comprar con confianza</span>
              </>
            }
            description="Información verificada de múltiples fuentes para que tomes la mejor decisión"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <SimpleFeatureCard
              icon={<FileText className="text-accent" size={28} />}
              title="Especificaciones"
              description="Datos técnicos, modelo exacto y equipamiento original de fábrica"
            />
            <SimpleFeatureCard
              icon={<AlertTriangle className="text-accent" size={28} />}
              title="Accidentes"
              description="Historial completo de daños y accidentes reportados"
            />
            <SimpleFeatureCard
              icon={<Gauge className="text-accent" size={28} />}
              title="Kilometraje"
              description="Verificación real del odómetro y detección de fraudes"
            />
            <SimpleFeatureCard
              icon={<Users className="text-accent" size={28} />}
              title="Propietarios"
              description="Número de dueños y duración de cada propiedad"
            />
            <SimpleFeatureCard
              icon={<Shield className="text-accent" size={28} />}
              title="Títulos"
              description="Verificación de títulos salvage, rebuilt o flood"
            />
            <SimpleFeatureCard
              icon={<Camera className="text-accent" size={28} />}
              title="Fotos Subastas"
              description="Imágenes reales del vehículo en subastas"
            />
            <SimpleFeatureCard
              icon={<Clock className="text-accent" size={28} />}
              title="Recalls"
              description="Llamados a revisión del fabricante"
            />
            <SimpleFeatureCard
              icon={<DollarSign className="text-accent" size={28} />}
              title="Valor Mercado"
              description="Estimación del valor real basado en historial"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
        <BrandPattern opacity={0.1} />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge="Precios"
            badgeIcon={<TrendingUp className="text-foreground" size={16} />}
            title={
              <>
                Elige el plan <span className="text-primary">perfecto para ti</span>
              </>
            }
            description="Reportes más completos que Carfax a precios más accesibles"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Básico"
              price="$299"
              period="reporte"
              description="Perfecto para verificar un solo vehículo"
              features={[
                '1 reporte VIN completo',
                'Historial de accidentes',
                'Verificación de título',
                'Lectura de odómetro',
                'Soporte por email'
              ]}
            />

            <PricingCard
              name="Popular"
              price="$799"
              period="3 reportes"
              description="Ideal para comparar múltiples opciones"
              features={[
                '3 reportes VIN completos',
                'Todo lo del plan Básico',
                'Fotos de subastas',
                'Historial de mantenimiento',
                'Soporte prioritario',
                'Válido por 30 días'
              ]}
              highlighted
            />

            <PricingCard
              name="Profesional"
              price="$1,999"
              period="10 reportes"
              description="Para dealers y compradores frecuentes"
              features={[
                '10 reportes VIN completos',
                'Todo lo del plan Popular',
                'Valor de mercado',
                'API access',
                'Soporte 24/7',
                'Válido por 90 días'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Testimonios"
            title={
              <>
                Lo que dicen <span className="text-primary">nuestros clientes</span>
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Chuy Chávez"
              comment="Van dos unidades que me revisan muy buena atención y sobre todo económico seguiré checando más autos gracias"
              rating={5}
            />
            <TestimonialCard
              name="Ahkohnar Orozco"
              comment="El vehículo que quería comprar tenía daño severo en frente y parte inferior. Gracias a Consulta VIN evité un fraude."
              rating={5}
            />
            <TestimonialCard
              name="Hanny Vicsal"
              comment="Excelente servicio, muy buen trato, resolvieron todas mis dudas. Totalmente recomendable."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
        <BrandPattern opacity={0.1} />
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader
            badge="FAQ"
            title={
              <>
                Preguntas <span className="text-primary">frecuentes</span>
              </>
            }
            description="Todo lo que necesitas saber sobre nuestros reportes VIN"
          />

          <div className="space-y-4">
            <FAQItem
              question="¿Qué es el VIN de un carro?"
              answer="El VIN (Vehicle Identification Number) es un código único de 17 dígitos que identifica específicamente a cada vehículo. Es como la huella digital del auto y contiene información sobre el fabricante, características y año de producción."
            />
            <FAQItem
              question="¿Dónde puedo encontrar el VIN en mi vehículo?"
              answer="El VIN se encuentra en varios lugares: en el tablero cerca del parabrisas del lado del conductor, en la puerta del conductor (etiqueta lateral), en el compartimento del motor, y en documentos como el título de propiedad y la tarjeta de circulación."
            />
            <FAQItem
              question="¿Cuánto tiempo tarda en generarse el reporte?"
              answer="Nuestros reportes se generan instantáneamente, generalmente en menos de 30 segundos. Una vez que ingresas el VIN y realizas el pago, recibirás acceso inmediato al reporte completo."
            />
            <FAQItem
              question="¿Los reportes incluyen información de vehículos importados?"
              answer="Sí, nuestros reportes son especialmente útiles para vehículos importados de USA y Canadá. Incluimos información de subastas, historial en otros países, y verificamos el cumplimiento con normativas locales."
            />
            <FAQItem
              question="¿Qué hago si encuentro información incorrecta?"
              answer="Si detectas algún error en tu reporte, contáctanos inmediatamente. Verificamos la información con nuestras fuentes y corregimos cualquier inconsistencia. Ofrecemos garantía de precisión en todos nuestros reportes."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted/20 overflow-hidden">
        <BrandPattern opacity={0.12} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
            ¿Listo para verificar{' '}
            <span className="text-primary">tu próximo vehículo?</span>
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Únete a miles de compradores que tomaron la decisión correcta
          </p>
          <Button variant="primary" size="lg">
            <span>Obtener mi reporte ahora</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/40 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CV</span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  <span className="text-primary">consulta</span> <span className="text-foreground">vin</span>
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm text-sm leading-relaxed">
                La plataforma más completa y confiable para verificación de historial vehicular en México.
              </p>
              <div className="flex gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12 hover:scale-105 transition-transform cursor-pointer"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-12 hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground text-base">Productos</h3>
              <ul className="space-y-2.5 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Consulta VIN</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Verificación de Placas</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Window Sticker</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Historial de Título</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground text-base">Herramientas</h3>
              <ul className="space-y-2.5 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Decodificador VIN</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Calculadora de Valor</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Verificador de Recalls</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Checar REPUVE</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground text-base">Empresa</h3>
              <ul className="space-y-2.5 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Contacto</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors text-sm">Soporte</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-muted-foreground text-xs">
              © 2026 Consulta de VIN. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
              <a href="#" className="hover:text-foreground transition-colors">Términos</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
