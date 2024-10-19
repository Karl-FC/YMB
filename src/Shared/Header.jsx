import { useState } from 'react';
import { CNavbar,CContainer,CCollapse,CNavbarBrand,CNavbarNav,CNavLink,CNavItem,CDropdown,
    CDropdownToggle,CDropdownMenu,CNavbarToggler,CDropdownDivider,CDropdownItem, CFormInput,CButton,CForm} from '@coreui/react';
import {CIcon} from '@coreui/icons-react';
import { cilMoodGood } from '@coreui/icons';

function Header() {
    const [visible, setVisible] = useState(false)
    return (
        <>
          <CNavbar expand="lg" className="bg-body-tertiary">
            <CContainer fluid>

              <CNavbarBrand href="#"><img src='./src/assets/favicon-32x32.png'/>Your Motivational Buddy</CNavbarBrand>
              <CNavbarToggler onClick={() => setVisible(!visible)} />
    {/*Lahat ng macocollapse pag nagsmall screen*/}
              <CCollapse className="navbar-collapse" visible={visible}>
                <CNavbarNav>
                  <CNavItem>
                    <CNavLink href="#" active>Educate</CNavLink>
                    </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active>Motivate</CNavLink>
                    </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active>Inspire</CNavLink>
                  </CNavItem>
                  
                </CNavbarNav>
                <CForm className="d-none d-lg-flex ms-auto">
                  <CFormInput type="search" className="me-2" placeholder="Search" />
                  <CButton color="success" variant="outline">
                    Search
                  </CButton>
                </CForm>
            <div className="d-lg-none">
                        <CDropdownItem href="#">Login</CDropdownItem>
                        <CDropdownItem href="#">Subscribe to Newsletter</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">About Us</CDropdownItem>
                    </div>
              </CCollapse>
              <div className="d-none d-lg-block ms-2">
              <CDropdown >
                            <CDropdownToggle><CIcon icon={cilMoodGood} size="xxl"/></CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem href="#">Login</CDropdownItem>
                            <CDropdownItem href="#">Subscribe to Newsletter</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="#">About Us</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        </div>
            </CContainer>
          </CNavbar>
        </>
      );

}

export default Header