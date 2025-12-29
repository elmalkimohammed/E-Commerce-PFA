
import AttributeItem from "./attributeItem";

function ProductSpecifics( { uniqueAttributs , divName } ) {
    return(
        <>
            <div className={divName}>
                <h1>Product Specifications</h1>
                { Object.entries(uniqueAttributs).map( ( [ key , value ] ) => 
                    (
                            <AttributeItem 
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

export default ProductSpecifics ;
