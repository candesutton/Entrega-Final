'use client'
import { useEffect } from "react";

export default function Dataviz1() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script); // Limpieza cuando el componente se desmonta
    };
  }, []);

  return (
    <div className="flourish-embed flourish-chart" data-src="visualisation/19370489">
      {/* Fallback en caso de que JS esté deshabilitado */}
      <noscript>
        <img
          src="https://public.flourish.studio/visualisation/19370489/thumbnail"
          width="100%"
          alt="chart visualization"
        />
      </noscript>
    </div>
  );
}
