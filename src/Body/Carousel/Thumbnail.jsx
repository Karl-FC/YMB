import { CCard,CCardImageOverlay,CCardImage,CCardText } from "@coreui/react";

function Thumbnail({ caption, pic }) {

    return(
        <>
        <CCard className="mb-3 bg-dark text-white">
    <CCardImage src={pic} style={{ maxHeight: '500px', objectFit: 'cover'}} />
    <CCardImageOverlay>
    <CCardText>
      {caption}
    </CCardText>
  </CCardImageOverlay>
</CCard>
        </>
    )
}

export default Thumbnail