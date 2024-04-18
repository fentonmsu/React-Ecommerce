import React, { useState, useRef, useEffect } from "react";
import "./lightbox.css";

function Lightbox({ src, alt }) {
  const [enlarged, setEnlarged] = useState(false);
  const imageRef = useRef();
  const toggleEnlarged = () => {
    console.log("toggleEnlarged");
    setEnlarged(!enlarged);
  };
  const handleOutsideClick = (event) => {
    if (enlarged && !imageRef.current.contains(event.target)) {
      setEnlarged(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [enlarged]);
  return (
    <div ref={imageRef} className="image-container">
      <img
        src={src}
        alt={alt}
        className={`image ${enlarged ? "enlarged" : ""}`}
        onClick={toggleEnlarged}
      />
      {enlarged && (
        <div className="enlarged-image">
          <button className="close-button" onClick={toggleEnlarged}>
            Close
          </button>
          <img src={src} alt={alt} />
        </div>
      )}
    </div>
  );
}
export default Lightbox;
