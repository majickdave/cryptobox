import React from 'react';

export default function Feedback(props) {
  var fontStyle = {"fontSize": "1.3em"}
  return (

      <a href="https://goo.gl/forms/zcKQQaNuS3qL98yu2" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary btn-round">
          <span>
              <p style={fontStyle}>Feedback  <span role="img" aria-labelledby="megaphone"> 📣 </span></p>
          </span>
        </button>
      </a>
   );
}
