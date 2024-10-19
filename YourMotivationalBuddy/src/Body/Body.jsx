import Carousel from './Carousel/carousel';
import Blog from './Cards/Blog';

import { CContainer,CCol } from '@coreui/react';

function TheBody() {

  return (
    <>
    <CContainer>
        <CCol></CCol>
        <CCol>
            <div>
                <Carousel></Carousel>
                </div>
            <div>
                <Blog></Blog>
                </div>
        </CCol>
        <CCol></CCol>
    </CContainer>
    </>
  )
}

export default TheBody