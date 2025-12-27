
function maindescrSection( { divName , productName , productPrice , productStock } ) {
    return(
        <div className={divName}>
            <h1>{productName}</h1>
            <h2>{productPrice}</h2>
            <h3>{productStock} Available</h3>
        </div>
    )
}

export default maindescrSection ;
