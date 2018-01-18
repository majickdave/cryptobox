import React from 'react';
import Feedback from './feedback'

const style = {"background": "transparent",
          "paddingBottom": "15px"
          }
export default function Footer() {
  return (
    <footer className="fixed-footer" style={style}><Feedback /></footer>
  )
}
