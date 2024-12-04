"use client";

import Image from "next/image";
import Link from 'next/link';
import Dataviz1 from "@/app/componentes/Visualizacion1"
import Dataviz2 from "@/app/componentes/Visualizacion2"
import Dataviz3 from "@/app/componentes/Visualizacion3"
import Dataviz4 from "@/app/componentes/Visualizacion4"
import Dataviz5 from "@/app/componentes/Visualizacion5"
import ImageReplacer from "@/app/componentes/ImagenesScroll"
import React from 'react';
import { useRef } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion, useScroll, useTransform } from "motion/react";
import { ParallaxContext } from "@/node_modules/react-scroll-parallax/dist/index";


export default function Home() {

  const { scrollY } = useScroll();
  const ref = useRef(null);
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const rotate = useTransform(scrollY, [0, 0.5], [-180, 0]);
  

  const opacityFirstImage = useTransform(scrollY, [0, 300], [1, 0]);
  const opacitySecondImage = useTransform(scrollY, [0, 300], [0, 1]);
  
  return (
  <main className="flex flex-col min-h-screen overflow-x-hidden">


<div className="relative w-full h-full">
      <video
        src="Videointro.mp4"
        className="w-full h-auto"
        autoPlay
        muted
        loop
      />

      <div className="absolute bottom-20 left-10 transform px-8 flex flex-col items-start">
        <motion.h1
          style={{ scale, y, opacity }}
          className="text-white text-5xl font-bold"
        >
          Ciudades costeras y
        </motion.h1>
        <motion.h2
          style={{ scale, y, opacity }}
          className="text-white text-8xl font-bold mt-4"
        >
          la amenaza del
        </motion.h2>
        <motion.h3
          style={{ scale, y, opacity }}
          className="text-white text-8xl font-bold mt-4"
        >
        cambio climático
        </motion.h3>
      </div>
    </div>


<div className="px-32">

<div className="flex flex-col items-center mt-32">

  <div className="w-full p-8">
    <h2 className="text-black text-5xl font-bold">
      ¿Qué es el cambio climático?
    </h2>
  
  <p className="text-black text-2xl mt-16">
  El cambio climático es uno de los mayores desafíos de nuestro tiempo, y sus impactos ya se están sintiendo en todo el mundo. Pero ¿qué es exactamente el cambio climático? En términos simples, se refiere a cambios a largo plazo en las temperaturas promedio y los patrones climáticos globales y regionales. Estos cambios pueden ser causados por procesos naturales, como erupciones volcánicas o variaciones en la energía solar. Sin embargo, desde el siglo XIX, las actividades humanas han sido el principal impulsor de este fenómeno.
  </p>
  </div>

  <div className="w-screen flex justify-center mt-32">
    <img src="foto.jpg" alt="Planeta Tierra" className="w-screen h-auto" />
  </div>
</div>



<div className="flex flex-col items-center mt-32">

  <div className="w-full p-8">
    <h2 className="text-black text-5xl font-bold">
    Causas Principales
    </h2>
  <p className="text-black text-2xl mt-16">
    Las emisiones principales de gases de efecto invernadero que provocan el cambio climático son el dióxido de carbono y el metano. Estos proceden del uso de la gasolina para conducir un coche o del carbón para calentar un edificio, por ejemplo. El desmonte de tierras y bosques también puede liberar dióxido de carbono. La agricultura y las actividades relacionadas con el petróleo y el gas son fuentes importantes de emisiones de metano. La energía, la industria, el transporte, los edificios, la agricultura y el uso del suelo se encuentran entre los principales emisores.
  </p>

  </div>
</div>


  <div className="flex justify-center items-center w-full mt-16 mb-12">
    <Dataviz3 />
  </div>

<h2 className="text-black text-5xl font-bold mt-32 mb-6 p-8">
      ¿Cómo Afecta el Cambio Climático a <br />
      las Ciudades Costeras?
    </h2>

<div className="flex items-start justify-center items-center mt-12">

  <div className="w-full md:w-1/2 flex">
    <img src="iceberg1.png" alt="Iceberg" className="w-3/4 h-auto" />
  </div>

   
  <div className="w-full md:w-1/2 p-6">
    <Parallax translateY={[100, -100]} speed={2}>
    <p className="text-black text-2xl max-w-prose inline-block">
    El calentamiento global acelera el deshielo de glaciares y casquetes polares, lo que provoca un aumento del nivel del mar. Este fenómeno pone en riesgo a las ciudades costeras al causar inundaciones más frecuentes, erosión de playas, salinización de fuentes de agua dulce y daños en infraestructuras clave. Las proyecciones indican que estas amenazas se intensificarán si no se toman medidas urgentes para reducir las emisiones de gases de efecto invernadero.
    </p>
    </Parallax>

  </div>
</div>


<div className="flex justify-center items-center w-3/4 mt-16 mb-16 mx-auto">
    <Dataviz2 />
  </div>


  <p className="text-black text-5xl font-bold mt-32 mb-6 p-8">
    Temperatura media global y proyecciones
    </p>

<div className="flex items-start justify-center items-center mt-12">
<div className="w-full md:w-1/2 p-8 ">
  <Parallax translateY={[100, -100]} speed={2}>
    <p className="text-black text-2xl inline-block max-w-prose">
    La temperatura media global ha aumentado rápidamente en los últimos años. Este fenómeno es conocido como calentamiento global. El incremento de las temperaturas, aunque pequeño, afecta drásticamente al clima. Para finales de siglo (2090-2099), se prevé un aumento de entre 1,8 y 4 ºC respecto a 1980-1999, lo que provocará una mayor expansión térmica del agua y el derretimiento de glaciares, elevando significativamente el nivel del mar.
    </p>
    </Parallax>
  </div>

  <div className="w-full md:w-1/2 flex justify-center">
    <img src="Ilustraciones_svg-03.svg" alt="Termometro" className="w-3/4 h-auto" />
  </div>
</div>

<div className="text-black text-4xl font-bold p-8 mt-16 rounded-full">
    <p>Nueva York 2024 - 2100</p>
  </div>

<div className="flex justify-center items-center w-full mt-6">
  <Dataviz4 />
</div>

<div className="text-black text-4xl font-bold p-8 rounded-full">
    <p>Miami 2024 - 2100</p>
</div>

<div className="flex justify-center items-center w-full mt-6 mb-12">
  <Dataviz5 />
</div>

<div className="text-black text-5xl font-bold mt-32 mb-6 p-8">
    <p>Crecimiento de los océanos: Perspectiva <br />
      para dentro de 50 años</p>
</div>


<ImageReplacer />


  
<div className="text-black text-1xl mt-16 text-center">
  <p>El mapa muestra las 10 ciudades costeras del mundo más amenazadas por el aumento del nivel del mar.</p>
</div>


<div className="w-full mt-32">
        <p className="text-black text-5xl font-bold mt-32 p-8">
        Obras y estrategias para proteger las costas de inundaciones
        </p>
      </div>

<div className="text-black text-2xl inline-block mt-8 p-8">
  <p>Para proteger sus costas, muchas ciudades han desarrollado soluciones innovadoras que combinan ingeniería avanzada y sostenibilidad. Estas obras demuestran cómo la planificación puede mitigar el impacto del cambio climático y evitar que las costas de estas ciudades se inunden. Las siguientes imagenes demuestran infraestructuras que ya fueron implementadas:</p>
</div>

<div className="flex items-center flex justify-center mt-16">
    <img src="manito2.svg" alt="Mano swipe" className="w-12 h-auto" />
  </div>

<section className="relative h-screen overflow-x-scroll snap-x snap-mandatory mt-12">
  <div className="flex w-[300vw] h-[75%]">

    <div className="snap-center w-screen h-full flex-shrink-0">
      <img src="solucion1.jpg" alt="Imagen 1" className="w-full h-full object-cover" />
      <div className= "text-black text-3xl rounded-full p-8">
      Venecia, El MOSE <br />
      <Link href="https://rpp.pe/mundo/actualidad/italia-venecia-el-mose-la-eterna-obra-que-deberia-proteger-a-la-ciudad-de-la-emergencia-climatica-noticia-1229643" target="_blank" rel="noopener noreferrer">
      <p className="text-blue-600 underline text-2xl">
      Leer más sobre el proyecto MOSE
      </p>
      </Link>
      </div>
    </div>

    <div className="snap-center w-screen h-full flex-shrink-0">
      <img src="solucion2.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
      <div className= "text-black text-3xl rounded-full p-8">
      Roterdam, Barrera Holandesa <br />
      <Link href="https://es.euronews.com/green/2019/10/14/roterdam-la-barrera-holandesa-contra-el-aumento-del-nivel-del-mar" target="_blank" rel="noopener noreferrer">
      <p className="text-blue-600 underline text-2xl">
      Leer más sobre la barrera holandesa contra el aumento del nivel del mar
      </p>
      </Link>
      </div>
    </div>

    <div className="snap-center w-screen h-full flex-shrink-0">
      <img src="solucion3.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
      <div className= "text-black text-3xl rounded-full p-8">
      Singapur, Ciudades Esponja <br />
      <Link href="https://www.metalocus.es/es/noticias/kongjian-yu-autor-del-concepto-ciudades-esponja-gana-el-premio-global-oberlander" target="_blank" rel="noopener noreferrer">
      <p className="text-blue-600 underline text-2xl">
      Leer más sobre las ciudades esponja en Singapur
      </p>
      </Link>
      </div>
    </div>

  </div>
</section>

</div>

<div className="flex justify-center w-screen ">
  <img src="Footer.png" alt="Mapa mundial" className="w-screen h-auto" />
</div>

</main>
  );
}
