import React from 'react';

export default function Feedback(props) {
  var fontStyle = {"fontSize": "1.3em"};
  return (

      <a href="https://goo.gl/forms/zcKQQaNuS3qL98yu2" target="_blank" rel="noopener noreferrer">
        <button  className="btn btn-outline-light" data-toggle="tooltip" data-placement="top" title="Leave Feedback!">
          <small><span style={fontStyle} className="shake-opacity" role="img" aria-labelledby="megaphone"> 📣 </span>feedback</small>
        </button>
      </a>
   );
}
