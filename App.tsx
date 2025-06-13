
import React from 'react';
import DecalogueItem from './components/DecalogueItem';
import { DecalogueItemData } from './types';

const decalogueData: DecalogueItemData[] = [
  {
    id: 1,
    title: "Planificar con Coherencia: El Mapa de Nuestra Misión.",
    description: "Toda clase es parte de un plan mayor. Nuestros propósitos (lo que nosotros como docentes hacemos) y los objetivos (lo que esperamos que los cadetes logren) deben estar alineados con los contenidos, las estrategias y la evaluación. La coherencia no es una formalidad, es la garantía de que cada paso que damos tiene un destino claro: el perfil profesional que buscamos formar.",
    iconClass: "fa-solid fa-sitemap",
    textBgClass: "bg-sky-100 dark:bg-sky-900",
    textFgClass: "text-sky-800 dark:text-sky-200",
    iconBgClass: "bg-sky-500 dark:bg-sky-700",
    iconFgClass: "text-sky-50 dark:text-sky-100",
  },
  {
    id: 2,
    title: "Variar para Profundizar: Más Allá de la Exposición.",
    description: "La enseñanza directa (exposición) es útil, pero no suficiente. Debemos alternar con estrategias indirectas como el Estudio de Casos y la Simulación. Como afirma el material de la Clase 1, \"lo que aprenden y las operaciones cognitivas que realizan los estudiantes son muy distintas según utilicemos una u otra estrategia\". Variar no es un adorno, es una necesidad para un aprendizaje profundo.",
    iconClass: "fa-solid fa-layer-group",
    textBgClass: "bg-purple-100 dark:bg-purple-900",
    textFgClass: "text-purple-800 dark:text-purple-200",
    iconBgClass: "bg-purple-500 dark:bg-purple-700",
    iconFgClass: "text-purple-50 dark:text-purple-100",
  },
  {
    id: 3,
    title: "Enseñar con Propósito: Conectar el Aula con la Calle.",
    description: "Cada contenido debe responder a las preguntas: \"¿Por qué un futuro oficial necesita saber esto? ¿Cómo se relaciona con su rol profesional?\". La selección de contenidos, como vimos en el Glosario, \"está orientada por el tipo de profesionales que queremos formar\". La relevancia es el puente entre el conocimiento teórico y su aplicación práctica en el campo.",
    iconClass: "fa-solid fa-bullseye",
    textBgClass: "bg-emerald-100 dark:bg-emerald-900",
    textFgClass: "text-emerald-800 dark:text-emerald-200",
    iconBgClass: "bg-emerald-500 dark:bg-emerald-700",
    iconFgClass: "text-emerald-50 dark:text-emerald-100",
  },
  {
    id: 4,
    title: "Aprender Haciendo: De la Teoría a la Acción Reflexiva.",
    description: "Las estrategias indirectas se basan en la premisa de que el aprendizaje se consolida con la práctica. La simulación persigue el objetivo de \"aprender haciendo\". No se trata solo de ejecutar una técnica, sino de \"vivir experiencias necesarias para su propia transformación\" (Díaz Bordenavem, 1985), enfrentando la incertidumbre y la toma de decisiones.",
    iconClass: "fa-solid fa-hands-helping",
    textBgClass: "bg-rose-100 dark:bg-rose-900",
    textFgClass: "text-rose-800 dark:text-rose-200",
    iconBgClass: "bg-rose-500 dark:bg-rose-700",
    iconFgClass: "text-rose-50 dark:text-rose-100",
  },
  {
    id: 5,
    title: "Usar el Estudio de Casos para el Dilema, no para la Receta.",
    description: "Un caso no es un mero \"ejemplo breve\" o un ejercicio con una única respuesta correcta. Su verdadero poder reside en presentar \"situaciones o problemas de la vida real\" que exigen \"un análisis profundo y riguroso\" y la toma de decisiones, a menudo frente a dilemas éticos, como vimos en el caso del allanamiento.",
    iconClass: "fa-solid fa-scale-balanced",
    textBgClass: "bg-amber-100 dark:bg-amber-900",
    textFgClass: "text-amber-800 dark:text-amber-200",
    iconBgClass: "bg-amber-500 dark:bg-amber-700",
    iconFgClass: "text-amber-50 dark:text-amber-100",
  },
  {
    id: 6,
    title: "Simular para Proteger: Entrenar en un Entorno Seguro.",
    description: "La simulación es \"una representación que selecciona características cruciales de una situación profesional dentro de un entorno protegido y sin riesgos\" (Clase 2). Esta seguridad permite a los cadetes cometer errores, experimentar consecuencias y aprender de ellas sin poner en riesgo su integridad, la de terceros o el éxito de un procedimiento real.",
    iconClass: "fa-solid fa-shield-halved",
    textBgClass: "bg-indigo-100 dark:bg-indigo-900",
    textFgClass: "text-indigo-800 dark:text-indigo-200",
    iconBgClass: "bg-indigo-500 dark:bg-indigo-700",
    iconFgClass: "text-indigo-50 dark:text-indigo-100",
  },
  {
    id: 7,
    title: "La Reflexión es la Clave: El Poder del Momento Post-Activo.",
    description: "La simulación no termina cuando acaba la escena. El aprendizaje se cristaliza en el momento post-activo, en la \"instancia de intercambio, análisis y reflexión colectiva\". Es aquí donde se conectan la teoría y la práctica, se analizan las decisiones y se construyen nuevos aprendizajes. Sin reflexión, una simulación es solo una anécdota.",
    iconClass: "fa-solid fa-brain",
    textBgClass: "bg-lime-100 dark:bg-lime-900",
    textFgClass: "text-lime-800 dark:text-lime-200",
    iconBgClass: "bg-lime-500 dark:bg-lime-700",
    iconFgClass: "text-lime-50 dark:text-lime-100",
  },
  {
    id: 8,
    title: "Formular Preguntas Críticas: El Instructor como Guía.",
    description: "Nuestro rol debe trascender al de mero transmisor. Debemos ser facilitadores que, a través de \"consignas críticas\", obliguen a los cadetes a \"revisar y analizar ideas importantes y problemas\". En lugar de preguntar \"¿Cuál es el artículo del código?\", preguntemos \"¿Qué dilemas enfrentó el oficial en esa situación y qué alternativas tenía?\".",
    iconClass: "fa-solid fa-comments",
    textBgClass: "bg-pink-100 dark:bg-pink-900",
    textFgClass: "text-pink-800 dark:text-pink-200",
    iconBgClass: "bg-pink-500 dark:bg-pink-700",
    iconFgClass: "text-pink-50 dark:text-pink-100",
  },
  {
    id: 9,
    title: "Buscar la Transferencia: El Aprendizaje que Perdura.",
    description: "El objetivo final es el \"aprendizaje profundo que genera transferencia\" (Melina Furman). Queremos que lo aprendido en la escuela de cadetes \"se pueda poner en juego en otros contextos, sirva para el más allá de la escuela, es decir, para la vida\". Para ello, los cadetes deben relacionar, aplicar, reflexionar y explicar con sus propias palabras.",
    iconClass: "fa-solid fa-right-left",
    textBgClass: "bg-teal-100 dark:bg-teal-900",
    textFgClass: "text-teal-800 dark:text-teal-200",
    iconBgClass: "bg-teal-500 dark:bg-teal-700",
    iconFgClass: "text-teal-50 dark:text-teal-100",
  },
  {
    id: 10,
    title: "Evaluar para Mejorar: La Evaluación como Proceso Formativo.",
    description: "La evaluación no es solo la nota final. Debemos incorporar la evaluación formativa a lo largo del proceso para \"conocer qué aprendieron los alumnos, qué se llevan\". Esto nos permite ajustar nuestras estrategias y dar retroalimentación constructiva, centrada en las fortalezas y los puntos a resolver, describiendo conductas sin juzgar a la persona.",
    iconClass: "fa-solid fa-clipboard-check",
    textBgClass: "bg-orange-100 dark:bg-orange-900",
    textFgClass: "text-orange-800 dark:text-orange-200",
    iconBgClass: "bg-orange-500 dark:bg-orange-700",
    iconFgClass: "text-orange-50 dark:text-orange-100",
  }
];

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12 py-8 bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-xl rounded-b-xl dark:from-sky-700 dark:to-cyan-600">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Decálogo para el Instructor Policial
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-2 opacity-90 font-medium">
          Forjando Criterio a través de la Enseñanza Estratégica
        </h2>
        <div className="mt-6 text-sm sm:text-md md:text-lg opacity-80">
          <p><span className="font-semibold">Profesor:</span> Leandro RODRIGUEZ</p>
          <p>
            <span className="font-semibold">Alumno:</span> Ezequiel VALLEJOS 
            <span className="ml-2 px-2 py-0.5 bg-sky-400 dark:bg-sky-500 text-xs font-bold rounded-sm text-white dark:text-sky-100 align-middle">
              PFA
            </span>
          </p>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto">
        {decalogueData.map((item, index) => (
          <DecalogueItem 
            key={item.id}
            data={item}
            isReversed={index % 2 !== 0}
          />
        ))}
      </main>

      <footer className="text-center mt-16 py-8 border-t border-slate-300 dark:border-slate-700">
        <p className="text-slate-700 dark:text-slate-300 font-semibold">Campus Educativo MinSeg Virtual</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">Ministerio de Seguridad de la Nación</p>
      </footer>
    </div>
  );
};

export default App;