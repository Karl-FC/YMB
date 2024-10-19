import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import Header from './Shared/Header';
import Carousel from './Shared/Carousel/carousel';
import Footer from './Shared/footer';
import ArticleCard from './card';
import Blog from './Shared/Cards/Blog';

function App() {

  return (
    <>
      <Header></Header>
      <div>
        <Carousel></Carousel>
      </div>
      <div>
        <Blog></Blog>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
