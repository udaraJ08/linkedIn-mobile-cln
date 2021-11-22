import React, { useEffect } from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import WelcomeRoutes from './routes/WelcomeRoutes';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const store = configureStore();

const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '575914493491-vnp97a935o0ct785144kte0deuqtf1dn.apps.googleusercontent.com',
    });
  }, [])

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar animated={true} backgroundColor="#3498db" />
        <WelcomeRoutes />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
