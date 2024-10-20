import { CCard,CRow,CCol,CCardImage,CCardText,CCardBody } from "@coreui/react";

function ArticleCard({ title, caption, pic, date }) {

    return(
        <>{caption && (
        <div className="card">
            <CCard className="mb-3" style={{ Width: '100%' }}>
                <CRow className="g-0">
                    {pic && (<CCol xs={4}>
                        <CCardImage src={pic} alt={title} /></CCol>)}
            <CCol xs={pic ? 8 : 12}>
          <CCardBody>
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
        </div>)}
        </>
    )

}


export default ArticleCard