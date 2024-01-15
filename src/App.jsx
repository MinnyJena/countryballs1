// src/App.jsx
import React from 'react';
function App() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontFamily: '"Comic Sans MS", fantasy',
          color: 'gold'
        }}
      >
        {'From: @airplane aka the countryball lover'}
      </h1>
      <h2
        style={{
          fontFamily: 'Comic Sans MS',
          color: '#be2596',
          fontSize: '2rem'
        }}
      >
        {'-updated on 2024.01.14 & credits to @Zero'}
      </h2>
      <h3
        style={{
          fontFamily: '"Comic Sans MS", fantasy',
          color: 'magenta',
          fontSize: '3rem'
        }}
      >
        {'These are some random questions that i generated'}
      </h3>
      <h4
        style={{
          fontFamily: '"Comic Sans MS", fantasy',
          color: 'blue',
          fontSize: '2rem'
        }}
      >
        {'Please answer them 💖'}
      </h4>
      <h5 style={{ fontFamily: 'cursive', color: '#964B00', fontSize: '6rem' }}>
        {`─=≡Σʕっ•ᴥ•ʔっ`}
      </h5>

      <button
        style={{
          fontFamily: 'Cursive',
          padding: '1rem',
          fontSize: '3rem',
          background: 'orange',
          color: 'white'
        }}
        onClick={() => {
          let answer = prompt('What do you love?');
          if (answer) {
            alert('Oh, you love ' + answer + '! I love countryballs :D');
          } else {
            alert('well if @aprile is answering this she would say either txt or 최수빈 LOL btw the kpop group i love is IVE 💗');
          }
        }}
      >
        {'What do you uhh.. "live for"?'}
      </button>
      <button
        style={{
          fontFamily: 'Comic Sans MS',
          padding: '1rem',
          fontSize: '2rem',
          background: '#eab676',
          color: '#873e23',
          marginTop: '2rem'
        }}
        onClick={() => {
          let answer = prompt("How do you think of their relationship?");
          if (answer) {
            alert('You think that it is ' + answer + '! For me i still havent figured out :c');
          } else {
            alert('i have no idea either xD');
          }
        }}
      >
        {"I am thinking of S. Korea and Japan's relations in countryballs"}
      </button>
      <button
        style={{
          fontFamily: 'Comic Sans MS',
          padding: '1rem',
          fontSize: '2rem',
          background: 'pink',
          color: 'magenta',
          marginTop: '2rem'
        }}
        onClick={() => {
          let answer = prompt('Just write anything here pls');
          if (answer) {
            alert('You said "' + answer + '" & I say "COUNTRYBALLSSSS"');
          } else {
            alert('qwertyuiopasdfghjklzxcvbnm idk what to write here');
          }
        }}
      >
        {'I am out of ideas 😭'}
      </button>
      <button
        style={{
          fontFamily: 'Monaco',
          padding: '1rem',
          fontSize: '2.3rem',
          background: '#FF5252',
          color: 'navy',
          marginTop: '2rem'
        }}
        onClick={() => {
          alert('LIECHTENSTEIN(@Miff), @elsa23 & @cayxs, @Poke, @irise, @artemisbeen, @KiwiRabbit   Thank you for being my friends❣ ');
        }}
      >
        {'friends'}
      </button>
    </div>
  );
}
export default App;