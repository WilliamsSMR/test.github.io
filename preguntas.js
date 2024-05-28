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
    question: "¿Qué niveles de caché existen para reducir el tiempo de acceso a los datos?",
    answer: "Nivel 1 y 2",
    options: [
      "Nivel 1 y 2",
      "Nivel 2 y 3",
      "Nivel 3 y 4",
      "Nivel 1 y 3"
    ]
  },
  {
    numb: 3,
    question: "El bus frontal conecta la CPU con:",
    answer: "La memoria RAM",
    options: [
      "La memoria RAM",
      "La unidad de disco duro",
      "La placa base",
      "La tarjeta gráfica"
    ]
  },
  {
    numb: 4,
    question: "Cuando hablamos de arquitecturas de 32 o 64 bits, nos referimos al ancho de los registros con los que trabaja la:",
    answer: "ALU",
    options: [
      "FPU",
      "ALU",
      "Unidad de control",
      "Memoria caché"
    ]
  },
  {
    numb: 5,
    question: "El bus posterior es la interfaz entre:",
    answer: "La CPU y el disco duro",
    options: [
      "La CPU y la RAM",
      "La caché de nivel 1, el núcleo y la caché de nivel 2",
      "La CPU y el disco duro",
      "La FPU y la ALU"
    ]
  },
  {
    numb: 6,
    question: "Cuando la caché tiene una suma, ¿qué indica esto?",
    answer: "Que una parte es para direcciones y otra para datos",
    options: [
      "Que tiene datos duplicados",
      "Que una parte es para direcciones y otra para datos",
      "Que está sobrecargada",
      "Que está sincronizada con la CPU"
    ]
  },
  {
    numb: 7,
    question: "¿Cuál es la principal función de la RAM?",
    answer: "Almacenar datos temporalmente para que estén accesibles para la CPU",
    options: [
      "Almacenar datos permanentemente",
      "Realizar operaciones aritméticas",
      "Almacenar datos temporalmente para que estén accesibles para la CPU",
      "Conectar la CPU con la placa base"
    ]
  },
  {
    numb: 8,
    question: "¿Qué significa 'Dual Channel' en relación con la RAM?",
    answer: "Instalar dos módulos de RAM para aumentar el ancho de banda",
    options: [
      "Utilizar un único módulo de RAM",
      "Instalar dos módulos de RAM para aumentar el espacio de almacenamiento",
      "Instalar dos módulos de RAM para aumentar el ancho de banda",
      "Utilizar la RAM de la tarjeta gráfica"
    ]
  },
  {
    numb: 9,
    question: "La latencia en la RAM se refiere a:",
    answer: "El retardo al acceder a los distintos componentes de la RAM",
    options: [
      "La velocidad de reloj de la RAM",
      "La cantidad de módulos de RAM instalados",
      "El retardo al acceder a los distintos componentes de la RAM",
      "La capacidad total de la RAM"
    ]
  },
  {
    numb: 10,
    question: "¿Cuál de las siguientes es una característica de la SDRAM?",
    answer: "Se sincroniza con el reloj para leer y escribir en ráfagas",
    options: [
      "Se sincroniza con el reloj para leer y escribir en ráfagas",
      "Es más cara que la SRAM",
      "Tiene menor velocidad que la DRAM",
      "No es compatible con DDR"
    ]
  },
  {
    numb: 11,
    question: "¿Qué tipo de RAM es más cara y se utiliza como caché?",
    answer: "SRAM",
    options: [
      "DRAM",
      "SDRAM",
      "SRAM",
      "DDR"
    ]
  },
  {
    numb: 12,
    question: "¿Qué tipo de RAM es comúnmente utilizado en tarjetas gráficas?",
    answer: "VRAM",
    options: [
      "DRAM",
      "GDDR/RAM DDR",
      "SDRAM",
      "VRAM"
    ]
  },
  {
    numb: 13,
    question: "¿Qué tipo de RAM tiene 288 pines?",
    answer: "DDR4",
    options: [
      "DDR",
      "DDR2",
      "DDR3",
      "DDR4"
    ]
  },
  {
    numb: 14,
    question: "¿Cuál es el propósito principal de una tarjeta gráfica?",
    answer: "Procesar gráficos",
    options: [
      "Almacenar datos",
      "Proveer conectividad a la red",
      "Procesar gráficos",
      "Gestionar la memoria RAM"
    ]
  },
  {
    numb: 15,
    question: "Si una tarjeta gráfica viene integrada, ¿qué tipo de memoria usará?",
    answer: "Su propia VRAM",
    options: [
      "Su propia VRAM",
      "La memoria RAM del ordenador",
      "SRAM",
      "SDRAM"
    ]
  },
  {
    numb: 16,
    question: "¿Qué conector de tarjeta gráfica transmite tanto audio como video?",
    answer: "HDMI",
    options: [
      "DVI",
      "HDMI",
      "S-Video",
      "VGA"
    ]
  },
  {
    numb: 17,
    question: "¿Qué es 'Wake on LAN'?",
    answer: "Un estándar de red que permite encender remotamente ordenadores apagados",
    options: [
      "Una tarjeta de red que soporta WiFi",
      "Un estándar de red que permite encender remotamente ordenadores apagados",
      "Un protocolo de enrutamiento de red",
      "Una función de seguridad en la red"
    ]
  },
  {
    numb: 18,
    question: "¿Qué tipo de tarjeta se usa para conectar ordenadores entre sí?",
    answer: "Tarjeta de red",
    options: [      "Tarjeta gráfica",
    "Tarjeta de sonido",
    "Tarjeta de red",
    "Tarjeta de expansión"
  ]
},
{
  numb: 19,
  question: "¿Qué tipo de dispositivo permite la entrada de texto mediante la digitalización?",
  answer: "Escáner",
  options: [
    "Impresora",
    "Monitor",
    "Escáner",
    "Ratón"
  ]
},
{
  numb: 20,
  question: "¿Cuál de los siguientes dispositivos permite la conexión de múltiples periféricos a través de un solo puerto?",
  answer: "Concentrador USB",
  options: [
    "Tarjeta de red",
    "Tarjeta gráfica",
    "Concentrador USB",
    "Fuente de alimentación"
  ]
},
{
  numb: 21,
  question: "¿Qué tipo de RAM se utiliza en portátiles?",
  answer: "SO DIMM",
  options: [
    "DIMM",
    "GDDR",
    "SO DIMM",
    "DDR4"
  ]
},
{
  numb: 22,
  question: "¿Qué dispositivo convierte señales digitales en analógicas para una pantalla?",
  answer: "RAMDAC",
  options: [
    "HDMI",
    "RAMDAC",
    "VGA",
    "DVI"
  ]
},
{
  numb: 23,
  question: "¿Qué tipo de impresora ofrece la mayor calidad de impresión?",
  answer: "Láser",
  options: [
    "Matricial",
    "Láser",
    "Inyección de tinta",
    "Térmica"
  ]
},
{
  numb: 24,
  question: "¿Qué tipo de teclado tiene interruptores mecánicos?",
  answer: "Mecánico",
  options: [
    "De membrana",
    "Mecánico",
    "Inalámbrico",
    "Ergonómico"
  ]
},
{
  numb: 25,
  question: "¿Cuál es la función principal de la fuente de alimentación en un PC?",
  answer: "Proporcionar electricidad a todos los componentes del PC",
  options: [
    "Gestionar la memoria RAM",
    "Proporcionar electricidad a todos los componentes del PC",
    "Conectar la CPU con la placa base",
    "Almacenar datos temporalmente"
  ]
},
{
  numb: 26,
  question: "¿Qué puede causar la electricidad estática en los componentes del PC?",
  answer: "Ocasionar averías irreversibles",
  options: [
    "Aumentar la velocidad de los componentes",
    "Ocasionar averías irreversibles",
    "Mejorar el rendimiento",
    "Reducir el consumo de energía"
  ]
},
{
  numb: 27,
  question: "¿Qué se utiliza para proteger la fuente de alimentación contra picos de voltaje?",
  answer: "Un supresor de voltaje",
  options: [
    "Un regulador de voltaje",
    "Un supresor de voltaje",
    "Una fuente de alimentación redundante",
    "Un estabilizador de corriente"
  ]
},
{
  numb: 28,
  question: "¿Qué dispositivo permite mantener el PC funcionando temporalmente en caso de apagón?",
  answer: "Un Sistema de Alimentación Ininterrumpida (SAI)",
  options: [
    "Un supresor de voltaje",
    "Un Sistema de Alimentación Ininterrumpida (SAI)",
    "Un regulador de voltaje",
    "Un protector de sobretensiones"
  ]
},
{
  numb: 29,
  question: "¿Cuál es la función de la tarjeta de sonido en un PC?",
  answer: "Producir y procesar el sonido",
  options: [
    "Proporcionar conectividad a Internet",
    "Controlar la memoria RAM",
    "Producir y procesar el sonido",
    "Gestionar la tarjeta gráfica"
  ]
},
{
  numb: 30,
  question: "¿Qué tipo de tarjeta de expansión permite conectar y desconectar dispositivos sin apagar el PC?",
  answer: "Hot Plug",
  options: [
    "PCI Express",
    "AGP",
    "Hot Plug",
    "ISA"
  ]
}
];

