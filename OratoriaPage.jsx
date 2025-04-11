import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function OratoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white text-gray-900 font-sans">
      <header className="p-6 flex justify-between items-center shadow-md bg-white">
        <h1 className="text-2xl font-bold text-orange-600">Poder de la Palabra</h1>
        <nav className="space-x-4">
          <a href="#inicio" className="hover:text-orange-600">Inicio</a>
          <a href="#servicios" className="hover:text-orange-600">Servicios</a>
          <a href="#sobre-mi" className="hover:text-orange-600">Sobre mí</a>
          <a href="#beneficios" className="hover:text-orange-600">¿Qué obtienes?</a>
          <a href="#contacto" className="hover:text-orange-600">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Habla con Impacto, Conquista con tu Voz</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Transforma tu comunicación con nuestros cursos, talleres y asesorías personalizadas en oratoria.
        </p>
        <Button className="bg-orange-600 text-white px-6 py-2 text-lg rounded-2xl shadow hover:bg-orange-500">
          Comienza hoy
        </Button>
      </section>

      <section id="servicios" className="py-16 px-6 bg-orange-50">
        <h3 className="text-3xl font-semibold text-center mb-10">Servicios</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Cursos de Oratoria</h4>
              <p>Programas estructurados para mejorar tu expresión oral desde cero.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Charlas Motivacionales</h4>
              <p>Conferencias impactantes para inspirar y conectar con tu audiencia.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Coaching Personalizado</h4>
              <p>Acompañamiento 1:1 para pulir tu discurso y presencia escénica.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="sobre-mi" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Sobre mí</h3>
        <p className="max-w-3xl mx-auto text-lg">
          Soy [Tu Nombre], especialista en oratoria con más de 10 años formando líderes, empresarios y comunicadores. Mi misión es ayudarte a transmitir con claridad, seguridad y poder.
        </p>
      </section>

      <section id="beneficios" className="py-20 px-6 bg-orange-100 text-center">
        <h3 className="text-3xl font-semibold mb-10">¿Qué puedes obtener?</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="text-xl font-bold mb-2">Confianza Escénica</h4>
            <p>Aprende a controlar nervios y expresarte con seguridad.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Claridad de Mensaje</h4>
            <p>Estructura ideas de forma clara, persuasiva y memorable.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Impacto Emocional</h4>
            <p>Conecta con tu público y deja huella con tu historia.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contáctame</h3>
        <p className="mb-4">¿Listo para transformar tu forma de comunicarte?</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Tu nombre" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Mensaje" className="w-full p-3 border rounded-xl"></textarea>
          <Button className="bg-orange-600 text-white w-full py-2 rounded-2xl hover:bg-orange-500">
            Enviar mensaje
          </Button>
        </form>
      </section>

      <footer className="bg-white py-6 flex flex-col items-center text-sm text-gray-600">
        <div className="flex space-x-4 mb-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-orange-600" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 text-orange-600" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 text-orange-600" />
          </a>
        </div>
        <p>&copy; 2025 Poder de la Palabra. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}