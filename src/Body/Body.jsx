import Carousel from './Carousel/carousel';
import Blog from './Cards/Blog';

import { CContainer,CCol,CRow } from '@coreui/react';

function TheBody() {

  return (
    <>
    <CContainer>
        <CRow>
        <CCol xs={1}></CCol>
        <CCol xs={10}>
            <div>
                <Carousel></Carousel>
                </div>
            <div>
                <Blog></Blog>
                </div>
        </CCol>
        <CCol xs={1}></CCol>
        </CRow>
    </CContainer>
    </>
  )
}

export default TheBody