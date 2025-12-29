
function CurrentImage( { selectedImage , divName } ) {
    return(
        <>
            <div className={divName}>
                <img src={selectedImage} alt="Display The Chosen Image" />
            </div>
        </>
    )
}

export default CurrentImage ;
