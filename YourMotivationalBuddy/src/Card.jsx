import { CCard,CRow,CCol,CCardImage,CCardTitle,CCardText,CCardBody } from "@coreui/react";


function ArticleCard({ title, caption, pic, date }) {

    return(
        <>
        <div className="card">
                    <CCard className="mb-3" style={{ maxWidth: '540px' }}>
            <CRow className="g-0">
                <CCol md={4}>
                <CCardImage src={pic} />
                </CCol>
                <CCol md={8}>
                <CCardBody>
                    <CCardTitle>{title}</CCardTitle>
                    <CCardText>
                    {caption}
                    </CCardText>
                    <CCardText>
                    <small className="text-body-secondary">{date}</small>
                    </CCardText>
                </CCardBody>
                </CCol>
            </CRow>
            </CCard>
        </div>
        </>
    )


}

export default ArticleCard