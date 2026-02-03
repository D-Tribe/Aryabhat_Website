'use client'; 

import { useEffect } from 'react';
import Script from 'next/script';

export default function ThirdPartyScripts() {
  useEffect(() => {
    // Check if the main initialization function is available after script loads
    if (typeof window.initTestimonials === 'function') { 
      console.log('Testimonials script loaded. Running initial setup...');
      
      // Run all initial setup functions that were in DOMContentLoaded
      if (window.initTestimonials) {
        

        window.initTestimonials();
        
      } else {
        console.error("Required functions for initialization not found on window object.");
      }
      
    } else {
        // Fallback/Retry if the script took longer to load than useEffect fired
        const checkLoad = setInterval(() => {
            if (typeof window.initTestimonials === 'function') {
                clearInterval(checkLoad);
                console.log('Testimonials script loaded on retry. Running initial setup...');
                
                 if (window.initTestimonials) {
                    window.initTestimonials();
                }
            }
        }, 100);
        
        // Cleanup for the retry interval
        return () => clearInterval(checkLoad);
    }
  }, []); 

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="afterInteractive" 
      />
      <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
       
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
        
        <Script
          src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"
          strategy="beforeInteractive"
        />
        
        <Script
          src="https://unpkg.com/split-type"
          strategy="beforeInteractive"
        />

        <Script src="/script.js" strategy="afterInteractive" /> 
    </>
  );
}