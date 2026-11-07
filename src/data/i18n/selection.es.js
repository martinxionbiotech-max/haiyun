// Traducciones al español de las matrices de verificación de selección.
//
// Indexadas por el `id` del grupo en src/data/selection.js y luego por slug de
// opción. Los códigos de modelo se mantienen en latino; solo se traduce la prosa.

export default {
  'pre-cleaning-screens': {
    title: 'Cribas de prelimpieza: cilíndrica frente a vibratoria rotativa',
    intro:
      'La primera etapa decide cuánta suciedad sigue circulando aguas abajo. Ambas máquinas funcionan, pero con economías distintas según cuánto grano reciba por hora.',
    options: {
      'drum-sieve-pre-cleaner': {
        choose:
          'Recepciones por encima de 25 t/h. El tambor giratorio tolera el flujo irregular, no necesita equilibrado y ocupa poca superficie.',
        mind:
          'Va mal con grano húmedo o apelmazado: el tambor se ciega y la limpieza deja de limpiar. Necesita acceso para limpiar la malla.',
      },
      'rotary-vibrating-screen': {
        choose:
          'Recepciones por debajo de 25 t/h con grano de humedad estable. Más barata que el tambor para la misma capacidad y las mallas se cambian antes.',
        mind:
          'La vibración pasa a la estructura: hace falta un bastidor reforzado. El flujo irregular le resta eficacia más que al tambor.',
      },
    },
    rule:
      'Por encima de 25 t/h de recepción, criba cilíndrica. Por debajo, la vibratoria cuesta menos para la misma eficacia. Con grano húmedo, la vibratoria gana en cualquier caso.',
  },

  'primary-screens': {
    title: 'Cribas primarias: autoequilibrada frente a plana rotativa',
    intro:
      'La segunda etapa decide cuánta impureza gruesa llega a la deschinadora. La diferencia entre ambas no es la eficacia, sino qué le hacen a su edificio.',
    options: {
      'self-balancing-vibrating-screen': {
        choose:
          'Gran capacidad en espacio ajustado. Los contrapesos anulan la reacción sobre la estructura, así que puede montarse en forjado sin apoyo masivo.',
        mind:
          'Mantenimiento más delicado: rodamientos y contrapesos exigen personal cualificado. Cuesta más en la compra.',
      },
      'plane-rotary-sifter': {
        choose:
          'Plantas pequeñas y medianas donde prima la sencillez. El movimiento plano rotativo trata el grano con más suavidad y apenas transmite vibración.',
        mind:
          'Menos capacidad por unidad de superficie, así que para tonelajes altos hace falta una máquina grande. Peor comportamiento con flujo irregular.',
      },
    },
    rule:
      'Autoequilibrada cuando hacen falta capacidad y libertad estructural; plana rotativa cuando priman suavidad y sencillez en tonelajes pequeños.',
  },

  'destoning': {
    title: 'Deschinado: seco por gravedad frente a lavado húmedo',
    intro:
      'Eliminar piedras es obligatorio. Lavar o no lavar es una decisión económica que depende de la carga de suciedad del trigo y del mercado al que sirve.',
    options: {
      'gravity-destoner': {
        choose:
          'Cualquier línea de limpieza en seco. La clasificación por aire más la cama vibrante separan las piedras por densidad sin agua, sin efluentes y sin coste de secado.',
        mind:
          'No elimina la suciedad superficial, las bacterias ni la arena incrustada. Si su trigo está muy contaminado con tierra, el deschinado en seco deja la suciedad en el grano.',
      },
      'wheat-washer-destoner-dryer': {
        choose:
          'Trigo con alta contaminación de tierra, o cuando la harina debe cumplir un recuento bacteriano bajo o una especificación de cenizas premium. El lavado retira suciedad que ningún proceso en seco alcanza.',
        mind:
          'Añade 3–6% de humedad que hay que secar: cuesta 8–15 kWh/t y exige centrífuga y secador. Genera efluentes que necesitan tratamiento. La inversión es 4–6 veces la del deschinado en seco.',
      },
    },
    rule:
      'El deschinado en seco es lo correcto para trigo limpio y harina estándar. El lavado húmedo solo se paga con carga alta de suciedad o cuando el mercado prima el recuento bacteriano bajo.',
  },

  'air-separation': {
    title: 'Separación por aire: circuito cerrado frente a aspiración',
    intro:
      'Ambas máquinas retiran impurezas ligeras con aire. La diferencia es a dónde va ese aire, y cuánto cuesta en invierno.',
    options: {
      'cycling-air-separator': {
        choose:
          'Clima frío o producción sensible al polvo. El aire vuelve al circuito, así que no entra frío en la nave ni se emite polvo.',
        mind:
          'Más compleja: ventilador, ciclones y equilibrado del circuito. Exige un diseño más cuidadoso que la aspiración simple.',
      },
      'aspiration-separator': {
        choose:
          'Cuando ya hay filtro de mangas y la nave tiene margen de aspiración. Máquina sencilla con el mínimo de piezas móviles.',
        mind:
          'El aire de una sola pasada se lleva el calor de la nave y carga el filtro. En clima frío eso es dinero real.',
      },
    },
    rule:
      'Circuito cerrado en plantas frías o sensibles al polvo; aspiración de una pasada donde el filtro ya asume la carga.',
  },

  'surface-cleaning': {
    title: 'Limpieza superficial: despuntadora frente a cepillo',
    intro:
      'Ambas retiran suciedad de la superficie del grano. La elección depende de la dureza del trigo y del espacio que tenga en el edificio.',
    options: {
      'horizontal-wheat-scourer': {
        choose:
          'Trigo duro con suciedad adherida en el surco. La fricción intensa retira lo que el cepillo no alcanza.',
        mind:
          'Con exceso de presión parte el grano y sube el porcentaje de partidos. Hay que ajustarla por lote.',
      },
      'wheat-brush-scourer-combination': {
        choose:
          'Trigo blando o edificio ajustado. Una sola máquina combina cepillo y despuntado, ahorrando superficie e inversión.',
        mind:
          'Actúa más suavemente, así que rinde peor con trigo muy sucio. Más compleja de mantener que una despuntadora sola.',
      },
    },
    rule: 'Trigo duro, despuntadora. Trigo blando o edificio estrecho, combinada de cepillo y despuntado.',
  },

  'roller-mills': {
    title: 'Bancos de cilindros: simple frente a doble',
    intro:
      'Dos cilindros en lugar de uno no es «mejor»: es otro compromiso entre superficie, número de pasadas e inversión.',
    options: {
      '6f-single-roller-mill': {
        choose:
          'Hasta 20 t/día y una o dos pasadas. Máquina sencilla, barata de comprar y fácil de entender.',
        mind:
          'Cada pasada necesita su propio banco, así que más tonelaje significa más máquinas, más superficie y más puntos de mantenimiento.',
      },
      'fmfq-double-roller-mill': {
        choose:
          'Por encima de 20 t/día. Dos cilindros en una carcasa cubren dos pasadas, ahorrando superficie de nave y coste estructural.',
        mind:
          'Más caro de comprar y exige mantenimiento más cualificado. Una parada afecta a dos pasadas a la vez.',
      },
    },
    rule:
      'Hasta 20 t/día y dos pasadas, simple. Por encima, doble sin excepción: el ahorro en obra supera la diferencia de precio.',
  },

  'plansifters': {
    title: 'Cernidores: un compartimento, dos compartimentos y plano de gran superficie',
    intro:
      'El cernidor es el mayor consumidor de superficie en la planta de molienda. La elección depende de cuántas calidades separa y de si tiene altura.',
    options: {
      'single-bin-plansifter': {
        choose:
          'Una o dos calidades y tonelaje pequeño. Montaje sencillo y acceso rápido a las mallas.',
        mind:
          'Poca superficie de cernido por unidad de espacio ocupado. Al crecer el tonelaje obliga a ampliar la planta.',
      },
      'double-bin-plansifter': {
        choose:
          'Dos o tres calidades en tonelaje medio. Dos compartimentos en un bastidor dan más superficie sin duplicar la huella.',
        mind:
          'El cambio de mallas lleva más tiempo que en uno simple. Exige equilibrado más cuidadoso.',
      },
      'high-square-plansifter': {
        choose:
          'Tonelaje industrial y muchas calidades. El montaje vertical da la máxima superficie de cernido con la mínima huella.',
        mind:
          'Necesita altura de edificio y, normalmente, esquema de varias plantas. Montaje y mantenimiento más complejos.',
      },
    },
    rule:
      'Regla práctica: 1 m² de superficie de cernido por cada 0,8 t/día para un diagrama 4B5M. Elija el tipo por número de calidades y altura disponible, no por precio de la máquina.',
  },

  'byproduct-treatment': {
    title: 'Recuperación de salvado y desprendimiento de sémola',
    intro:
      'Estas dos máquinas se confunden a menudo, pero resuelven problemas distintos en puntos distintos del diagrama. No son alternativas.',
    options: {
      'bran-finisher': {
        choose:
          'Al final de la línea, tras la última pasada de reducción. Retira el endospermo residual del salvado y sube el rendimiento total.',
        mind:
          'No sustituye al desprendimiento. Si se ajusta demasiado agresiva, tritura el salvado y sube las cenizas.',
      },
      'impact-detacher': {
        choose:
          'Entre cilindros y cernidor. Rompe las escamas que producen los cilindros lisos para que el cernidor pueda separarlas.',
        mind:
          'No extrae endospermo del salvado. A velocidad excesiva muele la sémola hasta harina de calidad equivocada.',
      },
    },
    rule:
      'Se complementan, no se sustituyen: los desprendedores van entre cilindros y cernidor; las cepilladoras de salvado, al final de la línea.',
  },
};
