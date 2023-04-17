import React, { useState, useEffect } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import {
  App,
  Views,
  View,
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {

  // Framework7 Parameters
  const f7params = {
    name: 'test-framework7', // App name
      theme: 'auto', // Automatic theme detection
    // App store
      store: store,
      // App routes
      routes: routes,
  };
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <App { ...f7params }>
          <Views tabs className="safe-areas">
            <View id="view-home" main tab tabActive url="/" />
          </Views>
      </App>
    </QueryClientProvider>
  )
}
export default MyApp;
