import { useState } from 'react';
// import logo from '@assets/img/logo.svg'
import '@assets/styles/App.css';
import Hero from '~/components/Hero';
import Header from '~/components/Header';

import DesktopContainer from '~/components/containers/DesktopContainer';
import MobileContainer from '~/components/containers/MobileContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DesktopContainer>
        <Header />
      </DesktopContainer>

      <MobileContainer>
        <Hero />
      </MobileContainer>

      {/* <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */}
    </div>
  );
}

export default App;
