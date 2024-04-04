import React, { useEffect } from 'react';
export const IFrame = ({ name = "UploadControl", title = "Upload Control", src = "https://desktop.tunnel.jasontoubia.net?current=" + current + "&overlap=" + overlap, height = "400px", width = "100%" }) => {
  const styles = `...`; // your styles remain unchanged

  const elementStyles = { height: height, borderWidth: "0px", width: width };

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
        src={src}
        border="0"
      ></iframe>
    </div>
  );
};
