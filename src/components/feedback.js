import React from 'react';

export default function Feedback(props) {
  var fontStyle = {"font-size": "1.3em"}
  return (
    <ul >
      <a href="https://goo.gl/forms/zcKQQaNuS3qL98yu2" target="_blank" rel="noopener noreferrer">
        <button className="feedback-button">
          <span>
              <p style={fontStyle}>Click to leave Feedback <span role="img" aria-labelledby="megaphone"> 📣 </span></p>
          </span>
        </button>
      </a>
    </ul>
   );
}
