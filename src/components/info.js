import React, { Component } from 'react';

import './App.css'

class Info extends Component {
  render() {
    const heightStyle = {"height": "15vh", "width": "auto", "marginBottom": "50px"}

    return (
      <div  >

          <section className="gradient-blue text-light" style={{"height": "50%", "paddingTop": "10vh", "paddingBottom": "10vh"}}>
              <div style={{"paddingTop": "15px", "paddingBottom": "15px"}}>
                <header role="banner" style={{ "margin": "auto", "width": "70%", "padding": "10px", "textAlign": "left"}}>

                  <h1>CryptoBox</h1>

                  <p style={{"filter": "opacity(80%)", "fontSize": "1.1em", "textAlign": "center"}}>Cryptocurrency in the cloud.</p>
                </header>
              </div>


        </section>

        <section className="text-dark" >
          <div className="card" style={{"background": "#eee"}}>
          <header>
              <h2>Currency Calculator</h2>
            </header>
          <div className="container">
            <img style={heightStyle} src="https://res.cloudinary.com/mscmnd-com/image/upload/v1521660402/calculator_qeljge.svg" alt="cryptobox calulator"></img>
          </div>
          <div style={{"paddingBottom": "10px"}}>
            <p>CryptoBox helps you manage your cryptocurrency. Having a calculator, and seeing live prices helps you invest smarter.</p>
          </div>
          </div>
        </section>
        <section className="text-light" >
            <div className="card gradient-blue" >
              <header>
                  <h1>Purchase & Exchange Tokens</h1>
              </header>
              <div className="container">
              <img style={heightStyle} src="https://res.cloudinary.com/mscmnd-com/image/upload/v1521660428/transaction_jix5aa.svg" alt="cryptobox transaction"></img>
              <div  style={{"paddingBottom": "10px"}}>
                <p>CryptoBox provides a tool to quickly simulate exchanges and trades. After trades are finalized, the transaction is queued, and your account is credited.</p>
              </div>
            </div>
            </div>

        </section>
        <section >
          <div className="card" style={{"background": "#eee"}}>
          <header>
              <h2>Manage Your Portfolio</h2>
          </header>
          <div className="container">
          <img style={heightStyle} src="https://res.cloudinary.com/mscmnd-com/image/upload/v1521660624/analysis_tg5xhx.svg" alt="cryptobox dashboard"></img>
          <div style={{"paddingBottom": "10px"}}>
            <p>Interactive charts and personalized statistics help you stay on track with your goals.</p>
          </div>
        </div>
      </div>
        </section>
      </div>

    )
  }
}

export default Info;
