import "bootstrap";
import "./style.css";

window.onload = function() {
  // Declaro todas las preguntas del juego como constantes
  const pregunta1 =
    "¿El país dónde escondiste el diamante es interior (no se encuentra bañado por costa)?";
  const pregunta2 =
    "¿El país dónde escondiste el diamante se encuentra bañado por más de un mar/océano?";
  const pregunta3 =
    "¿La bandera del país dónde escondiste el diamante está compuesta únicamente por 2 colores?";
  const pregunta4 =
    "¿La bandera del país dónde escondiste el diamante está compuesta únicamente por 3 colores?";
  const pregunta5 =
    "¿La bandera del país dónde escondiste el diamante está compuesta de franjas horizontales?";
  const pregunta6 =
    "¿La bandera del país dónde escondiste el diamante está compuesta de franjas verticales?";
  const pregunta7 =
    "¿La bandera del país dónde escondiste el diamante posee una cruz?";
  const pregunta8 =
    "¿La bandera del país dónde escondiste el diamante posee el color rojo?";
  const pregunta9 =
    "¿La bandera del país dónde escondiste el diamante posee el color azul?";
  const pregunta10 =
    "¿La bandera del país dónde escondiste el diamante posee el color verde?";
  const pregunta11 =
    "¿La bandera del país dónde escondiste el diamante posee el color blanco?";
  const pregunta12 =
    "¿La bandera del país dónde escondiste el diamante posee el color amarillo?";
  const pregunta13 =
    "¿La bandera del país dónde escondiste el diamante posee el color naranja?";
  const pregunta14 =
    "¿La bandera del país dónde escondiste el diamante posee el color negro?";
  const pregunta15 = "¿El país dónde escondiste el diamante es una isla?";
  const pregunta16 =
    "¿El país donde escondiste el diamante está bañado por costa?";
  const pregunta17 =
    "¿El país dónde escondiste el diamante se encuentra bañado por el Mar Mediterráneo?";
  const pregunta18 =
    "¿El país dónde escondiste el diamante se encuentra bañado por el Mar Báltico?";
  const pregunta19 =
    "¿El país dónde escondiste el diamante se encuentra bañado por el Mar Negro?";
  const pregunta20 =
    "¿El país dónde escondiste el diamante se encuentra bañado por el Océano Atlántico?";
  const pregunta21 =
    "¿El país dónde escondiste el diamante se encuentra en el Norte de Europa?";
  const pregunta22 =
    "¿El país dónde escondiste el diamante se encuentra en el Sur de Europa?";
  const pregunta23 =
    "¿El país dónde escondiste el diamante se encuentra en el Este de Europa?";
  const pregunta24 =
    "¿El país dónde escondiste el diamante se encuentra en el Oeste de Europa?";
  const pregunta25 =
    "¿El país dónde escondiste el diamante es famoso por su producción de vinos?";
  const pregunta26 =
    "¿El país dónde escondiste el diamante es conocido por su 'Fish and chips'?";
  const pregunta27 =
    "¿El país dónde escondiste el diamante es famoso por su producción de aceite de oliva?";
  const pregunta28 =
    "¿El país dónde escondiste el diamante es famoso por su elegante pastelería?";
  const pregunta29 =
    "¿En el país dónde escondiste el diamante se pueden admirar auroras boreales?";
  const pregunta30 =
    "¿El país dónde escondiste el diamante es un destino turístico de verano en el que puedes disfrutar de sus playas?";
  const pregunta31 =
    "¿El país dónde escondiste el diamante es un destino turístico de invierno en el que puedes disfrutar de la nieve?";
  const pregunta32 =
    "¿Has viajado previamente al país dónde escondiste el diamante?";
  const pregunta33 =
    "¿He viajado previamente al país dónde escondiste el diamante?";
  const pregunta34 =
    "¿Has probado previamente comida típica del país dónde escondiste el diamante?";
  const pregunta35 =
    "¿He probado previamente comida típica del país dónde escondiste el diamante?";
  const pregunta36 =
    "¿En nuestra ciudad hay restaurantes que sirvan comida típica del país dónde escondiste el diamante?";
  const pregunta37 =
    "¿Hablas tú el idioma del país dónde escondiste el diamante?";
  const pregunta38 =
    "¿Hablo yo el idioma del país dónde escondiste el diamante?";
  const pregunta39 =
    "¿Sabrías decirme el nombre del Presidente del Gobierno/Primer Ministro de ese país?";
  const pregunta40 =
    "¿Sabría yo decirte el nombre del Presidente del Gobierno/Primer Ministro de ese país?";
  const pregunta41 =
    "¿El país dónde escondiste el diamante forma parte de Escandinavia?";
  const pregunta42 =
    "¿El país dónde escondiste el diamante forma parte de los países nórdicos?";
  const pregunta43 =
    "¿El país dónde escondiste el diamante es uno de los países que conformaron la antigua Yugoslavia?";
  const pregunta44 =
    "¿El país dónde escondiste el diamante limita con la cordillera de los Pirineos?";
  const pregunta45 =
    "¿El país dónde escondiste el diamante limita con la cordillera de los Alpes?";
  const pregunta46 =
    "¿El país dónde escondiste el diamante limita con la cordillera de los Balcanes?";
  const pregunta47 =
    "¿El país dónde escondiste el diamante limita con la cordillera de los Cárpatos?";
  const pregunta48 =
    "¿El país dónde escondiste el diamante limita únicamente con un país?";
  const pregunta49 =
    "¿El país dónde escondiste el diamante limita con sólo 2 países?";
  const pregunta50 =
    "¿El país dónde escondiste el diamante limita con sólo 3 países?";
  const pregunta51 =
    "¿El país dónde escondiste el diamante limita con sólo 4 países?";
  const pregunta52 =
    "¿El país dónde escondiste el diamante limita con 5 o más países?";
  const pregunta53 =
    "¿Se conduce por la izquierda en el país dónde escondiste el diamante?";
  const pregunta54 =
    "¿Se conduce por la derecha en el país dónde escondiste el diamante?";
  const pregunta55 =
    "¿En el país dónde escondiste el diamante el salario medio es mayor que el de nuestro país?";
  const pregunta56 =
    "¿En el país dónde escondiste el diamante el salario medio es menor que el de nuestro país?";
  const pregunta57 =
    "¿En la capital del país dónde escondiste el diamante se encuentra el museo de Anna Frank?";
  const pregunta58 =
    "¿El país dónde escondiste el diamante tiene como moneda oficial el Euro?";
  const pregunta59 =
    "¿El país dónde escondiste el diamante tiene como moneda oficial una divisa distinta del Euro?";
  const pregunta60 =
    "¿El país dónde escondiste el diamante es conocido por sus balnearios termales al aire libre?";
  const pregunta61 =
    "¿El país dónde escondiste el diamante es conocido por su Oktoberfest?";
  const pregunta62 =
    "¿El país dónde escondiste el diamante es conocido por su fabricación de relojes?";
  const pregunta63 =
    "¿El país dónde escondiste el diamante es conocido por su pasta y su pizza?";
  const pregunta64 =
    "¿El país dónde escondiste el diamante es conocido por su paella y su jamón ibérico?";
  const pregunta65 =
    "¿En la capital del país dónde escondiste el diamante se encuentra la Casa Danzante?";
  const pregunta66 =
    "¿El país dónde escondiste el diamante es conocido por sus pasteles de Belém?";
  const pregunta67 =
    "¿El nombre de la capital del país dónde escondiste el diamante comienza por vocal?";
  const pregunta68 =
    "¿El nombre de la capital del país dónde escondiste el diamante comienza por consonante?";
  const pregunta69 =
    "¿El nombre del país dónde escondiste el diamante comienza por vocal?";
  const pregunta70 =
    "¿El nombre del país dónde escondiste el diamante comienza por consonante?";
  const pregunta71 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'S'?";
  const pregunta72 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'K'?";
  const pregunta73 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'E'?";
  const pregunta74 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'P'?";
  const pregunta75 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'I'?";
  const pregunta76 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'C'?";
  const pregunta77 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'H'?";
  const pregunta78 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'A'?";
  const pregunta79 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'B'?";
  const pregunta80 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'R'?";
  const pregunta81 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'U'?";
  const pregunta82 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'F'?";
  const pregunta83 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'N'?";
  const pregunta84 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'L'?";
  const pregunta85 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'M'?";
  const pregunta86 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'G'?";
  const pregunta87 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'D'?";
  const pregunta88 =
    "¿El nombre del país dónde escondiste el diamante comienza por la letra 'T'?";
  const pregunta89 =
    "¿El idioma oficial del país dónde escondiste el diamante proviene de la lengua romance?";
  const pregunta90 =
    "¿El idioma oficial del país dónde escondiste el diamante proviene de la lengua eslava?";
  const pregunta91 =
    "¿El idioma oficial del país dónde escondiste el diamante proviene del ruso antiguo?";
  const pregunta92 =
    "¿El idioma oficial del país dónde escondiste el diamante proviene de la lengua germánica?";
  const pregunta93 =
    "¿El país dónde escondiste el diamante es conocido por sus pierogis?";
  const pregunta94 =
    "¿En la capital del país dónde escondiste el diamante se encuentra la sede de la Unión Europea?";
  const pregunta95 =
    "¿El país dónde escondiste el diamante es el país natal de Mozart?";
  const pregunta96 =
    "¿El país dónde escondiste el diamante es conocido por su crianza y exportación de salmón?";
  const pregunta97 =
    "¿El país dónde escondiste el diamante es conocido por ser el país de los fundadores de Ikea?";
  const pregunta98 =
    "¿El país dónde escondiste el diamante es conocido por sus impresionantes glaciares y géiseres?";
  const pregunta99 =
    "¿El país dónde escondiste el diamante es conocido por ser la cuna de la filosofía y la mitología?";
  const pregunta100 =
    "¿El país dónde escondiste el diamante es conocido por su sauna?";
  const pregunta101 =
    "¿El país dónde escondiste el diamante es conocido por ser la residencia habitual del Conde Drácula?";
  const pregunta102 =
    "¿A la capital de ese país se llega desde nuestra localización en menos de 2 horas de avión?";
  const pregunta103 =
    "¿A la capital de ese país se llega desde nuestra localización en más de 2 horas de avión?";
  const pregunta104 =
    "¿Sabría yo decir el nombre de la capital del país dónde escondiste el diamante?";
  const pregunta105 =
    "¿Sabrías decir el nombre de la capital del país dónde escondiste el diamante?";
  const pregunta106 =
    "¿Sabría yo decir 'te quiero' en el idioma oficial del país dónde escondiste el diamante?";
  const pregunta107 =
    "¿Sabrías decir 'te quiero' en el idioma oficial del país dónde escondiste el diamante?";
  const pregunta108 =
    "¿El país dónde escondiste el diamante tiene una población superior a 15 millones de habitantes?";
  const pregunta109 =
    "¿El país dónde escondiste el diamante tiene una población inferior a 15 millones de habitantes?";
  const pregunta110 =
    "Si escucharas a personas de ese país hablando en su idioma, ¿sabrías de qué país son?";
  const pregunta111 =
    "Si yo escuchara a personas de ese país hablando en su idioma, ¿sabría de qué país son?";
  const pregunta112 =
    "¿El país dónde escondiste el diamante limita con el continente asiático?";
  const pregunta113 =
    "¿Crees que yo podría aprender el idioma de ese país fácilmente?";
  const pregunta114 =
    "¿Crees que podrías aprender el idioma de ese país fácilmente?";
  const pregunta115 =
    "¿La capital del país dónde escondiste el diamante es conocida por llamarse como un nombre propio femenino?";
  const pregunta116 =
    "¿La bandera del país dónde escondiste el diamante posee algún símbolo?";
  const pregunta117 =
    "¿La bandera del país dónde escondiste el diamante posee algún símbolo (exceptuando las cruces)?";
  const pregunta118 =
    "¿El país dónde escondiste el diamante es conocido por tener varias estrellas en su bandera?";
  const pregunta119 =
    "¿La bandera del país dónde escondiste el diamante posee una media luna?";
  const pregunta120 =
    "¿El país dónde escondiste el diamante forma parte de los micro-estados?";
  const pregunta121 =
    "¿El país dónde escondiste el diamante es el micro-estado que limita únicamente con Francia?";
  const pregunta122 =
    "¿El país dónde escondiste el diamante es el micro-estado dónde reside el Papa?";
  const pregunta123 =
    "¿El país dónde escondiste el diamante es el micro-estado que limita con España y Francia?";
  const pregunta124 =
    "¿El país dónde escondiste el diamante es uno de los micro-estados que son islas del mediterráneo?";
  const pregunta125 =
    "¿El país dónde escondiste el diamante es uno de los micro-estados que limita con Italia?";
  const pregunta126 =
    "¿Es el país donde escondiste el diamante el micro-estado que limita con 3 países?";
  const pregunta127 =
    "¿Este país fue el ganador de la última edición de eurovisión?";
  const pregunta128 =
    "¿La selección de fútbol de este país ganó la última edición de la eurocopa de fútbol?";
  const pregunta129 =
    "¿El actual jugador de tenis n°1 del ranking ATP, es originario de este país?";

  // Ahora hacemos el array donde estarán todas las preguntas.
  const preguntas = [
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    pregunta6,
    pregunta7,
    pregunta8,
    pregunta9,
    pregunta10,
    pregunta11,
    pregunta12,
    pregunta13,
    pregunta14,
    pregunta15,
    pregunta16,
    pregunta17,
    pregunta18,
    pregunta19,
    pregunta20,
    pregunta21,
    pregunta22,
    pregunta23,
    pregunta24,
    pregunta25,
    pregunta26,
    pregunta27,
    pregunta28,
    pregunta29,
    pregunta30,
    pregunta31,
    pregunta32,
    pregunta33,
    pregunta34,
    pregunta35,
    pregunta36,
    pregunta37,
    pregunta38,
    pregunta39,
    pregunta40,
    pregunta41,
    pregunta42,
    pregunta43,
    pregunta44,
    pregunta45,
    pregunta46,
    pregunta47,
    pregunta48,
    pregunta49,
    pregunta50,
    pregunta51,
    pregunta52,
    pregunta53,
    pregunta54,
    pregunta55,
    pregunta56,
    pregunta57,
    pregunta58,
    pregunta59,
    pregunta60,
    pregunta61,
    pregunta62,
    pregunta63,
    pregunta64,
    pregunta65,
    pregunta66,
    pregunta67,
    pregunta68,
    pregunta69,
    pregunta70,
    pregunta71,
    pregunta72,
    pregunta73,
    pregunta74,
    pregunta75,
    pregunta76,
    pregunta77,
    pregunta78,
    pregunta79,
    pregunta80,
    pregunta81,
    pregunta82,
    pregunta83,
    pregunta84,
    pregunta85,
    pregunta86,
    pregunta87,
    pregunta88,
    pregunta89,
    pregunta90,
    pregunta91,
    pregunta92,
    pregunta93,
    pregunta94,
    pregunta95,
    pregunta96,
    pregunta97,
    pregunta98,
    pregunta99,
    pregunta100,
    pregunta101,
    pregunta102,
    pregunta103,
    pregunta104,
    pregunta105,
    pregunta106,
    pregunta107,
    pregunta108,
    pregunta109,
    pregunta110,
    pregunta111,
    pregunta112,
    pregunta113,
    pregunta114,
    pregunta115,
    pregunta116,
    pregunta117,
    pregunta118,
    pregunta119,
    pregunta120,
    pregunta121,
    pregunta122,
    pregunta123,
    pregunta124,
    pregunta125,
    pregunta126,
    pregunta127,
    pregunta128,
    pregunta129,
  ];

  // Declaro las variables constantes de países
  const pais1 = "Islandia";
  const pais2 = "Irlanda";
  const pais3 = "Reino Unido";
  const pais4 = "Suecia";
  const pais5 = "Noruega";
  const pais6 = "Finlandia";
  const pais7 = "Estonia";
  const pais8 = "Letonia";
  const pais9 = "Lituania";
  const pais10 = "Bielorrusia";
  const pais11 = "Polonia";
  const pais12 = "Alemania";
  const pais13 = "Dinamarca";
  const pais14 = "Paises Bajos";
  const pais15 = "Belgica";
  const pais16 = "Francia";
  const pais17 = "España";
  const pais18 = "Portugal";
  const pais19 = "Andorra";
  const pais20 = "Luxemburgo";
  const pais21 = "Liechtenstein";
  const pais22 = "Suiza";
  const pais23 = "Italia";
  const pais24 = "Austria";
  const pais25 = "Chequia";
  const pais26 = "Eslovenia";
  const pais27 = "Hungria";
  const pais28 = "Croacia";
  const pais29 = "Bosnia y herzegovina";
  const pais30 = "Montenegro";
  const pais31 = "Albania";
  const pais32 = "Grecia";
  const pais33 = "Turquía";
  const pais34 = "Bulgaria";
  const pais35 = "Macedonia del Norte";
  const pais36 = "Serbia";
  const pais37 = "Rumanía";
  const pais38 = "Moldavia";
  const pais39 = "Ucrania";
  const pais40 = "Eslovaquia";
  const pais41 = "San Marino";
  const pais42 = "Ciudad del Vaticano";
  const pais43 = "Chipre";
  const pais44 = "Kosovo";
  const pais45 = "Monaco";
  const pais46 = "Malta";
  const pais47 = "Rusia";
  // Hago el array de países
  const paises = [
    pais1,
    pais2,
    pais3,
    pais4,
    pais5,
    pais6,
    pais7,
    pais8,
    pais9,
    pais10,
    pais11,
    pais12,
    pais13,
    pais14,
    pais15,
    pais16,
    pais17,
    pais18,
    pais19,
    pais20,
    pais21,
    pais22,
    pais23,
    pais24,
    pais25,
    pais26,
    pais27,
    pais28,
    pais29,
    pais30,
    pais31,
    pais32,
    pais33,
    pais34,
    pais35,
    pais36,
    pais37,
    pais38,
    pais39,
    pais40,
    pais41,
    pais42,
    pais43,
    pais44,
    pais45,
    pais46,
    pais47,
  ];
  // Declaro la función de randomizar un país para que al incio se elija un país y de ahí se responda a todo
  function randomizarPais() {
    let paisRandomizado = Math.floor(Math.random() * paises.length);
    return paises[paisRandomizado];
  }

  // Ejemplo de uso:
  let paisSeleccionado = randomizarPais();
  console.log("El país seleccionado es:", paisSeleccionado);

  // Hago la función de randomizar para que me den 14 preguntas, debo de poner 2 preguntas en cada carta
  function randomizarPreguntas() {
    let preguntasRandomizadas = [];
    for (let i = 0; i < 7; i++) {
      // 7 combinaciones
      let randomNumber1 = Math.floor(Math.random() * preguntas.length);
      let randomNumber2 = Math.floor(Math.random() * preguntas.length);
      preguntasRandomizadas.push(
        `${preguntas[randomNumber1]} ${preguntas[randomNumber2]}`
      );
    }
    return preguntasRandomizadas;
  }
};
