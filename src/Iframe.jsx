import React, { useEffect, useRef } from 'react';
export const IFrame = ({
  name = "UploadControl",
  title = "Upload Control",
  src = "https://desktop.tunnel.jasontoubia.net/",
  height = "400px",
  width = "100%",
  current = "",
  overlap = "",
  value = ""
}) => {
  const styles = "";
  const elementStyles = { height: height, borderWidth: "0px", width: width };
  const fullSrc = `${src}?current=${encodeURIComponent(current)}&overlap=${encodeURIComponent(overlap)}`;
  const divRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {

      //if (event.origin === "https://basysapphost") {
      // Handle the message, update form values or perform actions
      //}
      let isMounted = true;
      if (isMounted) {
        const args = {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: event.data, //+ the actual posted value
        };
        const nintextEvent = new CustomEvent('ntx-value-change', args);
        //document.dispatchEvent(nintextEvent); //+ No longer works (?)
        divRef.current.dispatchEvent(nintextEvent);
      }
      return () => {
        // 👇️ when the component unmounts, set isMounted to false
        isMounted = false;
      };
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div >
      <style>{styles}</style>
      <iframe ref={divRef}
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
