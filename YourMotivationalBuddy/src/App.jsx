import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import Header from './Shared/Header';
import TheBody from './Body/Body';
import Footer from './Shared/footer';

function App() {

  return (
    <>
      <Header></Header>
      <div>
          <TheBody></TheBody>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
