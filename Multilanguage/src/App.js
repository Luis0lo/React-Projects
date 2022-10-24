import React from 'react';

import { LanguageProvider } from './containers/Language';

import LanguageSelector from './components/LanguageSelector';
import Explore from './components/Explore';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSelector />
        <Explore />
      </div>
    </LanguageProvider>
  );
}

export default App;
