import React, { Component } from 'react';
import round from '../js/round';



export default function Select(props) {


    var style = {"border": "1px solid black"}
    var resultStyle = {"color": "#000", "backgroundColor": "#e1dec7", "border": "2px double #88847d"}
    var paddingStyle = {"padding": "20px"};
    var equivalencies = {"color": "white", "backgroundColor": "#aaa"};
    var enter = {"color": "white", "background": "#080333"};

    return (

          <select defaultValue="" onChange={props.handleChange} style={style}>
            <option value="" disabled>Choose your favorite currency</option>
            <option value="btc">Bitcoin</option>
            <option value="eth">Ethereum</option>
            <option value="bch">Bitcoin Cash</option>
            <option value="ltc">Litecoin</option>
            <option value="xrp">Ripple</option>
            <option value="ada">Cardano</option>
            <option value="xem">NEM</option>
            <option value="neo">NEO</option>
            <option value="xlm">Stellar</option>
            <option value="miota">IOTA</option>
            <option value="eos">EOS</option>
            <option value="dash">DASH</option>
            <option value="xmr">Monero</option>
            <option value="trx">TRON</option>
            <option value="btg">Bitcoin Gold</option>
            <option value="etc">Ethereum Classic</option>
            <option value="qtum">Qtum</option>
            <option value="icx">ICON</option>
            <option value="lsk">Lisk</option>
            <option value="xrb">RaiBlocks</option>
            <option value="ardr">Ardor</option>
            <option value="omg">OmiseGO</option>
            <option value="ppt">Populous</option>
            <option value="zec">Zcash</option>
            <option value="usd">USD</option>
          </select>

    );
}
