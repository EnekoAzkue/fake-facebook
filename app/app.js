import { ScrollView, StatusBar } from 'react-native'
import 'react-native-gesture-handler'

import Header from './components/header'

const App = () => {
  return (
    <>
    <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
    />
    <ScrollView>
        <Header />
    </ScrollView>
    </>
  )
}

export default App