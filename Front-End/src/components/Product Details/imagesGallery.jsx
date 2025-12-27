
function imagesGallery( firstImg , secImg , thirdImg , fourthImg , divName ) {
    return(
        <>
            <div className={divName}>
                <img src={firstImg} alt="First Displayed Imaged" />
                <img src={secImg} alt="Second Displayed Imaged" />
                <img src={thirdImg} alt="Third Displayed Imaged" />
                <img src={fourthImg} alt="Fourth Displayed Imaged" />
            </div>
        </>
    )
}

export default imagesGallery ;
