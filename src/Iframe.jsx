import React, { useEffect } from 'react';

export const IFrame = ({ name = "UploadControl", title = "Upload Control", src = "https://localhost:7242/upload", height = "400px", width = "100%" }) => {
  const styles = `...`; // your styles remain unchanged

  const elementStyles = { height: height, borderWidth: "0px", width: width };

  useEffect(() => {
    const handleMessage = (event) => {
      //if (event.origin !== "https://localhost:7242") {
        // Make sure the message is from the expected origin
        //return;
      //}

      // Handle the message sent from the iframe
      console.log('Message received from iframe:', event.data);
      const args = {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: event.data
      };
      const customEvent = new CustomEvent('ntx-value-change', args);
      element.dispatchEvent(customEvent);
    };

    window.addEventListener('message', handleMessage);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []); // Empty dependency array means this effect runs once on mount

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
