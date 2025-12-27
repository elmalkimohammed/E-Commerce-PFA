
function productSpecifics( { uniqueAttributs , divName } ) {
    return(
        <>
            <div className={divName}>
                <h1>Product Specifications</h1>
                { Object.entries(uniqueAttributs).map( ( [ key , value ] ) => 
                    (
                            <attributeItem 
                                label = {key}
                                key = {key}
                                value = {value}
                            />
                    ) )
                } 
            </div>
        </>
    )
}

export default productSpecifics ;
