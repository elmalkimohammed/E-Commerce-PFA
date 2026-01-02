
function ProduitCard({name, imageUrl, price}) {
    // Handle image loading errors
    const handleImageError = (e) => {
        e.target.style.display = 'none';
    };

    return(
        <div className="produit-card">
            <p>{name}</p>
            {imageUrl ? (
                <img src={imageUrl} alt={name} onError={handleImageError} />
            ) : (
                <div style={{ 
                    width: '100%', 
                    height: '220px', 
                    backgroundColor: '#f0f0f0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: '10px',
                    marginBottom: '12px',
                    color: '#999'
                }}>
                    No Image
                </div>
            )}
            <span>{price}</span>
        </div>
    )
}

export default ProduitCard;