// Traducciones al español de las fichas de plantas.
//
// Las claves coinciden una a una con src/data/plants.js. Lo que falte aquí cae
// al inglés, de modo que una traducción parcial degrada sin romper.

export default {
  'small-flour-mill-unit': {
    name: 'Unidad molinera compacta 6FSZ',
    scale: 'Aldea / nivel de granja',
    tagline: 'Una máquina, tres trabajos: moler, cerner, elevar.',
    intro:
      'La serie 6FSZ reúne molienda, cernido y autoalimentación neumática en un bastidor autoportante. Es la puerta de entrada a la producción comercial de harina: sin edificio, sin elevador de cangilones y sin sala de cernido aparte — basta una losa de hormigón y corriente trifásica para arrancar.',
    highlights: [
      'Banco de cilindros, cernidor y alimentación automática en un solo bastidor',
      'Consume 10,45–16,5 kW — compatible con un generador pequeño',
      'También muele sorgo, maíz, arroz y otros granos',
      'Se entrega premontada; la puesta en marcha suele llevar 2–3 días',
    ],
    flow: [
      'Entrada de trigo',
      'Limpieza de una pasada (opcional)',
      'Banco de cilindros',
      'Cernidor integrado',
      'Salida de harina y salvado',
    ],
    applications: [
      'Servicio de molienda en aldeas',
      'Venta de harina en la granja',
      'Cocinas institucionales',
      'Producción de prueba antes de escalar',
      'Molienda de varios granos por encargo',
    ],
    selection:
      'Elija el bastidor 40 cuando la potencia de red esté limitada a 15 kW o la parcela sea rural con acometida casi monofásica. Elija el bastidor 50 cuando tenga demanda confirmada por encima de 3 t/día y un suministro de 380 V que aguante 20 kW de pico. Las variantes C cambian superficie por altura: útiles en locales estrechos donde no se puede extender la línea.',
    faq: [
      {
        q: '¿Cuánto trigo necesita al día una unidad 6FSZ?',
        a: 'Con 320 kg/h de harina terminada y un turno de 10 horas, una 6FSZ-40 procesa aproximadamente 4,5–5 toneladas de trigo al día, incluidas las pérdidas de limpieza. Prevea almacenamiento para al menos 7 días de recepción.',
      },
      {
        q: '¿Puede moler harina integral?',
        a: 'Sí. Con el cernidor anulado o con una malla gruesa, la unidad produce harina integral con mayor rendimiento, normalmente 85–92% según la malla y la separación de cilindros.',
      },
      {
        q: '¿Qué suministro eléctrico requiere?',
        a: '380 V trifásica a 50 o 60 Hz. Para la 6FSZ-40A hace falta una acometida de 15 kVA; para la 50B prevea 25 kVA para cubrir la punta de arranque.',
      },
    ],
    models: {
      '6FSZ-40A': 'Unidad básica de un molino, descarga por gravedad',
      '6FSZ-40B': 'Añade elevación neumática y recogida por ciclón',
      '6FSZ-50A': 'Cilindros más largos, mayor producción',
      '6FSZ-50B': 'Versión totalmente neumática del bastidor 50',
      '6FSZ-40C': 'Huella compacta y columna más alta para locales ajustados',
      '6FSZ-50C': 'La mayor producción de la familia C (compacta)',
    },
  },

  'double-mill-unit': {
    name: 'Unidad de doble molino 6FTS',
    scale: 'Comercial pequeño',
    tagline: 'Salvado y endospermo separados desde la primera rotura.',
    intro:
      'El doble molino añade un colector de endospermo a la plataforma con alimentación automática. El trigo se parte y el endospermo se libera antes, de modo que las pasadas de reducción posteriores trabajan menos y generan menos polvo de salvado. En pruebas a ciegas el proceso da una harina visiblemente más blanca con el mismo rendimiento.',
    highlights: [
      'Separación salvado/endospermo integrada en el diagrama de flujo',
      'Dos bancos en un bastidor con transmisión compartida',
      '20,5–22 kW de potencia instalada total',
      'Granulometría constante para harina de pan al vapor y de fideos',
    ],
    flow: [
      'Entrada',
      'Limpieza (externa o integrada)',
      'Primera rotura (partido)',
      'Colector de endospermo',
      'Molino de reducción',
      'Cernidor',
      'Harina / salvado',
    ],
    applications: [
      'Harina para pan al vapor',
      'Harina para fideos',
      'Harina de panadería regional',
      'Molinos de aldea semiindustriales',
    ],
    selection:
      'El doble molino es el salto correcto cuando el cliente empieza a preguntar por el color de la harina y la calidad del gluten en lugar de solo por el precio del saco. Los 6–8 kW extra compran una granulometría más limpia que se paga más cara en retail.',
    faq: [
      {
        q: '¿Qué es la separación salvado-endospermo?',
        a: 'En lugar de moler todo junto, la primera rotura parte el trigo para poder clasificar el endospermo almidonoso antes de que se contamine con láminas de salvado. El resultado es menos cenizas en la corriente de harina superior.',
      },
      {
        q: '¿Hace falta una sala de limpieza aparte?',
        a: 'Con trigo por encima del 1,5% de impurezas, sí: una deschinadora pequeña y una criba vibratoria aguas arriba se amortizan en una campaña. El molino se entrega sin limpieza salvo especificación en contrario.',
      },
    ],
    models: {
      '6FSZ-10A': 'Configuración estándar con colector de endospermo',
      '6FSZ-10B': 'Columna más alta y mayor superficie de cernido',
    },
  },

  'five-mill-unit': {
    name: 'Unidad de cinco molinos 6FSZ-20',
    scale: 'Fábrica pequeña',
    tagline: 'Una minifábrica completa: limpieza, molienda 3B2M y cernido.',
    intro:
      'La unidad de cinco molinos es la configuración más pequeña que se comporta como una fábrica de harina real. Incluye limpieza — deschinadora por gravedad, despuntadora y deschinadora-lavadora — y el molino trabaja con un diagrama de 3 roturas / 2 reducciones, con tamiz cónico o cernidor de doble compartimento.',
    highlights: [
      'Sección de limpieza completa incluida',
      'Diagrama 3B2M — el estándar del sector para plantas pequeñas',
      'Tamiz cónico o cernidor de doble compartimento, a elección del cliente',
      '48–51 kW instalados; 16–18 t/día de producción',
    ],
    flow: [
      'Entrada de trigo',
      'Deschinadora por gravedad',
      'Despuntadora',
      'Deschinadora-lavadora',
      'Acondicionamiento',
      'Molienda 3B2M',
      'Cernido cónico o plano',
      'Harina / salvado',
    ],
    applications: [
      'Molino comarcal',
      'Molienda por contrato para panaderías locales',
      'Planta para varios granos',
      'Proyectos de seguridad alimentaria (ONG, gobierno)',
    ],
    selection:
      'Elija la versión de tamiz cónico si su trigo cambia cada semana: los tamices cónicos casi no retienen producto, así que cambiar de grano cuesta minutos y no horas, y la menor temperatura de cernido protege el gluten. Elija la versión de tamiz plano si vende uno o dos tipos fijos de harina y quiere una curva de cenizas más estrecha.',
    faq: [
      {
        q: '¿Qué significa 3B2M?',
        a: 'Tres pasadas de rotura y dos de reducción. Los cilindros de rotura abren el trigo y raspan el endospermo del salvado; los de reducción muelen el endospermo liberado hasta harina. 3B2M es el diagrama mínimo capaz de producir una harina superior limpia.',
      },
      {
        q: '¿Cuánta gente atiende una planta de cinco molinos?',
        a: 'Tres por turno: uno en recepción y limpieza, uno en la planta de molienda y uno en envasado. Con transporte neumático, dos es viable.',
      },
      {
        q: '¿Qué edificio necesita?',
        a: 'Una nave de 10 × 5 × 3,5 m con losa armada de 200 mm y 3 m de altura libre en la planta de molienda. La versión cónica no requiere torre.',
      },
    ],
    models: {
      '6FSZ-20 C (cónico)': 'Tamiz cónico: menor temperatura, retención casi nula, ideal para molienda por encargo',
      '6FSZ-20 F (plano)': 'Cernidor de doble compartimento: mejor clasificación, harina más estable, ideal para una línea fija',
    },
  },

  'stone-mill-unit': {
    name: 'Serie de molinos de piedra SFM',
    scale: 'Especialidad / premium',
    tagline: '28–30 rpm. Piedra fría. La harina que paga el mercado premium.',
    intro:
      'La molienda a la piedra no es nostalgia: es un argumento térmico. A 28–30 rpm la piedra genera una fracción del calor de un banco de cilindros, así que el gránulo de almidón y la red de gluten llegan intactos. La consecuencia comercial es una harina que se comporta distinto en la mano y se vende a 1,5–2 veces el precio.',
    highlights: [
      'Molienda lenta en frío que conserva vitaminas y gluten',
      'SFM-1+2 y SFM-3+4 combinan cilindros y piedra para mayor rendimiento',
      'Alimentación, cernido y molienda automáticos en una unidad (SFM-100)',
      'Ideal para líneas premium integrales, de trigo sarraceno y multigrano',
    ],
    flow: [
      'Entrada de trigo',
      'Limpieza',
      'Acondicionamiento',
      'Partido con cilindros (SFM-1+2 / 3+4)',
      'Recogida de endospermo',
      'Molienda a la piedra',
      'Cernido',
      'Harina',
    ],
    applications: [
      'Harina integral premium',
      'Harina de trigo sarraceno y multigrano',
      'Líneas ecológicas sin aditivos',
      'Exportación a mercados de dietética',
    ],
    selection:
      'Si vende a distribuidores de dietética, compre la línea de piedra y venda la temperatura. Si vende a una panadería que necesita volumen, compre una planta de cilindros y añada una unidad de piedra para una referencia premium. Intentar llevar una línea solo de piedra a 20 t/día es un error frecuente y caro: la capacidad de la piedra escala linealmente con el diámetro, no con la presión.',
    faq: [
      {
        q: '¿Por qué es más cara la harina de piedra?',
        a: 'La producción por kW de la piedra es aproximadamente un quinto de la de un banco de cilindros, así que el capital y la energía por tonelada son mayores. El mercado lo paga porque la harina conserva carotenoides y vitamina E en niveles que la molienda por cilindros destruye.',
      },
      {
        q: '¿Se daña la piedra?',
        a: 'Repique las piedras cada 300–500 horas de trabajo. Una piedra sin repicar embadurna en lugar de cortar, lo que sube la temperatura de la harina y anula todo el propósito.',
      },
      {
        q: '¿Pueden trabajar 24 horas las unidades SFM?',
        a: 'Sí, pero la temperatura superficial de la piedra debe mantenerse por debajo de 45 °C. La operación continua exige un buje refrigerado por agua o un carenado con aire forzado.',
      },
    ],
    models: {
      'SFM-100': 'Unidad de piedra única con alimentación y cernido automáticos',
      'SFM-1+2': '1 banco de cilindros + 2 molinos de piedra; el cilindro parte, la piedra muele',
      'SFM-3+4': '3 bancos de cilindros + 4 molinos de piedra; extracción de endospermo en una pasada',
    },
  },

  '20-30tpd-flour-plant': {
    name: 'Planta harinera 6FTDP 20–30 t/día',
    scale: 'Comercial medio',
    tagline: 'El caballo de batalla: de 3B2M a 4B4M, diagrama completamente documentado.',
    intro:
      'Esta es la planta que realmente compran los molinos comerciales. Tres modelos cubren 20, 25 y 30 toneladas al día; el diagrama sube de 3B2M con un cernidor de doble compartimento a 4B4M con dos. Los tres se entregan con el diagrama de limpieza y el de molienda dentro del paquete de documentación.',
    highlights: [
      '6FTDP-20 / 25 / 30 comparten repuestos y carcasas de cilindros',
      'Sección de limpieza completa: criba vibratoria, deschinadora, despuntadoras, deschinadora-lavadora',
      'Cernidores montados en planta — sin torre hasta 30 t/día',
      'Bastidores patentados 6FGP: menos energía por tonelada',
    ],
    flow: [
      'Recepción y prelimpieza',
      'Criba vibratoria',
      'Deschinadora por gravedad',
      'Dos despuntadoras',
      'Deschinadora-lavadora',
      'Acondicionamiento 12–24 h',
      'Molienda 4B4M',
      'Dos cernidores de doble compartimento',
      'Envasado',
    ],
    applications: [
      'Marcas regionales de harina',
      'Contratos de suministro a panaderías',
      'Harina para fideos y pan al vapor',
      'Harina granular estilo Xinjiang (6FGP)',
    ],
    selection:
      'Elija 30 t/día en lugar de 25 si espera crecer: el coste marginal de la pasada 4B adicional es pequeño frente al de una segunda planta más adelante. Elija 25 t/día si su edificio es fijo y 15 m es la longitud máxima de nave.',
    faq: [
      {
        q: '¿Cuál es la diferencia entre 3B3M y 4B4M?',
        a: 'Una pasada más de rotura y otra de reducción. 4B4M separa mejor las corrientes de harina superior, media y baja, y suele dar 1,5–2 puntos más de rendimiento superior.',
      },
      {
        q: '¿Cuánto dura la puesta en marcha?',
        a: '12–18 días en obra para una planta de 20–30 t/día, incluyendo montaje de estructura, alineación, marcha en vacío, prueba con carga y formación de operadores.',
      },
      {
        q: '¿Puede producir Atta y Maida?',
        a: 'Sí. El diagrama 6FTDP con purificador y un juego de mallas adecuado produce tanto Atta estilo chakki como Maida al 76% de rendimiento para mercados del sur de Asia.',
      },
    ],
    models: {
      '6FTDP-20': 'Molinos 6F2240/5, 1 cernidor de doble compartimento, 3B2M',
      '6FTDP-25': 'Molinos 6F2240/6, 2 cernidores de doble compartimento, 3B3M',
      '6FTDP-30': 'Molinos 1830/10, 2 cernidores de doble compartimento, 4B4M',
    },
  },

  '40-60tpd-flour-plant': {
    name: 'Planta harinera 6FTDP 40–60 t/día',
    scale: 'Industrial',
    tagline: 'Purificador, cepilladora de salvado y tres calidades de harina a la vez.',
    intro:
      'A 40 t/día el diagrama cruza un umbral: entra un purificador, lo que significa que ya separa endospermo por calidad y no solo por tamaño de partícula. La planta puede mantener tres calidades en producción simultánea — primera especial, segunda especial y estándar — y desnatar harina del corazón del trigo.',
    highlights: [
      'Cernidor plano de gran superficie + purificador + cepilladora de salvado',
      'Producción simultánea de 3 calidades con extracción de harina de corazón',
      'Diagramas 3B4M1S (40 t/día) y 4B5M1S1T (60 t/día)',
      'Variantes de cilindros de par simple o compuesto (neumático)',
    ],
    flow: [
      'Recepción',
      'Dos cribas',
      'Dos despuntadoras',
      'Dos deschinadoras',
      'Acondicionamiento',
      'Molienda 4B5M1S1T',
      'Cernidor plano de gran superficie',
      'Purificador',
      'Cepilladora de salvado',
      'Envasado de tres calidades',
    ],
    applications: [
      'Marcas nacionales de harina',
      'Suministro industrial a panadería y fideos',
      'Contratos de molienda para exportación',
      'Portafolios retail multicalidad',
    ],
    selection:
      'La versión de 60 t/día con cilindros compuestos neumáticos merece el sobreprecio si va a trabajar dos turnos: el acercamiento neumático elimina el error de operador más común, que es la presión manual desigual entre turnos.',
    faq: [
      {
        q: '¿Qué hace exactamente el purificador?',
        a: 'Estratifica la sémola sobre una criba vibrante con corriente de aire, separando trozos de endospermo puro de partículas contaminadas con salvado del mismo tamaño. Sin purificador no se puede hacer una harina superior realmente baja en cenizas.',
      },
      {
        q: '¿Por qué dos pasadas 1B a 60 t/día?',
        a: 'Duplicar la primera rotura permite ajustes de cilindro más suaves en cada pasada, lo que produce menos partículas finas de salvado. El salvado fino es la principal fuente de cenizas en la corriente superior.',
      },
      {
        q: '¿Es necesaria una torre?',
        a: 'A 60 t/día, sí: una estructura de 4–5 plantas o un bastidor de acero con los cernidores en la planta superior. El flujo por gravedad sigue siendo más barato de operar que la elevación neumática a esta escala.',
      },
    ],
    models: {
      '6FTDP-40': 'Molinos 6F2240/8, 1 cernidor plano de seis compartimentos, cernidor de control tipo 83, 3B4M1S',
      '6FTDP-60 (single)': 'Molinos 2240/12, 2 cernidores planos de cuatro compartimentos, 4B5M1S1T, 1B doble',
      '6FTDP-60 (compound)': 'Cilindros compuestos neumáticos, mismo diagrama, menor carga de operador',
    },
  },

  '60-500tpd-flour-plant': {
    name: 'Planta harinera completa 60–500 t/día',
    scale: 'Llave en mano industrial',
    tagline: 'Plantas llave en mano de varias alturas con tonelaje y consumo garantizados.',
    intro:
      'Por encima de 100 t/día la planta es un edificio, no una máquina. Haiyun diseña la estructura de varias alturas, el flujo de limpieza, el de molienda y el sistema neumático como un solo paquete, y luego lo pone en marcha con un tonelaje garantizado. Cada modelo de esta gama se entrega con un consumo eléctrico medido por tonelada de harina: el número que decide si la planta es rentable.',
    highlights: [
      '12 capacidades estándar de 60 a 500 t/día',
      'Limpieza en seco: 3 cribados, 2 despuntados, 1 cepillado, 2 deschinados, 2 acondicionamientos, 2 magnéticos, 1 neumático',
      'Molienda suave, separación fina, refinado en purificadores, fusión de corrientes homogéneas',
      'Llave en mano: diseño, fabricación, montaje, formación y puesta en marcha',
    ],
    flow: [
      'Recepción y pesaje',
      'Prelimpieza',
      'Limpieza 3 cribas / 2 despuntadoras / 1 cepillo',
      '2 deschinadoras',
      '2 acondicionamientos + reposo 16–24 h',
      '2 separadores magnéticos',
      'Separación neumática',
      'Molienda multipasada',
      'Purificadores',
      'Cernidores planos de gran superficie',
      'Envasado y paletizado',
    ],
    applications: [
      'Grupos molineros nacionales',
      'Programas gubernamentales de seguridad alimentaria',
      'Producción harinera orientada a exportación',
      'Molienda de trigo importado junto a puerto',
    ],
    selection:
      'Fíjese en la curva de potencia: el consumo por tonelada baja de 70–74 kWh a 60 t/día hasta 65–70 kWh a 500 t/día. A 300 t/día y 330 días de operación esa diferencia son unos 500.000 kWh al año — a menudo toda la diferencia de margen entre dos plantas por lo demás similares.',
    faq: [
      {
        q: '¿Cuánto se tarda en construir una planta de 300 t/día?',
        a: 'Normalmente 8–11 meses desde el contrato hasta la primera harina: 8–10 semanas de diseño y aprobación, 14–18 semanas de fabricación, 6–10 semanas de obra civil en paralelo, luego 8–12 semanas de montaje y 3–4 de puesta en marcha.',
      },
      {
        q: '¿Puede la planta trabajar con trigo importado?',
        a: 'Sí. El trigo importado suele implicar mezclar 2–4 orígenes, así que el diseño incluye básculas dosificadoras electrónicas y 4–6 silos de acondicionamiento con adición de agua independiente.',
      },
      {
        q: '¿Qué garantía se ofrece?',
        a: 'Tonelaje contractual con el rendimiento contractual, verificado en una prueba de funcionamiento continuo de 72 horas, más 12 meses de garantía en piezas mecánicas y 24 meses en los juegos de cilindros.',
      },
    ],
    models: {},
  },
};
