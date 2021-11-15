import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';

import WelcomeRoutes from './routes/WelcomeRoutes';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar animated={true} backgroundColor="#3498db" />
      <WelcomeRoutes />
    </NativeBaseProvider>
  );
};

export default App;
