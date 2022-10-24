import React from 'react';

import { LanguageProvider } from './containers/Language';

import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSelector />
      </div>
    </LanguageProvider>
  );
}

export default App;
