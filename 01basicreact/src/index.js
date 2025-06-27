import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function MyApp() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>visit google</a>
// )
const anotherUser = "prince gautam";
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'visit google'
  , anotherUser

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>

  // MyApp() // Render the MyApp component directly
  // anotherElement // Render the anotherElement object directly

  // reactElement // Render the reactElement object directly

);

