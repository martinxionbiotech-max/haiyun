// Traducciones al español de las fichas de equipos.
// Las claves coinciden una a una con src/data/equipment.js. Lo que falte cae al inglés.
export default {
  'drum-sieve-pre-cleaner': {
    name: 'Prelimpiador de tambor rotativo',
    stage: 'Recepción / prelimpieza',
    tagline:
      'Primera línea de defensa: paja, cuerdas y polvo fuera antes de que el trigo llegue a cualquier otro equipo.',
    intro:
      'El tambor rotativo SCQY es la tonelada de limpieza más barata que se puede comprar. Retira paja gruesa, cuerdas, mazorcas y polvo antes de que el trigo llegue a cualquier equipo de precisión, y eso es lo que evita que las telas finas situadas aguas abajo se cieguen.',
    selection:
      'Dimensione a 1,3× su caudal punta de recepción: durante la campaña los prelimpiadores se puentean a menudo y no conviene ser la razón por la que un camión espera.',
    maintenance:
      'Revise el tamiz del tambor cada 200 horas; sustitúyalo cuando la deformación de los orificios supere el 15%. Engrase los rodamientos cada 500 horas.',
    faq: [
      {
        q: '¿Sustituye el tamiz de tambor a una criba vibratoria?',
        a: 'No. Solo retira impurezas gruesas y de gran tamaño. La clasificación por tamaño de las impurezas pequeñas requiere una criba vibratoria aguas abajo.',
      },
    ],
  },
  'rotary-vibrating-screen': {
    name: 'Criba vibratoria rotativa',
    stage: 'Prelimpieza',
    tagline:
      'Clasificación por tamaño de alta capacidad para trigo, mijo, sorgo y oleaginosas.',
    intro:
      'Criba vibratoria rotativa de dos o tres pisos que clasifica por tamaño de partícula. Se emplea mucho más allá del trigo —el mismo bastidor admite mijo, sorgo, grano para malteado y granulado químico—, por eso suele ser la segunda máquina que se compra después de un tamiz de tambor.',
    selection:
      'Los tres pisos justifican el coste marginal cuando además hay que clasificar impurezas pequeñas por debajo de 1,5 mm: una unidad de dos pisos las deja en el trigo.',
    maintenance:
      'Compruebe la tensión de las telas cada semana; una tela floja es la primera causa de fisuración prematura del bastidor. Sustituya los amortiguadores de goma una vez al año.',
    faq: [
      {
        q: '¿Cuál es la diferencia entre capacidad de prelimpieza y capacidad de limpieza?',
        a: 'La capacidad de prelimpieza supone grano poco contaminado, recién llegado del campo. La capacidad de limpieza supone grano que ya ha pasado una primera etapa y se clasifica hasta el estándar de entrada al molino.',
      },
    ],
  },
  'self-balancing-vibrating-screen': {
    name: 'Criba vibratoria autoequilibrada',
    stage: 'Limpieza primaria',
    tagline:
      'La máquina de referencia para separar impurezas grandes, medianas y ligeras.',
    intro:
      'La TQLZ es la criba de referencia de la industria harinera, y con razón: un accionamiento autoequilibrado con contrapesos impide que el bastidor transmita vibración al edificio, por lo que puede montarse sobre una entreplanta sin bancada de aislamiento independiente.',
    selection:
      'Ajuste la capacidad de limpieza (no la de prelimpieza) al caudal del molino. Una planta de 30 t/d necesita como mínimo una TQLZ100×150, dimensionada por la columna de limpieza a 12 t/h en una ventana efectiva de 10 horas de trabajo.',
    maintenance:
      'Las gomas de rebote y los marcos de tela son consumibles: prevea un juego cada 18 meses en funcionamiento a dos turnos.',
    faq: [
      {
        q: '¿Por qué la capacidad de limpieza es muy inferior a la de prelimpieza?',
        a: 'La limpieza exige que el grano permanezca mucho más tiempo sobre la tela para que las impurezas pequeñas puedan pasar. Por eso la misma superficie de cribado admite aproximadamente un tercio del caudal cuando hace limpieza real y no un simple desbaste.',
      },
    ],
  },
  'cycling-air-separator': {
    name: 'Separador de aire en circuito cerrado',
    stage: 'Limpieza primaria',
    tagline: 'Aire en circuito cerrado. Eliminación de polvo sin colector.',
    intro:
      'El TFXH separa impurezas de baja densidad mediante un circuito de aire cerrado: el aire se recircula en lugar de expulsarse. Eso significa que no hace falta colector externo, no hay pérdida de calor a la atmósfera y no hay penacho de polvo sobre el vecindario, algo decisivo para plantas dentro del casco urbano.',
    selection:
      'Elija la versión de circuito cerrado siempre que la planta esté en un entorno residencial o de grado alimentario. La alternativa de aspiración abierta cuesta menos al comprarla y mucho más al tramitarla.',
    maintenance:
      'Limpie la cámara de sedimentación en cada turno; una cámara cargada reduce la eficiencia de separación un 30% o más sin dar ningún aviso.',
    faq: [
      {
        q: '¿Necesita un filtro de mangas un separador de aire en circuito cerrado?',
        a: 'No. La fracción pesada de polvo cae en una tolva de sedimentación. Solo se necesita un pequeño filtro secundario si la máquina descarga el aire en una sala estanca.',
      },
    ],
  },
  'gravity-destoner': {
    name: 'Despedregador clasificador por gravedad',
    stage: 'Limpieza primaria',
    tagline: 'La máquina que decide cuánta ceniza acaba en su harina.',
    intro:
      'Las piedras tienen el mismo tamaño que el trigo y pesan más, así que solo una separación combinada de aire y vibración puede extraerlas. Omitir el despedregador o quedarse corto en su dimensionado es la causa más frecuente de ceniza excesiva en molinos pequeños, y el daño es invisible hasta que un cliente se queja de arenilla.',
    selection:
      'Las variantes “B” rinden aproximadamente un 60% más de capacidad con la misma anchura de tela, gracias a un mayor caudal de aire y una mesa más inclinada. Empléelas cuando la restricción sea la superficie en planta y no la altura libre.',
    maintenance:
      'Sustituya la tela cuando la eficiencia de eliminación de piedras baje del 95%; haga la prueba cada trimestre añadiendo 200 piedras contadas a una muestra.',
    faq: [
      {
        q: '¿Cómo sé si mi despedregador funciona?',
        a: 'Tome una muestra de 1 kg en la salida de piedras. Debe ser casi por completo piedras y vidrio. Si aparecen más de 10 granos de trigo por cada 100 piedras, el caudal de aire es excesivo o el ángulo de la mesa es incorrecto.',
      },
      {
        q: '¿Por qué importa tanto la ceniza?',
        a: 'La ceniza es el residuo mineral tras la incineración: en esencia, un indicador de la contaminación por salvado. Una harina patent del 0,55% de ceniza y otra del 0,70% se parecen, pero se comportan de forma muy distinta en panadería y su precio difiere un 8–12%.',
      },
    ],
  },
  'plane-rotary-sifter': {
    name: 'Cernidor plano rotativo',
    stage: 'Limpieza primaria',
    tagline: 'Suave, cerrado y sin polvo: la criba discreta.',
    intro:
      'El TQLM separa impurezas grandes y pequeñas mediante un movimiento rotativo plano y lento dentro de una caja de cribas totalmente cerrada. Al no haber lanzamiento vertical, daña el grano mucho menos que una criba vibratoria, y por eso se prefiere en limpieza de semillas y cebada maltera.',
    selection:
      'Úselo donde el daño al grano importe: semilla, cebada maltera, trigos especiales en los que la integridad del grano tiene prima. Para trigo comercial a granel basta la criba vibratoria, más barata.',
    maintenance:
      'El accionamiento excéntrico va en baño de aceite; cambie el aceite cada 2.000 horas y revise cada trimestre la fatiga del acoplamiento flexible.',
    faq: [
      {
        q: '¿Puede el TQLM sustituir por completo a una criba vibratoria?',
        a: 'En términos de capacidad no: es una máquina de menor caudal. Suele instalarse como criba de segunda etapa o donde la integridad del grano es un requisito comercial.',
      },
    ],
  },
  'horizontal-wheat-scourer': {
    name: 'Descascarillador horizontal de trigo',
    stage: 'Limpieza de superficie',
    tagline:
      'Elimina bacterias, insectos y polvo de penacho de la superficie del grano.',
    intro:
      'Un rotor horizontal lanza el trigo contra un tambor perforado y frota la superficie y el extremo del penacho. No solo retira la suciedad visible: elimina una parte medible de la carga microbiana superficial, y por eso los molinos que buscan exportación o certificación de seguridad alimentaria especifican dos pasos de descascarillado.',
    selection:
      'Golpeo ligero para trigo blando y candeal cuando la rotura es costosa; golpeo fuerte para trigo duro con contaminación superficial visible. Las unidades de doble tambor son dos máquinas en un bastidor y comparten una única entrada.',
    maintenance:
      'Gire o sustituya los batidores cada 800–1.200 horas. Los batidores desgastados se redondean y dejan de frotar por completo, pero siguen consumiendo la potencia nominal.',
    faq: [
      {
        q: '¿Cuánto reduce la ceniza el descascarillado?',
        a: 'Un solo paso de golpeo fuerte elimina normalmente 0,03–0,06 puntos porcentuales de ceniza en la harina integral. Dos pasos con un cepillado intermedio pueden llegar a 0,08.',
      },
      {
        q: '¿Rompe trigo el descascarillador?',
        a: 'Con la holgura correcta, la rotura se mantiene por debajo del 0,5%. Un exceso de rotura significa casi siempre que la holgura entre tambor y batidor se ha cerrado por desgaste.',
      },
    ],
  },
  'grain-length-grader': {
    name: 'Clasificador de granos por longitud',
    stage: 'Limpieza fina',
    tagline: 'Retira granos partidos, chupados y enfermos solo por longitud.',
    intro:
      'Un cilindro de alveolos clasifica por longitud del grano, algo que ninguna tela puede hacer. Extrae granos partidos, granos chupados próximos al cornezuelo y grano enfermo ligero que, de otro modo, elevaría la ceniza y degradaría el color de la harina.',
    selection:
      'Imprescindible en producción de semilla y en cualquier mercado que clasifique a la vista. En molienda comercial corriente es opcional, pero se amortiza rápido con trigo de alto valor.',
    maintenance:
      'Los alveolos se desgastan en el borde de ataque; rectifique o sustituya los cilindros cada 3–5 campañas según el tonelaje.',
    faq: [
      {
        q: '¿Cuál es la diferencia entre las dos cifras de separación?',
        a: 'Partido en entero es la cantidad de grano partido que queda en la corriente aceptada (cuanto menor, mejor). Entero en partido es la cantidad de grano bueno que se pierde en la corriente de rechazo (también cuanto menor, mejor). Ambas cifras definen la eficiencia de la máquina.',
      },
    ],
  },
  'wheat-washer-destoner-dryer': {
    name: 'Lavador, despedregador y escurridor de trigo',
    stage: 'Limpieza húmeda',
    tagline: 'Lava la hendidura. Nada más llega dentro de ella.',
    intro:
      'La hendidura del grano de trigo retiene suciedad, residuos de plaguicidas y microorganismos que ningún proceso en seco alcanza. El lavador-despedregador la inunda, separa por flotación las impurezas ligeras, hunde las piedras y después centrifuga el agua superficial hasta una humedad controlada.',
    selection:
      'La limpieza húmeda cuesta agua, tratamiento de efluentes y un 3–5% más de carga de secado. Se justifica cuando el trigo llega con tierra visible en la hendidura, cuando el molino atiende un mercado premium o de exportación, o cuando los límites de residuos de plaguicidas se exigen por contrato.',
    maintenance:
      'El consumo de agua es de 0,8–1,2 m³ por tonelada de trigo. Prevea una balsa de sedimentación y una bomba de recirculación: el vertido de un solo uso ya es ilegal en la mayoría de las jurisdicciones.',
    faq: [
      {
        q: '¿Se puede prescindir de la limpieza húmeda?',
        a: 'Sí: con limpieza en seco y dos pasos de descascarillado se alcanza buena calidad comercial. La limpieza húmeda es lo que separa una harina de commodity de una harina que supera los análisis de residuos para exportación.',
      },
      {
        q: '¿Cuánta agua consume?',
        a: 'Cuente con 0,8–1,2 m³ por tonelada de trigo procesado. Una planta de 30 t/d necesita por tanto unos 30 m³/día, la mayor parte recuperable con un circuito de sedimentación y filtración.',
      },
    ],
  },
  'automatic-dampening-system': {
    name: 'Sistema automático de humidificación con microordenador',
    stage: 'Acondicionamiento',
    tagline:
      'Medición de humedad por microondas, control del agua a ±0,2%, sin conjeturas del operador.',
    intro:
      'El rendimiento de la molienda se decide antes de que el trigo llegue a los cilindros. El DZS mide la humedad de entrada con un sensor de microondas, calcula el agua necesaria para alcanzar la humedad de acondicionamiento objetivo y la dosifica de forma continua, con una precisión de ±0,2%, más fina que la de cualquier operador con una jarra y un medidor de humedad.',
    selection:
      'Si trabaja con más de un origen de trigo, no es opcional. Las mezclas de trigo con acondicionamiento desigual son la causa clásica del “ayer el molino iba bien”.',
    maintenance:
      'Calibre el sensor de microondas contra una referencia de estufa cada 30 días. Un sensor desviado es peor que no tener sensor, porque los operadores confían en él.',
    faq: [
      {
        q: '¿Qué humedad de acondicionamiento debe fijarse como objetivo?',
        a: 'Trigo blando: 15,0–15,5%. Trigo duro: 16,0–16,5%. Candeal: 16,5–17,0%. Por debajo de estas cifras el salvado se quiebra; por encima, los cilindros embadurnan.',
      },
      {
        q: '¿Cuánto tiempo debe reposar el trigo?',
        a: '12 horas como mínimo; 18–24 horas es lo habitual. Por debajo de 12 horas el agua no ha alcanzado la hendidura y el salvado sigue quebradizo.',
      },
    ],
  },
  'aspiration-separator': {
    name: 'Separador por aspiración',
    stage: 'Limpieza final',
    tagline:
      'La última oportunidad de extraer paja, penacho y fragmentos de insectos.',
    intro:
      'Situado inmediatamente antes de la primera trituración, el aspirador emplea una corriente de aire suave para extraer del trigo de molienda el material ligero que queda. Es barato, apenas tiene piezas de desgaste y evita que los contaminantes entren en el sistema de molienda, donde serían muy difíciles de eliminar.',
    selection:
      'Instálelo siempre. La amortización no se mide en capacidad, sino en reclamaciones de clientes evitadas.',
    maintenance: 'Sin piezas de desgaste. Limpie la rejilla de entrada de aire cada semana.',
    faq: [
      {
        q: '¿Es lo mismo un aspirador que un transporte neumático?',
        a: 'No. El aspirador usa el aire solo para separar material ligero; no transporta producto. El transporte neumático es un sistema aparte, con mucho más caudal de aire y más presión.',
      },
    ],
  },
  'magnetic-separator': {
    name: 'Separador magnético',
    stage: 'Limpieza final',
    tagline: '3.000–12.000 gauss. No negociable en cualquier planta de grado alimentario.',
    intro:
      'La contaminación férrica —un alambre de tela roto, un perno, una grapa de un saco de yute— es la causa más frecuente de retirada de producto. Los imanes de placa en las canaletas y los tambores magnéticos permanentes en las líneas de flujo libre la interceptan antes de que llegue a un cilindro o a un cliente.',
    selection:
      'Instale como mínimo: uno en la recepción de trigo, uno antes de la primera trituración y uno en cada corriente de harina antes del ensacado. Las unidades de más gauss (5.000–12.000) retienen partículas finas de desgaste de acero inoxidable que 3.000 gauss no captan.',
    maintenance:
      'Limpie los imanes en cada turno. Un imán cubierto de limaduras de hierro deja de atraer. Registre el material retirado: es su sistema de alerta temprana del desgaste de los equipos.',
    faq: [
      {
        q: '¿Dónde van los imanes en un molino de harina?',
        a: 'Recepción de trigo, antes de la primera trituración, cada salida de harina antes de la ensacadora y cualquier corriente que pase por una tela. De cinco a siete puntos es lo normal en una planta de 100 t/d.',
      },
    ],
  },
  'wheat-brush-scourer-combination': {
    name: 'Máquina combinada de rodillos y cepillos para trigo',
    stage: 'Limpieza de superficie',
    tagline: 'Limpieza grano a grano que deja el salvado intacto.',
    intro:
      'Esta máquina trata el grano uno a uno con una acción combinada de descascarado y cepillado. Retira la epidermis externa, el penacho, el polvo fino y los microorganismos, y conserva deliberadamente el endocarpo, la cubierta de la semilla, la capa nucelar y la aleurona: las capas que mantienen unido el salvado.',
    selection:
      'La alternativa superior a un segundo paso de descascarillado cuando importa la integridad del salvado: harina integral, molienda a la piedra y cualquier línea en la que el salvado deba quedar en escamas grandes en lugar de romperse hasta hacerse polvo.',
    maintenance:
      'Los segmentos de cepillo se desgastan contra la tela; revíselos cada 600 horas y rote su posición para igualar el desgaste.',
    faq: [
      {
        q: '¿Qué reducción de ceniza se puede alcanzar?',
        a: 'Hasta 0,10 puntos porcentuales en la molienda total, lo que es relevante: en términos de ceniza equivale aproximadamente a un paso completo adicional de trituración.',
      },
    ],
  },
  '6f-single-roller-mill': {
    name: 'Molino de cilindros simple 6F',
    stage: 'Molienda',
    tagline: 'La pieza básica de toda planta harinera pequeña y mediana.',
    intro:
      'La serie 6F es la unidad de un solo cilindro con la que se arman la mayoría de las plantas Haiyun. El diámetro y la longitud de los cilindros determinan la capacidad; el tipo de accionamiento determina el mantenimiento; la disposición de alimentación determina cuántas corrientes paralelas puede atender un banco. Entender estas tres elecciones es casi todo lo que exige elegir un banco de cilindros.',
    selection:
      'La transmisión por correa síncrona transmite más par a baja velocidad y es más silenciosa; la transmisión por cadena tolera mejor el calor y el polvo y se repara más fácilmente con herramientas básicas. En ambientes polvorientos con mantenimiento poco cualificado, elija cadena y acepte el ruido.',
    maintenance:
      'Rectificado de las estrías cada 1.500–2.500 horas de funcionamiento, según la dureza del trigo. Las estrías desgastadas pulen el salvado en lugar de cortarlo, lo que inunda la corriente de patent de salvado fino.',
    faq: [
      {
        q: '¿Qué significa alimentación “simple” y “doble”?',
        a: 'Alimentación simple significa que el banco atiende un solo paso de molienda. Alimentación doble significa que se pueden alimentar dos corrientes de producto distintas al mismo par de cilindros desde ambos extremos, lo que en la práctica duplica la capacidad útil del banco.',
      },
      {
        q: '¿Cada cuánto hay que rectificar las estrías?',
        a: 'Cada 1.500–2.500 horas. El trigo duro y las extracciones altas aceleran el desgaste. Rectificar cuesta mucho menos que las pérdidas por un cilindro embotado, así que la mayoría de los molinos lo programan en lugar de esperar a los síntomas.',
      },
      {
        q: '¿Correa o engranajes?',
        a: 'Correa: más suave, más silenciosa, más fácil de alinear, exige control de tensión. Engranajes: compactos, sin deslizamiento, mejores a muy baja velocidad, pero requieren baño de aceite y no toleran la contaminación.',
      },
    ],
  },
  'fmfq-double-roller-mill': {
    name: 'Molino de doble cilindro FMFQ(S)',
    stage: 'Molienda',
    tagline: 'Neumático, hidráulico, de precisión: el estándar industrial.',
    intro:
      'El FMFQ es el molino con el que muele una planta harinera seria. Dos pares de cilindros por banco, acercamiento neumático o manual, extracción hidráulica de cilindros y accionamiento de alimentación independiente. Cada prestación existe porque, a escala industrial, un ajuste de quince minutos se convierte en quince horas de parada.',
    selection:
      'La relación diferencial no es intercambiable: pertenece al paso. Los pasos de trituración funcionan a 2,5:1 para una acción de corte; los pasos de reducción bajan a 1,25:1 para una acción de atrición suave. Pedir la relación equivocada para una posición es un error frecuente y costoso.',
    maintenance:
      'Presión de trabajo 0,4–0,6 MPa; consumo de aire 0,06–0,08 m³/h por molino. Compruebe el paralelismo de los cilindros cada 500 horas con un calibre de galgas en ambos extremos; una conicidad de 0,05 mm produce un gradiente de ceniza visible en la corriente de harina.',
    faq: [
      {
        q: '¿Qué significa la S de FMFQ(S)?',
        a: 'Designa la variante de acercamiento neumático (asistido por servomotor). El FMFQ base es de acercamiento manual; la S añade acercamiento y separación neumáticos de los cilindros con control remoto.',
      },
      {
        q: '¿Por qué cambia la relación diferencial según el paso?',
        a: 'Los cilindros de trituración necesitan un diferencial rápido para abrir el salvado por cizallamiento. Los de reducción necesitan un diferencial pequeño para que el endospermo se reduzca por atrición y no por corte, lo que generaría exceso de salvado fino y calor.',
      },
      {
        q: '¿Cuánto aire necesita una sala de molienda?',
        a: 'Con un consumo de 0,06–0,08 m³/h por molino, una sala de 20 bancos demanda unos 1,6 m³/h a 0,6 MPa. Añada un 30% de margen por fugas y por futuros bancos.',
      },
    ],
  },
  purifier: {
    name: 'Purificador',
    stage: 'Clasificación',
    tagline: 'La máquina que separa una buena harina de una excelente.',
    intro:
      'El purificador estratifica las sémolas sobre una tela vibratoria bajo una corriente de aire. El endospermo puro, más ligero y más angular, flota y avanza; las partículas del mismo tamaño contaminadas con salvado se asientan y se rechazan. Así es como un molino produce harina patent realmente baja en ceniza en lugar de limitarse a cernir lo que han hecho los cilindros.',
    selection:
      'Solo merece la pena instalar un purificador si se dispone de al menos 4 pasos de trituración; con menos, no hay sémolas suficientes que purificar y la máquina queda parada. Por debajo de 40 t/d la mayoría de las plantas prescinde de él; a partir de 40 t/d marca la diferencia entre un 65% y un 73% de extracción de patent.',
    maintenance:
      'El equilibrio del aire lo es todo. Vuelva a equilibrar las campanas de aspiración cada 6 meses y tras cualquier cambio en el diagrama de molienda. Los marcos de tela son consumibles: sustitúyalos cuando la malla se descuelgue.',
    faq: [
      {
        q: '¿Se puede añadir un purificador a una planta existente?',
        a: 'Solo si el diagrama de molienda tiene suficientes corrientes de sémola para alimentarlo. Las adaptaciones suelen exigir añadir un paso de trituración al mismo tiempo, y por eso la decisión conviene tomarla en el diseño inicial.',
      },
      {
        q: '¿Cuánta ceniza elimina un purificador?',
        a: 'Normalmente 0,08–0,15 puntos porcentuales de la corriente purificada, y permite aumentar 5–8 puntos la extracción de patent con la misma especificación de ceniza.',
      },
    ],
  },
  'single-bin-plansifter': {
    name: 'Cernidor plano de un compartimento',
    stage: 'Cernido',
    tagline: 'El cernidor de control que evita que un lote malo llegue a un saco.',
    intro:
      'Un cernidor de un compartimento se sitúa inmediatamente antes de la ensacadora e inspecciona cada kilogramo de harina. Retiene alambre de tela, grumos, cuerpos extraños y cualquier material sobredimensionado procedente de un fallo aguas arriba. Un seguro barato y obligatorio en la mayoría de los esquemas de seguridad alimentaria.',
    selection:
      'Uno por línea de ensacado. Si trabaja tres calidades de harina a la vez, necesita tres cernidores de control: compartir uno anula su función, porque un fallo en una corriente contamina las demás.',
    maintenance:
      'Inspeccione los marcos de tela cada semana con luz fuerte; un solo agujero de alfiler anula toda la máquina. Sustituya los marcos de madera cuando se alabeen.',
    faq: [
      {
        q: '¿Cuál es la diferencia entre un cernidor de control y un cernidor plano?',
        a: 'Un cernidor de control inspecciona harina terminada: un producto, un paso, función de seguridad. Un cernidor plano clasifica corrientes de molino: muchos productos, muchos pasos, función de proceso.',
      },
    ],
  },
  'double-bin-plansifter': {
    name: 'Cernidor plano de dos compartimentos',
    stage: 'Cernido',
    tagline:
      'Dos compartimentos independientes, un bastidor: el estándar de la planta pequeña.',
    intro:
      'Los cernidores de dos compartimentos dominan el rango de 15–40 t/d porque ofrecen una clasificación de nivel cernidor plano en un bastidor que cabe bajo un techo normal. Cada compartimento funciona de forma independiente, así que se pueden cernir dos corrientes distintas sin contaminación cruzada.',
    selection:
      'Especifique en el pedido el número de compartimentos y la pila de telas: el bastidor es estándar, pero la pila interior se hace a medida para su diagrama de molienda. Cambiarla después es posible, pero cuesta una reconstrucción.',
    maintenance:
      'Revise anualmente las conexiones flexibles entre compartimentos; una manga agrietada vierte harina en la corriente equivocada y es difícil de diagnosticar.',
    faq: [
      {
        q: '¿Cuántos cernidores necesita una planta de 25 t/d?',
        a: 'Dos unidades de dos compartimentos: normalmente una para las corrientes de trituración y reducción gruesa y otra para las corrientes de reducción y harina.',
      },
    ],
  },
  'high-square-plansifter': {
    name: 'Cernidor plano de gran altura',
    stage: 'Cernido',
    tagline:
      'Cuatro, seis u ocho compartimentos aislados: el corazón de clasificación de un molino grande.',
    intro:
      'El cernidor plano de gran altura es una pila de cuatro, seis u ocho compartimentos totalmente separados sobre un único bastidor de movimiento giroscópico. Cada compartimento atiende una corriente, de modo que un diagrama de molienda grande puede clasificarse en una sola máquina sin riesgo de mezcla. Su relación entre superficie en planta y superficie de cernido es lo que hace económicamente viables los molinos de varios pisos.',
    selection:
      'Regla práctica: 1 m² de superficie de cernido por cada 0,8 t de capacidad diaria para un diagrama estándar 4B5M. Una planta de 100 t/d necesita por tanto unos 125 m², lo que equivale a un FSFG8×24 más un FSFG6×24, o a tres FSFG6×24.',
    maintenance:
      'Las varillas de suspensión y sus casquillos de goma son el elemento crítico de desgaste. Sustituya los casquillos cada 12–18 meses; un casquillo desgastado altera la trayectoria de giro y degrada en silencio la eficiencia de clasificación en todos los compartimentos a la vez.',
    faq: [
      {
        q: '¿Cómo se dimensiona un cernidor plano?',
        a: 'Parta de la superficie total de cernido: la capacidad diaria en toneladas dividida por 0,8 da los metros cuadrados necesarios para un diagrama estándar. Después elija la combinación de compartimentos que cubra esa superficie con el menor número de máquinas.',
      },
      {
        q: '¿Se pueden añadir compartimentos después?',
        a: 'En la mayoría de los bastidores Haiyun, sí: el bastidor y el accionamiento están calculados para el número máximo de compartimentos. Añadir compartimentos exige nuevas pilas de telas y un reequilibrado, pero no una máquina nueva.',
      },
    ],
  },
  'bran-finisher': {
    name: 'Desmenuzador de salvado',
    stage: 'Recuperación de subproductos',
    tagline: 'Recupera la harina que queda pegada al salvado.',
    intro:
      'El salvado sale del molino con un 8–15% de harina adherida. El desmenuzador de salvado lo golpea contra una tela para liberarla. En una planta de 100 t/d, el material recuperado vale más que el coste de la máquina en el primer año: es la capacidad más barata que se puede añadir.',
    selection:
      'Dimensione por el caudal de salvado, no por la capacidad del molino. El salvado supone normalmente el 22–28% del trigo recibido, así que una planta de 60 t/d produce 14–17 t/día de salvado en dos turnos: un FPDW45×2 lo cubre con holgura.',
    maintenance:
      'Las puntas de los batidores y la tela se desgastan juntas; sustituya ambos, nunca uno solo. Unos batidores desgastados contra una tela nueva la destrozan en semanas.',
    faq: [
      {
        q: '¿Cuánta harina recupera un desmenuzador de salvado?',
        a: 'Normalmente un 1,5–3% del trigo recibido: en 100 t/d son 1,5–3 toneladas de harina vendible al día, lo que generalmente amortiza la máquina en menos de un año.',
      },
    ],
  },
  'impact-detacher': {
    name: 'Desaglomerador de impacto',
    stage: 'Tratamiento intermedio',
    tagline: 'Rompe las escamas para que el cernidor pueda hacer su trabajo.',
    intro:
      'La reducción con cilindros lisos produce escamas planas que ciegan el cernidor y encierran la harina. El desaglomerador de impacto lanza el producto contra pasadores a ~2.900 rpm, que separan las escamas sin moler más fino el salvado. El resultado es un aumento medible de la eficiencia de cernido y del rendimiento de harina.',
    selection:
      'El modelo intensivo FSJQ se emplea cuando el producto está muy escamado o cuando se requiere una segunda función: desinsectación por impacto. El FSJZ estándar basta para corrientes de reducción normales.',
    maintenance:
      'Los pasadores se desgastan en la cara de ataque; gire la placa del rotor 180° a media vida y después sustitúyala. Compruebe el equilibrio del rotor tras cualquier cambio de pasadores: un desequilibrio destruye los rodamientos en semanas.',
    faq: [
      {
        q: '¿Dónde se sitúa un desaglomerador de impacto en el diagrama de molienda?',
        a: 'Inmediatamente después de los molinos de reducción de cilindros lisos y antes del cernidor. Una unidad puede atender a un grupo de molinos mediante un transportador colector común.',
      },
      {
        q: '¿Puede la desaglomeración por impacto eliminar insectos?',
        a: 'Sí: el impacto centrífugo se usa como paso de desinsectación física en algunos mercados, aunque la aceptación regulatoria varía. Es una barrera adicional útil, no un sustituto del control higiénico.',
      },
    ],
  },
  'automatic-packer': {
    name: 'Ensacadora automática cuantitativa',
    stage: 'Ensacado',
    tagline: 'Precisión de pesaje de ±0,2% a 150–300 sacos por hora.',
    intro:
      'La ensacadora es donde un molino gana o pierde dinero en silencio. Un 0,2% de precisión parece trivial hasta que se calcula sobre 60.000 sacos al mes: es la diferencia entre regalar producto y ser sancionado por peso inferior al declarado.',
    selection:
      'Para harina de venta minorista, especifique la unidad de 5 kg con carrusel presentador de sacos; para granel, la de 50 kg con cabezal de cosido. Ambas necesitan un suministro de aire estable a 0,6 MPa: el aire insuficiente es la causa más frecuente de deriva en la precisión.',
    maintenance:
      'Calibre con pesas patrón certificadas cada semana. Sustituya la célula de carga cada 3–4 años; las células de carga derivan en silencio antes de fallar.',
    faq: [
      {
        q: '¿Qué precisión puedo declarar legalmente?',
        a: 'La normativa de productos preenvasados de la mayoría de las jurisdicciones exige que el contenido neto medio sea igual al peso declarado, con una desviación negativa tolerada. Una precisión de máquina de ±0,2% le mantiene cómodamente dentro de esos límites.',
      },
    ],
  },
  'pulse-jet-dust-collector': {
    name: 'Colector de polvo de chorro pulsante de baja presión',
    stage: 'Medio ambiente',
    tagline: 'Recogida en seco sin parar la planta.',
    intro:
      'Todo molino harinero es a la vez un riesgo de explosión por polvo y una molestia por polvo. El TBLM utiliza válvulas de pulso electromagnéticas para limpiar las mangas en marcha: la planta sigue funcionando mientras se limpia un compartimento, y eso es lo que hace posible el funcionamiento 24 horas.',
    selection:
      'Dimensione por el caudal total de aspiración con un 20% de margen. La construcción cilíndrica con entrada tangencial reduce la carga sobre las mangas; la descarga inferior plana con rascador mantiene el equipo lo bastante bajo para caber bajo una cubierta normal.',
    maintenance:
      'Las válvulas de pulso fallan sin avisar: pruebe cada una mensualmente escuchando el pulso de descarga. Una válvula muerta ciega su fila de mangas y reduce a la mitad la superficie filtrante efectiva.',
    faq: [
      {
        q: '¿Exige la ley un colector de polvo?',
        a: 'En casi todas las jurisdicciones, sí: tanto por los límites de exposición laboral como por seguridad frente a explosiones. El polvo de harina es un polvo combustible con un valor Kst dentro del rango explosivo.',
      },
    ],
  },
};
