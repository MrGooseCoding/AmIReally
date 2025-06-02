// About Us - Kike & Guillermo

const aboutUs = {
  team: {
    names: ["Kike", "Guillermo"],
    from: "Sevilla",
    age: 16,
    passion: "Nos flipa lo que hacemos y le damos todo para crear algo que de verdad funcione."
  },

  project: {
    name: "Am I Really?",
    description: `Estamos creando una app para que cada persona pueda registrar lo que hace día a día,  
      meter sus variables reales, y al cabo de 21 días la app le diga cuál ha sido la mejor combinación de hábitos.  
      Queremos que sirva para entender mejor cómo funcionan tus rutinas y poder optimizarlas sin complicaciones.`,
    whyItMatters: `Porque no hay una fórmula mágica que funcione para todos, y mucho menos  
      una que te diga cómo mejorar basándose en tus datos reales.  
      Nuestra app es simple, práctica y pensada para gente que quiere resultados sin perder tiempo.`,
    vision: `La idea es darte una herramienta real para que entiendas tu día a día y puedas  
      mejorar sin rollos raros, a tu ritmo y con tu propia información.`,
    secretPlan: `Claro que queremos ganar pasta, pero eso es lo de menos.  
      Lo importante es que la app sea útil y llegue a la gente que la necesita.`
  },

  message: function() {
    return `Si quieres llevar el control de tu vida sin complicarte,  
    y saber qué te funciona de verdad, esta app es para ti.  
    Estamos aquí para ayudarte a ser mejor cada día, sin falsas promesas, solo datos reales y sentido común.`;
  }
};

console.log(aboutUs.message());
//           <div className="days-left">⏳ Días restantes: {daysLeft}</div>
//           </div>