
function AttributeItem( { label , value } ) {
    return(
        <div>
            <span className="attKey">{label}</span>
            <span className="attValue">{value}</span>
        </div>
    )
}

export default AttributeItem ;
