
function MaindescrSection( { divName , secdivName , productName , productPrice , productStock } ) {
    return(
        <div className={divName}>
            <h1>{productName}</h1>
            <div className={secdivName}>
                <h2>${productPrice}</h2>
                <h3>{productStock} Available</h3>
            </div>
        </div>
    )
}

export default MaindescrSection ;
