
import React, { useRef, useEffect, useState } from 'react';

const ImageReplacer = () => {
  const [isImage2Visible, setIsImage2Visible] = useState(false);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImage2Visible(true); // Mostrar segunda imagen
          } else {
            setIsImage2Visible(false); // Ocultar segunda imagen
          }
        });
      },
      { threshold: 0.5 } // Se activa cuando el 50% del triggerRef es visible
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Imagen inicial */}
      <div
        ref={sectionRef}
        className="relative h-screen"
      >
        <img
          src="mapitafinal.svg"
          alt="Primera imagen"
          className={`w-full h-full object-cover transition-all absolute top-0 ${
            isImage2Visible ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Trigger para cambiar imágenes */}
        <div ref={triggerRef} className="h-1 bg-transparent object-center"></div>
        <img
          src="mapa_final.svg"
          alt="Segunda imagen"
          className={`w-full h-full object-cover transition-all absolute top-0 ${
          isImage2Visible ? 'opacity-100' : 'opacity-0'
        }`}
        />
      </div>


      {/* Imagen secundaria */}
      {/* <div
        className={`relative h-screen flex justify-center items-center transition-all ${
          isImage2Visible ? 'opacity-100' : 'opacity-0'
        }`}
      > */}
        
      {/* </div> */}

      {/* Continuación del texto */}
      {/* <div className="h-screen flex justify-center items-center">
        <p className="text-xl">Este es el contenido adicional que aparece después.</p>
      </div> */}
    </div>
  );
};

export default ImageReplacer;
