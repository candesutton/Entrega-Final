"use client";

import { useEffect } from "react";

export default function Dataviz4() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <div className="flourish-embed flourish-photo-slider w-3/4" data-src="visualisation/19435956">
        {/* Fallback en caso de que JS esté deshabilitado */}
        <noscript>
          <img
            src="https://public.flourish.studio/visualisation/19435956/thumbnail"
            width="100%"
            alt="photo-slider visualization"
          />
        </noscript>
      </div>
  );
}



