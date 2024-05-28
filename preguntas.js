let questions = [
  {
    numb: 1,
    question: "¿Cuál es la función principal de la Unidad de Punto Flotante (FPU) en la CPU?",
    answer: "Realizar operaciones aritméticas complejas",
    options: [
      "Almacenar datos temporalmente",
      "Realizar operaciones aritméticas complejas",
      "Gestionar la memoria RAM",
      "Conectar la CPU con la placa base"
    ]
  },
  {
    numb: 2,
    question: "¿Qué es un sistema operativo?",
    answer: "Es un programa que controla el hardware de la computadora y actúa como una interfaz entre el hardware y el usuario.",
    options: [
      "Es un programa que controla el hardware de la computadora y actúa como una interfaz entre el hardware y el usuario.",
      "Es un conjunto de herramientas de productividad, como procesadores de texto y hojas de cálculo.",
      "Es el componente físico de una computadora, que incluye la CPU, la memoria y el disco duro."
    ]
  },
  {
    numb: 3,
    question: "¿Cuál de las siguientes no es una función del sistema operativo?",
    answer: "Ejecución de aplicaciones de usuario.",
    options: [
      "Administración de recursos del sistema.",
      "Interfaz de usuario gráfica.",
      "Ejecución de aplicaciones de usuario."
    ]
  },
  {
    numb: 4,
    question: "¿Qué sistema operativo es de código abierto?",
    answer: "Linux.",
    options: [
      "Windows.",
      "Linux.",
      "MacOS."
    ]
  },
  {
    numb: 5,
    question: "¿Cuál de las siguientes no es una distribución de Linux?",
    answer: "Windows.",
    options: [
      "Ubuntu.",
      "Fedora.",
      "Windows."
    ]
  },
  {
    numb: 6,
    question: "¿Qué es un kernel?",
    answer: "El núcleo de un sistema operativo que administra los recursos del hardware.",
    options: [
      "El núcleo de un sistema operativo que administra los recursos del hardware.",
      "Un dispositivo de entrada que permite a los usuarios comunicarse con la computadora.",
      "Una unidad de almacenamiento de datos de solo lectura."
    ]
  },
  {
    numb: 7,
    question: "¿Qué es una GUI?",
    answer: "Una Interfaz Gráfica de Usuario.",
    options: [
      "Una Interfaz Gráfica de Usuario.",
      "Un lenguaje de programación.",
      "Un protocolo de red."
    ]
  },
  {
    numb: 8,
    question: "¿Qué es la multitarea?",
    answer: "La capacidad de un sistema operativo para ejecutar múltiples procesos simultáneamente.",
    options: [
      "La capacidad de un sistema operativo para ejecutar múltiples procesos simultáneamente.",
      "La capacidad de un sistema operativo para ejecutar solo un proceso a la vez.",
      "La capacidad de un sistema operativo para ejecutar procesos en múltiples núcleos de CPU."
    ]
  },
  {
    numb: 9,
    question: "¿Qué es la multiprogramación?",
    answer: "Una técnica utilizada por los sistemas operativos para permitir que varios programas se ejecuten simultáneamente.",
    options: [
      "Una técnica utilizada por los sistemas operativos para permitir que varios programas se ejecuten simultáneamente.",
      "La capacidad de un programa para ejecutar múltiples tareas al mismo tiempo.",
      "Un sistema que ejecuta un solo programa a la vez."
    ]
  },
  {
    numb: 10,
    question: "¿Qué es la memoria virtual?",
    answer: "Una técnica que permite que la memoria principal se expanda utilizando el disco duro.",
    options: [
      "Una técnica que permite que la memoria principal se expanda utilizando el disco duro.",
      "Un tipo de memoria que almacena la configuración del sistema operativo.",
      "La cantidad total de memoria física instalada en una computadora."
    ]
  },
  {
    numb: 11,
    question: "¿Qué hace el gestor de arranque durante el inicio del sistema operativo?",
    answer: "Comprueba la tabla de particiones del disco duro en busca de la partición activa.",
    options: [
      "Carga el sistema operativo en la memoria RAM.",
      "Verifica la integridad del sistema operativo.",
      "Comprueba la tabla de particiones del disco duro en busca de la partición activa."
    ]
  },
  {
    numb: 12,
    question: "¿Qué es la tecnología TripleChannel?",
    answer: "Mismo funcionamiento que DualChannel pero con un módulo más de memoria, pero es exclusivo de Intel Core i7.",
    options: [
      "Mismo funcionamiento que DualChannel pero con un módulo más de memoria DDR3.",
      "Mismo funcionamiento que DualChannel pero con un módulo más de memoria, pero es exclusivo de Intel Core i7.",
      "Mismo funcionamiento que DualChannel pero con ranuras de memoria de 3 en 3, ideado por AMD."
    ]
  },
  {
    numb: 13,
    question: "¿Qué funciones tiene el chipset?",
    answer: "Controlar la transmisión de datos e instrucciones, entre CPU y resto de sistema, y soporte para el bus de expansión.",
    options: [
      "Únicamente manejar la transferencia de datos entre CPU, memoria y periféricos.",
      "Controlar la transmisión de datos e instrucciones, entre CPU y resto de sistema, y soporte para el bus de expansión.",
      "Controlar las señales de control, y además soporte para el bus de expansión."
    ]
  },
  {
    numb: 14,
    question: "Ventajas de la integración de los componentes en la placa base:",
    answer: "Se ahorra una conexión eléctrica a la placa base y/o una ranura de expansión.",
    options: [
      "Amazon se ahorra un viaje de transporte y el usuario final su porte.",
      "Se ahorra una conexión eléctrica a la placa base y/o una ranura de expansión.",
      "Se ahorra un bus de datos en la placa y abarata su coste."
    ]
  },

  {
    numb: 11,
    question: "¿Qué hace el gestor de arranque durante el inicio del sistema operativo?",
    answer: "Comprueba la tabla de particiones del disco duro en busca de la partición activa.",
    options: [
      "Carga el sistema operativo en la memoria RAM.",
      "Verifica la integridad del sistema operativo.",
      "Comprueba la tabla de particiones del disco duro en busca de la partición activa."
    ]
  },
  {
    numb: 12,
    question: "¿Qué es la tecnología TripleChannel?",
    answer: "Mismo funcionamiento que DualChannel pero con un módulo más de memoria, pero es exclusivo de Intel Core i7.",
    options: [
      "Mismo funcionamiento que DualChannel pero con un módulo más de memoria DDR3.",
      "Mismo funcionamiento que DualChannel pero con un módulo más de memoria, pero es exclusivo de Intel Core i7.",
      "Mismo funcionamiento que DualChannel pero con ranuras de memoria de 3 en 3, ideado por AMD."
    ]
  },
  {
    numb: 13,
    question: "¿Qué funciones tiene el chipset?",
    answer: "Controlar la transmisión de datos e instrucciones, entre CPU y resto de sistema, y soporte para el bus de expansión.",
    options: [
      "Únicamente manejar la transferencia de datos entre CPU, memoria y periféricos.",
      "Controlar la transmisión de datos e instrucciones, entre CPU y resto de sistema, y soporte para el bus de expansión.",
      "Controlar las señales de control, y además soporte para el bus de expansión."
    ]
  },
  {
    numb: 14,
    question: "Ventajas de la integración de los componentes en la placa base:",
    answer: "Se ahorra una conexión eléctrica a la placa base y/o una ranura de expansión.",
    options: [
      "Amazon se ahorra un viaje de transporte y el usuario final su porte.",
      "Se ahorra una conexión eléctrica a la placa base y/o una ranura de expansión.",
      "Se ahorra un bus de datos en la placa y abarata su coste."
    ]
  },
  {
    numb: 15,
    question: "¿Qué paso de los siguientes NO corresponde al proceso de arranque de la BIOS?",
    answer: "Lectura de la tabla FAT del disco duro.",
    options: [
      "Muestra información del fabricante y la versión de la BIOS.",
      "Si no hay errores, la BIOS busca el adaptador de vídeo y lo inicia.",
      "Lectura de la tabla FAT del disco duro."
    ]
  },
  {
    numb: 16,
    question: "¿Qué paso de los siguientes NO corresponde al proceso de arranque de la BIOS?",
    answer: "Intenta configurar los dispositivos Plug & Play y pide el driver si lo necesita.",
    options: [
      "Muestra sus dispositivos conectados con sus características.",
      "Si no hay errores, la BIOS busca el adaptador de vídeo y lo inicia.",
      "Intenta configurar los dispositivos Plug & Play y pide el driver si lo necesita."
    ]
  },

  {
    numb: 31,
    question: "¿Cuál de los siguientes interfaces es exclusivo de vídeo y no necesita hacer conversión digital monitor-ordenador?",
    answer: "DVI",
    options: [
      "DVI",
      "VGA",
      "HDMI"
    ]
  },
  {
    numb: 32,
    question: "¿Las tarjetas PCI-Express y PCI-X son una evolución de las tarjetas PCI?",
    answer: "No, únicamente PCI-X es una evolución de PCI, pero no hay que confundir con PCI Express.",
    options: [
      "No, únicamente PCI-Express es una evolución de PCI, pero no hay que confundir con PCI-X.",
      "No, únicamente PCI-X es una evolución de PCI, pero no hay que confundir con PCI Express.",
      "SI, ambas son una evolución de PCI, pero las PCI-X tienen ventajas por las variantes de ranuras (1x, 2x, 8x, 16x)."
    ]
  },
  {
    numb: 33,
    question: "¿Qué factor de forma se corresponde con esta placa de 220x330 mm?",
    answer: "Baby AT.",
    options: [
      "AT",
      "Baby AT.",
      "ATX"
    ]
  },
  {
    numb: 34,
    question: "¿Qué factor de forma se corresponde con esta placa de 305x350 mm?",
    answer: "AT.",
    options: [
      "ATX",
      "AT.",
      "Baby AT."
    ]
  },
  {
    numb: 35,
    question: "¿Cómo se denomina el tipo de puerto que se corresponde con la imagen de este conector de 34 pines y estos cables?",
    answer: "FDD",
    options: [
      "IDE o ATA",
      "FDD",
      "SATA"
    ]
  },
  {
    numb: 36,
    question: "¿Qué tipo de conectores se corresponden con la imagen?",
    answer: "CD-IN",
    options: [
      "USB frontales",
      "CD-IN",
      "Ventiladores"
    ]
  },
  {
    numb: 37,
    question: "¿Qué tipo de conectores se corresponden con la imagen?",
    answer: "Ventiladores",
    options: [
      "Ventiladores",
      "USB frontales",
      "CD-IN"
    ]
  },
  {
    numb: 38,
    question: "¿Cómo se denomina el conector de la imagen?",
    answer: "Ambos nombres son correctos",
    options: [
      "PS/2",
      "Mini-DIN",
      "Ambos nombres son correctos"
    ]
  },
  {
    numb: 39,
    question: "¿Tiene relevancia el color del tipo de conector PS/2?",
    answer: "Sí, pues el verde significa que debemos conectar el ratón, y el violeta para el teclado.",
    options: [
      "Sí, pues el morado significa que debemos conectar el ratón, y el verde para el teclado.",
      "No, solo nos informa que estas ranuras PS/2 son exclusivamente para teclado y el ratón independientemente del color.",
      "Sí, pues el verde significa que debemos conectar el ratón, y el violeta para el teclado."
    ]
  },
  {
    numb: 40,
    question: "¿Para qué puerto se usa el cable de la siguiente imagen?",
    answer: "Puerto serie",
    options: [
      "Puerto VGA",
      "Puerto Paralelo",
      "Puerto serie"
    ]
  },
  {
    numb: 41,
    question: "¿Para qué tipo de puerto sirve este cable?",
    answer: "Puerto paralelo",
    options: [
      "Puerto paralelo",
      "Puerto VGA",
      "Puerto serie"
    ]
  },
  {
    numb: 42,
    question: "¿Cómo se denomina el conector externo de la siguiente imagen?",
    answer: "FireWire",
    options: [
      "FireWire",
      "USB 1.0",
      "RJ-45"
    ]
  },
  {
    numb: 43,
    question: "¿Cómo se denomina el conector externo de la siguiente imagen?",
    answer: "FireWire",
    options: [
      "USB 1.0",
      "RJ-45",
      "FireWire"
    ]
  },
  {
    numb: 44,
    question: "¿Qué tipo de cable conector identificas en la imagen?",
    answer: "USB tipo A",
    options: [
      "USB tipo B",
      "USB tipo A",
      "USB estándar"
    ]
  },
  {
    numb: 45,
    question: "¿Qué tipo de cable conector identificas en la imagen?",
    answer: "Mini USB",
    options: [
      "Mini USB",
      "FireWire",
      "Micro USB"
    ]
  },
  {
    numb: 46,
    question: "¿Qué tipo de cable conector identificas en la imagen?",
    answer: "Micro USB",
    options: [
      "Micro USB",
      "FireWire",
      "Mini USB"
    ]
  },
  {
    numb: 47,
    question: "¿Qué placa fue la primera en incluir conectores para puertos en su parte trasera?",
    answer: "Baby AT",
    options: [
      "Baby AT",
      "LPX",
      "ATX"
    ]
  },
  {
    numb: 48,
    question: "¿Qué determina la placa base?",
    answer: "Qué componentes se pueden instalar y las posibilidades de ampliación.",
    options: [
      "Qué componentes se pueden instalar y las posibilidades de ampliación.",
      "Qué componentes se pueden instalar y el formato 32/64 bits.",
      "Qué componentes se pueden instalar y el tipo de alimentación que soporta."
    ]
  },
  {
    numb: 49,
    question: "¿Cómo se denominan los slots de expansión de las placas LPX?",
    answer: "Riserd Card",
    options: [
      "Ranura PCI",
      "Riserd Card",
      "Ranura AGP"
    ]
  },
  {
    numb: 50,
    question: "¿Qué diferencia hay entre la placa LPX y la placa NLX?",
    answer: "Ambas tienen un slot de expansión denominado raiser card, pero la primera en el centro y la segunda en un lateral.",
    options: [
      "NLX tiene varios slots de expansión en el centro, y LPX en cambio los tiene en un lateral.",
      "Ambas tienen un slot de expansión denominado raiser card, pero la primera en el centro y la segunda en un lateral.",
      "La primera tiene un único slot de expansión denominado raiser card"
    ]
  },

  {
    numb: 51,
    question: "La placa BTX",
    answer: "Intentó reemplazar las placas ATX solventando problemas de refrigeración del procesador, pero sin mucho éxito.",
    options: [
      "Intentó reemplazar las placas ATX solventando problemas de refrigeración del procesador, pero sin mucho éxito.",
      "Introducida por Intel a finales de 2004, reemplazó con éxito a las placas ATX.",
      "Intentó reemplazar las placas ATX solventando problemas de refrigeración de la caja ajustando la posición de los ventiladores."
    ]
  },
  {
    numb: 52,
    question: "La placa BTX",
    answer: "Intentó solventar problemas de refrigeración del procesador, pero el resto de la caja se calentaba demasiado.",
    options: [
      "Intentó reemplazar las placas ATX solventando problemas de refrigeración de la caja ajustando la posición de los ventiladores.",
      "La reubicación del ventilador del procesador permitió además que el resto de la caja se refrigerara correctamente.",
      "Intentó solventar problemas de refrigeración del procesador, pero el resto de la caja se calentaba demasiado."
    ]
  },
  {
    numb: 53,
    question: "¿En qué consiste el tipo de socket ZIF?",
    answer: "A través de una palanca en el lateral del zócalo, el micro se inserta/extrae sin necesidad de hacer presión.",
    options: [
      "Los pines están en la placa base en lugar de en el micro, mientras que el micro tiene contactos planos en su parte inferior.",
      "A través de una palanca en el lateral del zócalo, el micro se inserta/extrae sin necesidad de hacer presión.",
      "Gracias a una palanca superior del zócalo, el micro se inserta/extrae sin necesidad de hacer presión."
    ]
  },
  {
    numb: 54,
    question: "¿Qué modelos concretos aplicaron Slots en lugar de sockets para insertar los procesadores?",
    answer: "Athlon de AMD, Pentium II, los primeros Pentium III, y algunos Xeon.",
    options: [
      "Athlon de AMD, y por parte de Intel: Pentium II y Pentium III.",
      "Únicamente Athlon de AMD y Pentium II entre los años 1997 y 2000.",
      "Athlon de AMD, Pentium II, los primeros Pentium III, y algunos Xeon."
    ]
  },
  {
    numb: 55,
    question: "¿Cuántos pines puede tener un módulo DIMM de memoria RAM?",
    answer: "184 pines para memorias DDR, 240 pines para DDR2 y DDR3, y hasta 288 pines para las DDR4 más actuales.",
    options: [
      "Empezaron con 184 pines pero actualmente las memorias DDR4 son de 240 pines.",
      "184 pines para memorias DDR, 240 pines para DDR2 y DDR3, y hasta 288 pines para las DDR4 más actuales.",
      "Empezaron con 184 pines pero actualmente son el doble para mejorar su rapidez."
    ]
  },
  {
    numb: 56,
    question: "¿En qué consiste la memoria EEPROM?",
    answer: "El borrado se hace por impulsos eléctricos sin operaciones físicas sobre los componentes montados, como memoria Flash.",
    options: [
      "El grabado se hace por impulsos eléctricos con operaciones físicas sobre los componentes montados, como memoria Flash.",
      "El borrado se hace por impulsos eléctricos sin operaciones físicas sobre los componentes montados, como memoria Flash.",
      "El grabado se hace por impulsos eléctricos sin operaciones físicas sobre los componentes montados, como memoria Flash."
    ]
  },
  {
    numb: 57,
    question: "Las ranuras de expansión o slots...",
    answer: "Forman parte de un bus por el cual se comunica con los distintos dispositivos del ordenador.",
    options: [
      "Forman parte de un bus por el cual se comunica con los distintos dispositivos del ordenador.",
      "Forman parte de un bus por el cual se comunica con la CPU.",
      "Forman parte de un bus por el cual se comunica con el chipset Norte, y este a su vez con el resto de dispositivos."
    ]
  },
  {
    numb: 58,
    question: "¿El puerto serie de una placa, es macho o hembra?",
    answer: "Macho.",
    options: [
      "Hembra.",
      "Depende de la placa.",
      "Macho."
    ]
  },
  {
    numb: 59,
    question: "¿Cuál de las siguientes características del puerto USB es más correcta?",
    answer: "Soporta tanto dispositivos de baja velocidad como alta velocidad.",
    options: [
      "Bus serie de alta velocidad para dispositivos de alta velocidad.",
      "Hasta la versión 3.0 no se incluyó el estándar de transmisión de energía eléctrica.",
      "Soporta tanto dispositivos de baja velocidad como alta velocidad."
    ]
  },
  {
    numb: 60,
    question: "¿Cuál de las siguientes características del puerto USB es más correcta?",
    answer: "Funciona como un puerto serie pero más rápido.",
    options: [
      "Funciona con dispositivos de alta velocidad, tanto de los más antiguos como los más modernos.",
      "Funciona como un puerto paralelo de alta velocidad.",
      "Funciona como un puerto serie pero más rápido."
    ]
  },
  {
    numb: 61,
    question: "¿Qué tipo de conectores se corresponden con la imagen?",
    answer: "USB frontales",
    options: [
      "USB frontales",
      "Leds de encendido, reset, alimentación, actividad disco duro, altavoz",
      "CD-IN"
    ]
  },
  {
    numb: 62,
    question: "¿A qué dispositivo se debe conectar el conector de color gris de la siguiente imagen?",
    answer: "Altavoces laterales",
    options: [
      "Altavoces delanteros",
      "Altavoces laterales",
      "Altavoces traseros"
    ]
  },
  {
    numb: 63,
    question: "¿A qué dispositivo se debe conectar el conector de color negro de la siguiente imagen?",
    answer: "Altavoces traseros",
    options: [
      "Altavoces laterales",
      "Altavoces delanteros",
      "Altavoces traseros"
    ]
  },
  {
    "numb": 68,
    "question": "¿Qué factor de forma se corresponde con esta placa? 3 letras MAYUSCULAS y no es ATX",
    "answer": "LPX",
    "options": [
      "LPX",
      "BTX",
      "ATX"
    ]
  },
  {
    "numb": 69,
    "question": "¿Qué factor de forma se corresponde con esta placa? Son 3 letras MAYUSCULAS pero no es ATX",
    "answer": "NLX",
    "options": [
      "BTX",
      "LPX",
      "NLX"
    ]
  },
  {
    "numb": 70,
    "question": "¿Qué factor de forma se corresponde con esta placa? Son 3 letras MAYUSCULAS pero no es ATX",
    "answer": "NLX",
    "options": [
      "LPX",
      "NLX",
      "ATX"
    ]
  },
  {
    "numb": 71,
    "question": "¿Qué factor de forma se corresponde con esta placa? 3 letras MAYUSCULAS y no es ATX",
    "answer": "LPX",
    "options": [
      "BTX",
      "LPX",
      "ATX"
    ]
  },
  {
    "numb": 72,
    "question": "Pon las etiquetas del siguiente diagrama de bloques de la CPU:",
    "answer": "Respuesta incorrecta.",
    "options": [
      "FPU",
      "U.Decodif.Instrucción",
      "ALU",
      "Memoria Caché L2",
      "Unidad de Control",
      "Memoria Caché L1",
      "FSB",
      "BSB"
    ]
  },
  {
    "numb": 73,
    "question": "Pon las etiquetas del siguiente diagrama de bloques de las arquitecturas de doble núcleo:",
    "answer": "Respuesta incorrecta.",
    "options": [
      "CPU2",
      "CPU1",
      "L2 CPU2",
      "L2 CPU1",
      "L1 Instrucciones CPU1",
      "L1 Instrucciones CPU2",
      "L1 Datos CPU1",
      "L1 Datos CPU2"
    ]
  },
  {
    "numb": 74,
    "question": "¿Cómo puede acoplarse el procesador a la placa?",
    "answer": "Todas son correctas",
    "options": [
      "En un Slot como si fuera una tarjeta PCI o bien en un Zócalo (socket)",
      "Soldado a la placa",
      "Todas son correctas"
    ]
  },
  {
    "numb": 75,
    "question": "La FPU:",
    "answer": "es el coprocesador matemático.",
    "options": [
      "es el coprocesador matemático.",
      "guarda copia de los datos usados con frecuencia.",
      "tiene un ancho de 256 bits"
    ]
  },
  {
    "numb": 76,
    "question": "¿De qué se encarga el Bus Frontal o FSB?",
    "answer": "Conecta la CPU con la placa base y tiene un ancho de 64 bits.",
    "options": [
      "Es la interfaz entre L1, núcleo y L2 y tiene un ancho de 64 bits.",
      "Conecta la CPU con la placa base y tiene un ancho de 64 bits.",
      "Es la interfaz entre L2 y la placa base, y tiene un ancho de 32 bits."
    ]
  },
  {
    "numb": 77,
    "question": "¿De qué se encarga el Bus Posterior o BSB?",
    "answer": "Es la interfaz entre L1, núcleo y L2 y tiene un ancho de 256 bits.",
    "options": [
      "Conecta la CPU con la placa base y tiene un ancho de 64 bits.",
      "Es la interfaz entre L2 y la placa base, y tiene un ancho de 256 bits.",
      "Es la interfaz entre L1, núcleo y L2 y tiene un ancho de 256 bits."
    ]
  },
  {
    "numb": 78,
    "question": "¿Qué ventajas supone el uso de procesadores de doble núcleo?",
    "answer": "Aumento de la velocidad de ejecución moderando la temperatura.",
    "options": [
      "Comunicaciones de E/S de alta velocidad",
      "Aumento de la velocidad de ejecución moderando la temperatura.",
      "Aumento de la velocidad de ejecución aunque con excesivo sobrecalentamiento."
    ]
  },
  {
    "numb": 79,
    "question": "¿Qué ventajas supone el uso de los sistemas multiprocesador?",
    "answer": "Acceso más rápido a RAM y lograr comunicaciones de E/S de alta velocidad.",
    "options": [
      "Los núcleos pueden trabajar en el mismo trabajo sin que afecte al rendimiento.",
      "Acceso más rápido a RAM y lograr comunicaciones de E/S de alta velocidad.",
      "Aumento de la velocidad de ejecución moderando la temperatura."
    ]
  },
  {
    "numb": 80,
    "question": "¿Qué es el multiplicador?",
    "answer": "El factor de diferencia de velocidad entre el procesador y la placa base.",
    "options": [
      "El factor de diferencia de velocidad entre el procesador y la memoria caché.",
      "El factor de diferencia de velocidad entre el procesador y la memoria RAM.",
      "El factor de diferencia de velocidad entre el procesador y la placa base."
    ]
  },
  {
    "numb": 81,
    "question": "¿Qué es el multiplicador?",
    "answer": "El factor que mide la diferencia entre la velocidad interna y la velocidad externa del procesador.",
    "options": [
      "El factor de diferencia de velocidad entre el procesador y la memoria caché.",
      "El factor que mide la diferencia entre la velocidad interna y la velocidad externa del procesador.",
      "El factor de diferencia de velocidad entre el procesador y la memoria RAM."
    ]
  },
  {
    "numb": 82,
    "question": "¿Qué procesador propio de AMD se vendieron millones y lo posicionó como claro competidor de Intel?",
    "answer": "Am386",
    "options": [
      "Am286",
      "Am386",
      "Am486"
    ]
  },

  

















]
  // Las preguntas restantes siguen un patrón similar y pueden ser añadidas de manera análoga.



