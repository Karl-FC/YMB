import { CContainer, CFooter,CLink,CRow,CCol } from "@coreui/react";
import { CForm,CFormInput,CButton } from "@coreui/react";

function Footer(){
    return(
        <>
        <CFooter>
            <CContainer>
                <CRow>
            <CCol>
                    <figure>
                        <img src="./src/assets/favicon-32x32.png" width="100" />
                    </figure>
                    <h4>Your Motivational Buddy</h4>
                <div>
                    <span> since 2020</span>
                </div>
                <br></br>
                <div>
                    <span>Powered by</span>
                    <CLink href="https://coreui.io"> CoreUI</CLink>
                </div>
            </CCol>
            <CCol>
                <h2>Stay Motivated!</h2>
            <CForm className="d-flex ms-auto">
                  <CFormInput type="search" className="me-2" placeholder="Enter Email Address" />
                  <CButton color="success" variant="outline">
                    Subscribe
                  </CButton>
                </CForm>
            </CCol>        
  <CCol>
    <h4>Socials</h4> 
    <p href="https://www.facebook.com/YourMotivationalBuddy/">Facebook</p>
    <p href="https://www.instagram.com/yourmotivationalbuddy/">Instagram</p>
    <p href="https://x.com/YMotivBuddy">Twitter/X</p>
    <p href="https://www.tiktok.com/@your_motivational_buddy">Tiktok</p>
    
  </CCol>
   </CRow>
    </CContainer>
        </CFooter>


        </>
    );
}

export default Footer