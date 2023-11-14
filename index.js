/**
 * @format
 */

import { AppRegistry } from 'react-native';
import * as eva from '@eva-design/eva';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import App from './src/App';
import { name as appName } from './app.json';

const queryClient = new QueryClient();

function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <App />
        </ApplicationProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main);
