import React, { useEffect } from 'react';

export const IFrame = ({ name = "UploadControl", title = "Upload Control", src = "https://localhost:7242/upload", height = "400px", width = "100%" }) => {
  const styles = `...`; // your styles remain unchanged

  const elementStyles = { height: height, borderWidth: "0px", width: width };

   // Empty dependency array means this effect runs once on mount

  return (
    <>
      <style>{styles}</style>
      <iframe
        className="frame"
        style={elementStyles}
        name={name}
        title={title}
        src={src}
        border="0"
      ></iframe>
    </>
  );
};
