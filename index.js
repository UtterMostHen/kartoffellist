import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

const Kartoffellist = () => {
  return (
		<Provider store={store}>
			<PersistGate persistor={persistor} >
				<App />
			</PersistGate>
		</Provider>
	)
}

AppRegistry.registerComponent(appName, () => Kartoffellist)
