
function ImagesGallery( { firstImg , secImg , thirdImg , fourthImg , clickEvent , divName } ) {
    return(
        <>
            <div className={divName}>
                <img src={firstImg} alt="First Displayed Imaged" onClick={ () => clickEvent(0) }/>
                <img src={secImg} alt="Second Displayed Imaged" onClick={ () => clickEvent(1) }/>
                <img src={thirdImg} alt="Third Displayed Imaged" onClick={ () => clickEvent(2) }/>
                <img src={fourthImg} alt="Fourth Displayed Imaged" onClick={ () => clickEvent(3) }/>
            </div>
        </>
    )
}

export default ImagesGallery ;
