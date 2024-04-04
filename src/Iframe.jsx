import React, { useEffect } from 'react';
export const IFrame = ({ 
  name = "UploadControl", 
  title = "Upload Control", 
  src = "https://desktop.tunnel.jasontoubia.net?current=&overlap=", 
  height = "400px", 
  width = "100%",
  current = "",
  overlap = ""
 }) => {
  const styles = `...`; // your styles remain unchanged

  const elementStyles = { height: height, borderWidth: "0px", width: width };

  const fullSrc = `${src}?current=${encodeURIComponent(current)}&overlap=${encodeURIComponent(overlap)}`;

   // Empty dependency array means this effect runs once on mount
   useEffect(() => {
    const handleMessage = (event) => {
      // Check the origin of the message and ensure it's from your iframe
      //if (event.origin === "https://basysapphost") {
        // Handle the message, update form values or perform actions
      //}
      console.log(event);
    };
  
    window.addEventListener("message", handleMessage);
  
    // Cleanup on component unmount
    return () => window.removeEventListener("message", handleMessage);
  }, []); // Empty array ensures this runs once on mount

  return (
    <div>
      <style>{styles}</style>
      <iframe
        className="frame"
        style={elementStyles}
        name={name}
        title={title}
        src={fullSrc}
        border="0"
      ></iframe>
    </div>
  );
};
