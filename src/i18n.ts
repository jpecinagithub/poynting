export type Lang = 'es' | 'en'

const es = {
  skip: 'Saltar al contenido',
  nav: {
    idea: 'La idea',
    lab: 'Laboratorio',
    cable: 'Dentro del cable',
    wave: 'La onda',
    bio: 'Poynting',
    paper: 'El artículo de 1884',
    theory: 'Teoría',
    practice: 'Práctica',
    quiz: 'Compruébalo',
    sources: 'Fuentes',
  },
  hero: {
    kicker: 'Física que cambia tu imagen del mundo · 1884',
    title: 'La energía no viaja dentro del cable.',
    titleAccent: 'Viaja en el campo que lo rodea.',
    sub: 'En 1884, John Henry Poynting demostró dónde está la energía eléctrica mientras se mueve y por qué camino llega de la fuente a la lámpara. Los electrones casi no se desplazan. El cable solo guía: quien transporta la energía es el campo electromagnético de alrededor.',
    ctaLab: 'Verlo en el laboratorio animado',
    ctaPaper: 'Leer el texto original de 1884',
    formulaNote: 'S = E × H — el vector de Poynting: dirección y cantidad del flujo de energía, en W/m²',
    stats: [
      { n: '1884', l: 'el año del descubrimiento' },
      { n: '≈ c', l: 'velocidad a la que se establece el campo' },
      { n: 'mm/s', l: 'velocidad real de deriva de los electrones' },
      { n: 'W/m²', l: 'unidad de S: potencia por metro cuadrado' },
    ],
  },
  legend: {
    title: 'El código de colores de toda la web',
    e: 'E — campo eléctrico',
    b: 'B — campo magnético',
    s: 'S — flujo de energía (Poynting)',
    el: 'electrones e⁻',
    i: 'I — corriente convencional',
  },
  idea: {
    kicker: 'La idea en 30 segundos',
    title: 'Antes y después de Poynting',
    beforeTitle: 'La imagen antigua (intuitiva, pero falsa)',
    before:
      'La energía viaja dentro del metal, llevada por la corriente como el agua por una tubería. El cable es el camino y el protagonista.',
    afterTitle: 'La imagen de Poynting (1884)',
    after:
      'La energía viaja por el espacio que rodea a los cables, dentro del campo electromagnético. El cable solo crea y guía ese campo. Al llegar a la carga, la energía entra en ella de lado, desde el campo, y se convierte en luz, calor o trabajo.',
    points: [
      {
        t: 'La corriente circula; la energía, no',
        d: 'La corriente da la vuelta completa al circuito. La energía no regresa: sale de la fuente, llega a la carga y allí se transforma. En el cable de vuelta, la corriente va hacia la fuente… y la energía sigue yendo en sentido contrario, hacia la carga.',
      },
      {
        t: 'Explica la velocidad de la luz… al encender la luz',
        d: 'Los electrones derivan a milímetros por segundo (en alterna solo vibran unas micras). Si ellos llevaran la energía, una lámpara tardaría una eternidad en encenderse. Se enciende al instante porque lo que viaja casi a la velocidad de la luz es el campo.',
      },
      {
        t: 'Explica qué “deja” la corriente en la bombilla',
        d: 'Por la bombilla entran tantos electrones como salen, con la misma corriente. Lo que sí entra y no sale es S: el flujo de energía desde el campo circundante. Eso es lo que se convierte en luz y calor.',
      },
    ],
  },
  lab: {
    kicker: 'Laboratorio animado',
    title: 'Corriente continua y alterna: mira E, B y S a la vez',
    intro:
      'Un circuito simple: fuente a la izquierda, carga a la derecha, cable de ida arriba y cable de vuelta abajo. Activa o apaga cada capa y cambia entre continua y alterna. Fíjate sobre todo en una cosa: en alterna, E y B se dan la vuelta a la vez… y S no cambia de sentido.',
    dc: 'Corriente continua (CC)',
    ac: 'Corriente alterna (CA) · cámara lenta',
    play: 'Pausar',
    pause: 'Reanudar',
    layers: 'Capas',
    showEl: 'Electrones',
    showE: 'Campo E',
    showB: 'Campo B',
    showS: 'Flujo S',
    source: 'FUENTE',
    load: 'CARGA',
    topWire: 'cable de ida',
    bottomWire: 'cable de vuelta',
    eBetween: 'E entre los cables: del + al −',
    bInto: 'B entre los cables: hacia dentro ⊗',
    bOut: 'B entre los cables: hacia fuera ⊙',
    sFlow: 'S: de la fuente a la carga — siempre',
    readingTitle: 'Cómo leer el dibujo, paso a paso',
    steps: [
      'Electrones: van al contrario que I y lentísimos. En CA ni siquiera avanzan: vibran en el sitio.',
      'E entre los cables va del conductor positivo al negativo. Ese E, junto con B, es el que transporta la energía.',
      'B rodea a cada cable (regla de la mano derecha). Entre los dos cables, los dos B se suman; fuera, casi se cancelan.',
      'S = (1/μ₀) E × B apunta de la fuente a la carga por el espacio entre los cables. Al llegar, se curva y entra en la carga.',
      'En CA: (−E) × (−B) = E × B. Por eso la energía sigue yendo fuente → carga aunque la corriente cambie de sentido 100 veces por segundo.',
    ],
    acNote:
      'Animación a cámara extremadamente lenta: la red real es de 50 Hz (en Europa) y todo se invierte 100 veces por segundo.',
  },
  wire: {
    kicker: 'La prueba en un solo cable',
    title: 'Ni siquiera dentro del cable viaja la energía “a lo largo”',
    intro:
      'Esto lo demostró el propio Poynting con su primer ejemplo: un hilo recto con corriente. Dentro del hilo, E va a lo largo del hilo y B da vueltas a su alrededor. Por tanto S = E × B apunta hacia dentro, radialmente, entrando desde el medio no conductor que rodea al hilo — y esa energía que entra es exactamente el calor que el hilo produce (efecto Joule).',
    quote:
      '“Parece, pues, que ninguna parte de la energía de una corriente viaja a lo largo del hilo, sino que entra en él desde el medio no conductor que lo rodea…”',
    quoteCite: '— Poynting, 1884, aplicación (1): un hilo recto con corriente (traducción propia)',
    labels: {
      eIn: 'E dentro del hilo: a lo largo, con I',
      bAround: 'B: círculos alrededor del hilo (⊗ arriba, ⊙ abajo)',
      sIn: 'S: entra radialmente desde fuera',
      heat: 'dentro se convierte en calor (Joule)',
      outside: 'medio no conductor (aire / aislante): por aquí llega la energía',
    },
    bullets: [
      'A través de las secciones transversales de los extremos de un tramo de hilo no entra energía: toda entra por su superficie lateral.',
      'Cuanto más al centro, menos energía queda por transformar: en el eje ya no hay B, y allí el flujo es nulo porque ya se convirtió todo en calor.',
      'Un conductor perfecto (sin resistencia) no necesitaría E en su interior… y no absorbería energía: solo guiaría el campo.',
    ],
  },
  wave: {
    kicker: 'El mismo vector, sin cables',
    title: 'Sin cables también funciona: la luz es flujo de Poynting',
    intro:
      'En una onda electromagnética, E y B oscilan perpendiculares entre sí y S marca la dirección de propagación. Es el mismo S de tu lámpara: la luz del Sol que llega a un panel solar, una antena de radio o el wifi de tu casa se miden, en W/m², con el vector de Poynting.',
    eWave: 'E oscila',
    bWave: 'B: ⊗ entra · ⊙ sale',
    sWave: 'S: dirección de propagación y de la energía',
  },
  hand: {
    title: 'La regla que lo resume: la mano derecha',
    steps: [
      'Índice: dirección de E',
      'Corazón: dirección de B',
      'Pulgar: dirección de S, el flujo de energía',
    ],
    note: 'Formalmente: S = E × H, y en el vacío S = (1/μ₀) E × B. Su módulo es la potencia que cruza cada metro cuadrado perpendicular al flujo.',
  },
  bio: {
    kicker: 'Reseña biográfica',
    title: 'John Henry Poynting (1852–1914)',
    photoCaption:
      'John Henry Poynting. Fotografía en dominio público (Wikimedia Commons).',
    lead: 'El físico que dibujó el mapa verdadero de la energía eléctrica — y al que casi nadie conoce fuera de las facultades de física e ingeniería.',
    body: [
      'Nació el 9 de septiembre de 1852 en Monton, Lancashire (Inglaterra), hijo menor de un ministro unitario que también era su maestro. Estudió en el Owens College de Mánchester y en el Trinity College de Cambridge, donde trabajó en el Laboratorio Cavendish bajo la dirección de James Clerk Maxwell, el autor de las ecuaciones del electromagnetismo.',
      'En 1880, con 28 años, fue el primer catedrático de Física del recién fundado Mason College de Birmingham, la institución que se convertiría en la Universidad de Birmingham, donde permaneció hasta su muerte. Allí, en 1884, publicó el trabajo que nos ocupa, construido directamente sobre la teoría de Maxwell.',
      'Fue elegido miembro de la Royal Society en 1888, recibió la Royal Medal en 1905 y el Premio Adams de Cambridge en 1893. También midió la densidad media de la Tierra, estudió la presión de la luz — el efecto Poynting-Robertson describe cómo la radiación solar frena el polvo que orbita una estrella — y coescribió con J. J. Thomson un manual de física usado durante medio siglo.',
      'Murió en Birmingham el 30 de marzo de 1914, a los 61 años. Un cráter de la Luna y otro de Marte llevan su nombre, y el edificio de Física de la Universidad de Birmingham se llama Poynting Building. Su vector, sin embargo, trabaja a diario en cada cable, cada antena y cada rayo de sol, casi siempre sin ser nombrado.',
    ],
    timeline: [
      { y: '1852', e: 'Nace en Monton, Lancashire, el 9 de septiembre.' },
      { y: '1872', e: 'Licenciatura (B.Sc., Londres) y beca de ingreso en el Trinity College, Cambridge.' },
      { y: '1878', e: 'Fellow del Trinity College; investiga en el Cavendish con Maxwell.' },
      { y: '1880', e: 'Primer catedrático de Física del Mason College de Birmingham.' },
      { y: '1884', e: 'Lee ante la Royal Society «On the Transfer of Energy in the Electromagnetic Field».' },
      { y: '1888', e: 'Elegido Fellow of the Royal Society (FRS).' },
      { y: '1905', e: 'Royal Medal de la Royal Society.' },
      { y: '1914', e: 'Muere en Birmingham el 30 de marzo.' },
    ],
    fairnessTitle: 'Justicia histórica',
    fairness:
      'Nikolay Umov ya había formulado en 1874 un vector de flujo de energía en general (por eso a veces se habla del vector de Umov-Poynting), y Oliver Heaviside llegó a un resultado equivalente de forma independiente casi al mismo tiempo. La aplicación concreta al campo electromagnético, con el análisis de los circuitos reales, es la de Poynting.',
  },
  paper: {
    kicker: 'El texto original',
    title: '«On the Transfer of Energy in the Electromagnetic Field» (1884)',
    meta: [
      { k: 'Autor', v: 'J. H. Poynting, M.A., ex-Fellow del Trinity College, Cambridge; catedrático de Física, Mason College, Birmingham' },
      { k: 'Publicación', v: 'Philosophical Transactions of the Royal Society of London, vol. 175, pp. 343–361' },
      { k: 'Fechas', v: 'Recibido el 17 de diciembre de 1883 · Leído el 10 de enero de 1884 · Comunicado por Lord Rayleigh' },
      { k: 'Estado', v: 'Dominio público. Texto completo disponible en Wikisource y en la Royal Society.' },
    ],
    readFull: 'Leer el texto completo en Wikisource',
    readRoyal: 'Ver la ficha en la Royal Society',
    openingTitle: 'Así empieza el artículo (texto original, en inglés)',
    openingNote:
      'Fíjate en que Poynting plantea el problema exactamente como lo sentimos hoy: antes se suponía que la energía era “conducida hasta allí a través del conductor por la corriente”. Él viene a corregir esa imagen.',
    keyPassageTitle: 'La tesis, en sus propias palabras',
    keyPassageNote:
      '“…hay una ley general para la transferencia de la energía, según la cual esta se mueve en cada punto perpendicularmente al plano que contiene las líneas de fuerza eléctrica y de fuerza magnética…”',
    wireTitle: 'Y su conclusión sobre un hilo con corriente',
    wireNote:
      'Esta es la frase que debería acompañar a cada esquema de un circuito: la energía no viaja a lo largo del hilo; entra en él desde fuera.',
    downloadNote:
      'En esta web se reproducen extractos del artículo (dominio público). El texto íntegro, con toda la demostración matemática y las aplicaciones — hilo recto, descarga de un condensador, etc. — está en los enlaces anteriores.',
  },
  theory: {
    kicker: 'La teoría',
    title: 'El teorema de Poynting: la contabilidad exacta de la energía',
    intro:
      'Poynting no propuso una metáfora: dedujo de las ecuaciones de Maxwell una ley de conservación. Dice, en palabras llanas: la energía del campo dentro de cualquier volumen solo puede cambiar porque fluye a través de su superficie (eso es S) o porque se entrega a las cargas en forma de trabajo y calor (eso es J·E).',
    equationNote: '∂u/∂t + ∇·S = − J·E',
    terms: [
      { s: 'u', t: 'Energía guardada en el campo', d: 'Densidad de energía electromagnética: u = ½ε₀E² + B²/2μ₀. El campo no es un “medio vacío”: almacena energía de verdad.' },
      { s: 'S', t: 'Energía que fluye', d: 'S = E × H. Su divergencia ∇·S mide cuánta energía sale neta de cada punto en forma de flujo.' },
      { s: 'J·E', t: 'Energía entregada a las cargas', d: 'El término donde el campo “paga”: trabajo sobre las cargas, que acaba en calor (resistencia), luz o movimiento (motor).' },
    ],
    integral:
      'En forma integral: lo que el campo pierde dentro de un volumen = lo que sale fluyendo por su superficie (∮ S·dA) + lo que se convierte en otras formas dentro. Ni un julio se crea ni se pierde sin dejar rastro en S.',
  },
  practice: {
    kicker: 'La práctica — y por qué te importa en casa',
    title: 'Implicaciones: así se transmite de verdad la energía por tus cables',
    intro:
      'Todo lo anterior deja de ser teoría en cuanto miras el cordón de la lámpara que tienes encendida:',
    cards: [
      {
        t: 'El cordón de tu lámpara',
        d: 'No es “un” cable: son dos conductores (fase y neutro) pegados dentro de la misma funda, el de ida y el de vuelta. La energía viaja del enchufe a la lámpara por el campo que se forma entre ambos — en el plástico y el aire que los rodea — mientras los electrones de cada conductor solo vibran adelante y atrás.',
      },
      {
        t: 'En alterna, la energía nunca “vuelve”',
        d: 'Cada semiciclo, E y B invierten su signo a la vez, y su producto S conserva el sentido: fuente → carga. Solo con cargas reactivas (motores, bobinas, condensadores) una parte de la energía sí va y vuelve cada ciclo: es la potencia reactiva. La que pagas, la activa, va en un solo sentido.',
      },
      {
        t: 'Las pérdidas también entran “de lado”',
        d: 'El calor que pierde un cable en el camino (efecto Joule) no “sale” de la energía que iría por dentro: es flujo de Poynting entrando radialmente en el conductor a lo largo de todo el trayecto. Por eso un mal contacto, que concentra esa entrada, se calienta tanto.',
      },
      {
        t: 'Diseñar bien es guiar bien el campo',
        d: 'Cables coaxiales, pares trenzados, líneas de alta tensión, guías de onda: toda la ingeniería de transmisión consiste en dar al campo un camino guiado y controlado entre la fuente y la carga. El metal pone las condiciones de contorno; el campo hace el transporte.',
      },
      {
        t: 'Lo mismo, sin cables',
        d: 'Una antena irradia flujo de Poynting; un panel solar lo recibe del Sol (unos 1.361 W/m² fuera de la atmósfera, la “constante solar”); la carga inalámbrica y el microondas también son S dirigido. Poynting unificó el enchufe y el rayo de sol en una sola idea.',
      },
      {
        t: 'P = V·I sigue funcionando (y ahora sabes por qué)',
        d: 'Integrando S sobre el espacio entre los conductores de una línea se obtiene exactamente P = V·I. Poynting no cambió la cuenta de los ingenieros: cambió el mapa de por dónde va lo que la cuenta mide.',
      },
    ],
    mythTitle: 'Mitos y realidades',
    myths: [
      { m: '«La energía va dentro del cobre, con los electrones»', r: 'Falso. Va en el campo exterior e interior inmediato; el cobre guía y, si tiene resistencia, absorbe una parte entrando de lado.' },
      { m: '«En alterna la energía va y vuelve, por eso no llega»', r: 'Falso para cargas resistivas: E y B se invierten juntos y S mantiene el sentido fuente → carga.' },
      { m: '«El cable de vuelta no transporta nada importante»', r: 'Al contrario: sin los dos conductores no existe el campo guiado entre ellos. Ida y vuelta forman juntos el camino del campo.' },
      { m: '«Es solo una interpretación matemática»', r: 'Es una ley de conservación deducida de Maxwell y comprobada en cada sistema de radio, óptica y potencia. Dice dónde está la energía en cada instante.' },
    ],
  },
  quiz: {
    kicker: 'Compruébalo',
    title: '¿Lo has entendido? Cinco preguntas rápidas',
    check: 'Comprobar',
    again: 'Volver a intentarlo',
    score: 'Tu resultado',
    perfect: 'Perfecto. Ya piensas como Poynting: la corriente circula, la energía fluye por el campo.',
    good: 'Casi. Repasa el laboratorio: fíjate en qué hace S cuando E y B se invierten.',
    items: [
      {
        q: '¿Por dónde viaja principalmente la energía de una batería a una bombilla?',
        o: ['Dentro del metal, llevada por los electrones', 'En el campo electromagnético alrededor y entre los cables', 'Dentro del núcleo de los electrones', 'Solo por el cable de ida'],
        a: 1,
      },
      {
        q: 'En el cable de vuelta de un circuito de continua, la corriente va hacia la fuente. ¿Y la energía?',
        o: ['También vuelve a la fuente', 'Se detiene', 'Sigue yendo de la fuente a la carga', 'Gira en círculo con la corriente'],
        a: 2,
      },
      {
        q: 'En corriente alterna resistiva, E y B cambian de signo a la vez. ¿Qué le pasa a S?',
        o: ['Cambia de sentido cada semiciclo', 'Se anula', 'Vale cero en promedio y en cada instante', 'Mantiene el sentido fuente → carga'],
        a: 3,
      },
      {
        q: '¿Qué demostró Poynting sobre un hilo recto con corriente?',
        o: ['Que la energía viaja por el centro del hilo', 'Que la energía entra en el hilo desde fuera, radialmente, y eso explica el calor Joule', 'Que los electrones viajan a la velocidad de la luz', 'Que no existe campo fuera del hilo'],
        a: 1,
      },
      {
        q: '¿En qué unidades se mide el vector de Poynting S?',
        o: ['Julios', 'Amperios por metro', 'Vatios por metro cuadrado (W/m²)', 'Voltios'],
        a: 2,
      },
    ],
  },
  sources: {
    kicker: 'Fuentes y créditos',
    title: 'De dónde sale todo esto',
    items: [
      'Poynting, J. H. (1884). “XV. On the Transfer of Energy in the Electromagnetic Field”. Philosophical Transactions of the Royal Society of London, 175, 343–361. Texto completo en Wikisource (dominio público).',
      'Royal Society Publishing — ficha y resumen oficial del artículo (doi: 10.1098/rstl.1884.0016).',
      '“Poynting, John Henry”. Dictionary of National Biography, 1927 supplement (Wikisource) — datos biográficos.',
      'Fotografía de John Henry Poynting: Wikimedia Commons (File: John Henry Poynting.jpg), dominio público.',
      'Las animaciones son esquemas educativos propios elaborados para esta web: no reproducen figuras del artículo original.',
    ],
    footer:
      'Web educativa sin ánimo de lucro. Hecha para entender una idea: la energía fluye en el campo; los cables lo guían.',
  },
}

export type Dict = typeof es

const en: Dict = {
  skip: 'Skip to content',
  nav: {
    idea: 'The idea',
    lab: 'Lab',
    cable: 'Inside the wire',
    wave: 'The wave',
    bio: 'Poynting',
    paper: 'The 1884 paper',
    theory: 'Theory',
    practice: 'Practice',
    quiz: 'Check yourself',
    sources: 'Sources',
  },
  hero: {
    kicker: 'Physics that changes your picture of the world · 1884',
    title: 'Energy does not travel inside the wire.',
    titleAccent: 'It travels in the field around it.',
    sub: 'In 1884, John Henry Poynting proved where electrical energy actually is while it moves, and by what path it gets from the source to the lamp. The electrons barely move at all. The wire only guides: the carrier is the electromagnetic field around it.',
    ctaLab: 'See it in the animated lab',
    ctaPaper: 'Read the original 1884 text',
    formulaNote: 'S = E × H — the Poynting vector: direction and amount of energy flow, in W/m²',
    stats: [
      { n: '1884', l: 'the year of the discovery' },
      { n: '≈ c', l: 'speed at which the field is established' },
      { n: 'mm/s', l: 'actual drift speed of the electrons' },
      { n: 'W/m²', l: 'unit of S: power per square metre' },
    ],
  },
  legend: {
    title: 'The colour code used across this whole site',
    e: 'E — electric field',
    b: 'B — magnetic field',
    s: 'S — energy flow (Poynting)',
    el: 'electrons e⁻',
    i: 'I — conventional current',
  },
  idea: {
    kicker: 'The idea in 30 seconds',
    title: 'Before and after Poynting',
    beforeTitle: 'The old picture (intuitive, but false)',
    before:
      'Energy travels inside the metal, carried by the current like water through a pipe. The wire is both the road and the main character.',
    afterTitle: 'Poynting’s picture (1884)',
    after:
      'Energy travels through the space surrounding the wires, inside the electromagnetic field. The wire only creates and guides that field. At the load, the energy enters it sideways, from the field, and becomes light, heat or work.',
    points: [
      {
        t: 'Current circulates; energy does not',
        d: 'Current goes all the way round the circuit. Energy never comes back: it leaves the source, reaches the load and is transformed there. In the return wire, current flows toward the source… while energy keeps flowing the opposite way, toward the load.',
      },
      {
        t: 'It explains the “speed of light” when you flip a switch',
        d: 'Electrons drift at millimetres per second (on AC they only jiggle a few micrometres). If they carried the energy, a lamp would take forever to light. It lights instantly because what travels at nearly the speed of light is the field.',
      },
      {
        t: 'It explains what the current “leaves” at the bulb',
        d: 'As many electrons leave the bulb as enter it, with the same current. What does enter and not leave is S: the flow of energy from the surrounding field. That is what becomes light and heat.',
      },
    ],
  },
  lab: {
    kicker: 'Animated lab',
    title: 'Direct and alternating current: watch E, B and S together',
    intro:
      'A simple circuit: source on the left, load on the right, outgoing wire on top and return wire at the bottom. Turn each layer on or off and switch between DC and AC. Watch one thing above all: on AC, E and B flip together… and S does not change direction.',
    dc: 'Direct current (DC)',
    ac: 'Alternating current (AC) · slow motion',
    play: 'Pause',
    pause: 'Resume',
    layers: 'Layers',
    showEl: 'Electrons',
    showE: 'Field E',
    showB: 'Field B',
    showS: 'Flow S',
    source: 'SOURCE',
    load: 'LOAD',
    topWire: 'outgoing wire',
    bottomWire: 'return wire',
    eBetween: 'E between the wires: from + to −',
    bInto: 'B between the wires: into the page ⊗',
    bOut: 'B between the wires: out of the page ⊙',
    sFlow: 'S: from source to load — always',
    readingTitle: 'How to read the picture, step by step',
    steps: [
      'Electrons: they move opposite to I, and extremely slowly. On AC they do not advance at all: they vibrate in place.',
      'E between the wires points from the positive to the negative conductor. That E, together with B, is what carries the energy.',
      'B circles each wire (right-hand rule). Between the two wires the two B fields add up; outside, they nearly cancel.',
      'S = (1/μ₀) E × B points from source to load through the space between the wires. At the load it curves in and enters it.',
      'On AC: (−E) × (−B) = E × B. That is why energy keeps flowing source → load even though the current reverses 100 times per second.',
    ],
    acNote:
      'Animation in extreme slow motion: a real mains supply is 50 Hz (in Europe) and everything reverses 100 times per second.',
  },
  wire: {
    kicker: 'The proof on a single wire',
    title: 'Not even inside the wire does energy travel “along” it',
    intro:
      'Poynting himself proved this with his first example: a straight wire carrying a current. Inside the wire, E points along the wire and B circles around it. So S = E × B points inward, radially, entering from the non-conducting medium surrounding the wire — and that incoming energy is exactly the heat the wire produces (Joule heating).',
    quote:
      '“It seems then that none of the energy of a current travels along the wire, but that it comes in from the non-conducting medium surrounding the wire…”',
    quoteCite: '— Poynting, 1884, application (1): a straight wire conveying a current',
    labels: {
      eIn: 'E inside the wire: along it, with I',
      bAround: 'B: circles around the wire (⊗ above, ⊙ below)',
      sIn: 'S: enters radially from outside',
      heat: 'inside it becomes heat (Joule)',
      outside: 'non-conducting medium (air / insulation): the energy arrives through here',
    },
    bullets: [
      'Across the end sections of a stretch of wire no energy flows in at all: all of it enters through its side surface.',
      'The deeper you go, the less energy is left to transform: on the axis there is no B, and the flow there is zero because it has all become heat.',
      'A perfect conductor (no resistance) would need no E inside it… and would absorb no energy: it would only guide the field.',
    ],
  },
  wave: {
    kicker: 'The same vector, with no wires',
    title: 'It works with no wires too: light is Poynting flux',
    intro:
      'In an electromagnetic wave, E and B oscillate perpendicular to each other and S marks the direction of propagation. It is the same S as in your lamp: sunlight reaching a solar panel, a radio antenna or your home wifi are all measured, in W/m², with the Poynting vector.',
    eWave: 'E oscillates',
    bWave: 'B: ⊗ in · ⊙ out',
    sWave: 'S: direction of propagation and of the energy',
  },
  hand: {
    title: 'The rule that sums it up: the right hand',
    steps: [
      'Index finger: direction of E',
      'Middle finger: direction of B',
      'Thumb: direction of S, the energy flow',
    ],
    note: 'Formally: S = E × H, and in vacuum S = (1/μ₀) E × B. Its magnitude is the power crossing each square metre perpendicular to the flow.',
  },
  bio: {
    kicker: 'Biographical sketch',
    title: 'John Henry Poynting (1852–1914)',
    photoCaption: 'John Henry Poynting. Public-domain photograph (Wikimedia Commons).',
    lead: 'The physicist who drew the true map of electrical energy — and whom almost nobody outside physics and engineering faculties has heard of.',
    body: [
      'He was born on 9 September 1852 in Monton, Lancashire (England), the youngest son of a Unitarian minister who was also his schoolteacher. He studied at Owens College, Manchester, and at Trinity College, Cambridge, where he worked in the Cavendish Laboratory under James Clerk Maxwell, the author of the equations of electromagnetism.',
      'In 1880, aged 28, he became the first professor of physics at the newly founded Mason College in Birmingham, the institution that would become the University of Birmingham, where he stayed until his death. There, in 1884, he published the work this site is about, built directly on Maxwell’s theory.',
      'He was elected a Fellow of the Royal Society in 1888, received its Royal Medal in 1905 and Cambridge’s Adams Prize in 1893. He also measured the mean density of the Earth, studied the pressure of light — the Poynting–Robertson effect describes how solar radiation drags dust orbiting a star — and co-wrote, with J. J. Thomson, a physics textbook used for half a century.',
      'He died in Birmingham on 30 March 1914, aged 61. A crater on the Moon and another on Mars bear his name, and the University of Birmingham’s physics building is the Poynting Building. His vector, however, works every day in every cable, every antenna and every sunbeam, usually without being named.',
    ],
    timeline: [
      { y: '1852', e: 'Born in Monton, Lancashire, on 9 September.' },
      { y: '1872', e: 'B.Sc. (London) and entrance scholarship to Trinity College, Cambridge.' },
      { y: '1878', e: 'Fellow of Trinity College; research at the Cavendish with Maxwell.' },
      { y: '1880', e: 'First professor of physics at Mason College, Birmingham.' },
      { y: '1884', e: 'Reads “On the Transfer of Energy in the Electromagnetic Field” to the Royal Society.' },
      { y: '1888', e: 'Elected Fellow of the Royal Society (FRS).' },
      { y: '1905', e: 'Royal Medal of the Royal Society.' },
      { y: '1914', e: 'Dies in Birmingham on 30 March.' },
    ],
    fairnessTitle: 'Historical fairness',
    fairness:
      'Nikolay Umov had already formulated a general energy-flux vector in 1874 (hence the occasional name Umov–Poynting vector), and Oliver Heaviside reached an equivalent result independently at almost the same time. The concrete application to the electromagnetic field, with the analysis of real circuits, is Poynting’s.',
  },
  paper: {
    kicker: 'The original text',
    title: '“On the Transfer of Energy in the Electromagnetic Field” (1884)',
    meta: [
      { k: 'Author', v: 'J. H. Poynting, M.A., late Fellow of Trinity College, Cambridge; Professor of Physics, Mason College, Birmingham' },
      { k: 'Published in', v: 'Philosophical Transactions of the Royal Society of London, vol. 175, pp. 343–361' },
      { k: 'Dates', v: 'Received 17 December 1883 · Read 10 January 1884 · Communicated by Lord Rayleigh' },
      { k: 'Status', v: 'Public domain. Full text available at Wikisource and at the Royal Society.' },
    ],
    readFull: 'Read the full text at Wikisource',
    readRoyal: 'See the record at the Royal Society',
    openingTitle: 'How the paper begins (original text, in English)',
    openingNote:
      'Notice that Poynting frames the problem exactly as we still feel it today: energy used to be supposed to be “conveyed thither through the conductor by the current”. He is here to correct that picture.',
    keyPassageTitle: 'The thesis, in his own words',
    keyPassageNote:
      '“…there is a general law for the transfer of energy, according to which it moves at any point perpendicularly to the plane containing the lines of electric force and magnetic force…”',
    wireTitle: 'And his conclusion about a wire carrying a current',
    wireNote:
      'This is the sentence that should accompany every circuit diagram: the energy does not travel along the wire; it enters it from outside.',
    downloadNote:
      'This site reproduces excerpts from the paper (public domain). The complete text, with the full mathematical proof and the applications — straight wire, discharge of a condenser, and more — is at the links above.',
  },
  theory: {
    kicker: 'The theory',
    title: 'Poynting’s theorem: the exact bookkeeping of energy',
    intro:
      'Poynting did not propose a metaphor: he derived a conservation law from Maxwell’s equations. In plain words: the field’s energy inside any volume can only change because it flows across its surface (that is S) or because it is handed over to charges as work and heat (that is J·E).',
    equationNote: '∂u/∂t + ∇·S = − J·E',
    terms: [
      { s: 'u', t: 'Energy stored in the field', d: 'Electromagnetic energy density: u = ½ε₀E² + B²/2μ₀. The field is not “empty medium”: it genuinely stores energy.' },
      { s: 'S', t: 'Energy in flow', d: 'S = E × H. Its divergence ∇·S measures how much energy net-leaves each point as a flow.' },
      { s: 'J·E', t: 'Energy handed to the charges', d: 'The term where the field “pays”: work on the charges, ending up as heat (resistance), light or motion (a motor).' },
    ],
    integral:
      'In integral form: what the field loses inside a volume = what flows out through its surface (∮ S·dA) + what is converted into other forms inside. Not one joule is created or lost without leaving its trace in S.',
  },
  practice: {
    kicker: 'Practice — and why it matters at home',
    title: 'Implications: how energy really gets through your wires',
    intro: 'All of the above stops being theory the moment you look at the cord of the lamp you have switched on:',
    cards: [
      {
        t: 'Your lamp cord',
        d: 'It is not “one” wire: it is two conductors (live and neutral) stuck together inside the same sheath, the outgoing and the return. Energy travels from the socket to the lamp through the field formed between the two of them — in the plastic and the air around them — while the electrons in each conductor merely vibrate back and forth.',
      },
      {
        t: 'On AC, energy never “goes back”',
        d: 'Each half-cycle, E and B reverse sign together, and their product S keeps its direction: source → load. Only with reactive loads (motors, coils, capacitors) does part of the energy slosh back and forth each cycle: that is reactive power. The part you pay for, active power, flows one way.',
      },
      {
        t: 'Losses also enter “sideways”',
        d: 'The heat a wire loses along the way (Joule effect) is not energy “leaking out” from inside: it is Poynting flux entering the conductor radially along the whole route. That is why a bad contact, which concentrates that entry, gets so hot.',
      },
      {
        t: 'Good design means guiding the field well',
        d: 'Coaxial cables, twisted pairs, high-voltage lines, waveguides: all of transmission engineering consists of giving the field a guided, controlled path between source and load. The metal sets the boundary conditions; the field does the transport.',
      },
      {
        t: 'The same, with no wires',
        d: 'An antenna radiates Poynting flux; a solar panel receives it from the Sun (about 1,361 W/m² outside the atmosphere, the “solar constant”); wireless charging and the microwave are also directed S. Poynting unified the wall socket and the sunbeam in a single idea.',
      },
      {
        t: 'P = V·I still works (and now you know why)',
        d: 'Integrating S over the space between the conductors of a line gives exactly P = V·I. Poynting did not change the engineers’ arithmetic: he changed the map of where what the arithmetic measures actually travels.',
      },
    ],
    mythTitle: 'Myths and realities',
    myths: [
      { m: '“Energy goes inside the copper, with the electrons”', r: 'False. It goes in the field outside and immediately around; the copper guides, and if it has resistance it absorbs part of it entering sideways.' },
      { m: '“On AC energy goes and returns, so it never arrives”', r: 'False for resistive loads: E and B reverse together and S keeps the source → load direction.' },
      { m: '“The return wire carries nothing important”', r: 'On the contrary: without both conductors there is no guided field between them. Go and return together form the field’s road.' },
      { m: '“It is only a mathematical interpretation”', r: 'It is a conservation law derived from Maxwell and verified in every radio, optics and power system. It says where the energy is at every instant.' },
    ],
  },
  quiz: {
    kicker: 'Check yourself',
    title: 'Did it click? Five quick questions',
    check: 'Check answers',
    again: 'Try again',
    score: 'Your score',
    perfect: 'Perfect. You now think like Poynting: current circulates, energy flows through the field.',
    good: 'Almost. Go back to the lab: watch what S does when E and B reverse.',
    items: [
      {
        q: 'Where does the energy of a battery mainly travel on its way to a bulb?',
        o: ['Inside the metal, carried by the electrons', 'In the electromagnetic field around and between the wires', 'Inside the nucleus of the electrons', 'Only through the outgoing wire'],
        a: 1,
      },
      {
        q: 'In the return wire of a DC circuit, current flows toward the source. What about the energy?',
        o: ['It also returns to the source', 'It stops', 'It keeps flowing from source to load', 'It goes round in a circle with the current'],
        a: 2,
      },
      {
        q: 'On resistive AC, E and B change sign at the same time. What happens to S?',
        o: ['It reverses every half-cycle', 'It cancels out', 'It is zero on average and at every instant', 'It keeps the source → load direction'],
        a: 3,
      },
      {
        q: 'What did Poynting prove about a straight wire carrying a current?',
        o: ['That energy travels through the centre of the wire', 'That energy enters the wire from outside, radially, and that explains Joule heat', 'That electrons travel at the speed of light', 'That there is no field outside the wire'],
        a: 1,
      },
      {
        q: 'In what units is the Poynting vector S measured?',
        o: ['Joules', 'Amps per metre', 'Watts per square metre (W/m²)', 'Volts'],
        a: 2,
      },
    ],
  },
  sources: {
    kicker: 'Sources and credits',
    title: 'Where all of this comes from',
    items: [
      'Poynting, J. H. (1884). “XV. On the Transfer of Energy in the Electromagnetic Field”. Philosophical Transactions of the Royal Society of London, 175, 343–361. Full text at Wikisource (public domain).',
      'Royal Society Publishing — official record and abstract of the paper (doi: 10.1098/rstl.1884.0016).',
      '“Poynting, John Henry”. Dictionary of National Biography, 1927 supplement (Wikisource) — biographical data.',
      'Photograph of John Henry Poynting: Wikimedia Commons (File: John Henry Poynting.jpg), public domain.',
      'The animations are original educational diagrams made for this site: they do not reproduce figures from the original paper.',
    ],
    footer:
      'Non-profit educational site. Made to understand one idea: energy flows in the field; wires guide it.',
  },
}

export const dict: Record<Lang, Dict> = { es, en }

export const paperExcerpts = {
  opening: [
    'A space containing electric currents may be regarded as a field where energy is transformed at certain points into the electric and magnetic kinds by means of batteries, dynamos, thermoelectric actions, and so on, while in other parts of the field this energy is again transformed into heat, work done by electromagnetic forces, or any form of energy yielded by currents.',
    'Formerly a current was regarded as something travelling along a conductor, attention being chiefly directed to the conductor, and the energy which appeared at any part of the circuit, if considered at all, was supposed to be conveyed thither through the conductor by the current.',
    'But the existence of induced currents and of electromagnetic actions at a distance from a primary circuit from which they draw their energy, has led us, under the guidance of Faraday and Maxwell, to look upon the medium surrounding the conductor as playing a very important part in the development of the phenomena.',
    'If we believe in the continuity of the motion of energy, that is, if we believe that when it disappears at one point and reappears at another it must have passed through the intervening space, we are forced to conclude that the surrounding medium contains at least a part of the energy, and that it is capable of transferring it from point to point.',
    'Starting with Maxwell’s theory, we are naturally led to consider the problem: How does the energy about an electric current pass from point to point — that is, by what paths and according to what law does it travel from the part of the circuit where it is first recognisable as electric and magnetic to the parts where it is changed into heat or other forms?',
  ],
  thesis:
    'The aim of this paper is to prove that there is a general law for the transfer of energy, according to which it moves at any point perpendicularly to the plane containing the lines of electric force and magnetic force, and that the amount crossing unit of area per second of this plane is equal to the product of the intensities of the two forces, multiplied by the sine of the angle between them divided by 4π, while the direction of flow of energy is that in which a right-handed screw would move if turned round from the positive direction of the electromotive to the positive direction of the magnetic intensity.',
  wire:
    'It seems then that none of the energy of a current travels along the wire, but that it comes in from the non-conducting medium surrounding the wire, that as soon as it enters it begins to be transformed into heat, the amount crossing successive layers of the wire decreasing till by the time the centre is reached, where there is no magnetic force, and therefore no energy passing, it has all been transformed into heat. A conduction current then may be said to consist of this inward flow of energy with its accompanying magnetic and electromotive forces, and the transformation of the energy into heat within the conductor.',
}
