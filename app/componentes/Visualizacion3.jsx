'use client'

  import { useEffect } from "react";
  
  export default function Dataviz3() {
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
      <div className="flourish-embed w-3/4" data-src="story/2713208">
        {/* Fallback en caso de que JS esté deshabilitado */}
        <noscript>
          <img
            src="https://public.flourish.studio/story/2713208/thumbnail"
            width="100%"
            alt="visualization"
          />
        </noscript>
      </div>
    );
  }
  
  
