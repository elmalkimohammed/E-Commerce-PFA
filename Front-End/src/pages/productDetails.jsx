import { useParams } from "react-router";
import axios from 'axios' ;
import { useEffect, useState } from "react";

import CurrentImage from '../components/Product Details/currentImage' ;
import DescquantSection from '../components/Product Details/descquantSection' ;
import ImageGallery from '../components/Product Details/imagesGallery' ;
import MaindescrSection from '../components/Product Details/maindescrSection' ;
import ProductSpecifics from '../components/Product Details/productSpecifics' ;

import { prodDetailsAPI } from '../services/prodDetailsAPI'

import "./styles/productdetails.css"

function ProductDetails() {

    const { id } = useParams() ; // Gattering the requested id from the URL
    const [ product , setProduct ] = useState(null) ; // We need to return a variable containing the result of the async function
    const [ loading , setLoading ] = useState(true) ; // Handling Loading
    const [ currentImageIndex , setcurrentImageIndex ] = useState(0) ; // Handling the main shown image through index
    
    // Main Funtions 
    useEffect( () => {
        const getProdDetails = async() => {
            const productObj = await axios.get(`${prodDetailsAPI}/${id}`).then( (response) => response.data ) ;
            setProduct(productObj) ;
            setLoading(false) ;
        }
        getProdDetails() ;
    } , [id] ) ;

    function indexChange(newIndex) {
        setcurrentImageIndex(newIndex) ;
    } ;

    // Loading Screen
    if (loading) { return( <div>Loading......</div> ) }

    console.log(currentImageIndex) ;

    return(
        <>
            <div className="mainSection">
                <div className="imgsSection">
                    <CurrentImage selectedImage={product.images[currentImageIndex]} divName="currImg"/>
                    <ImageGallery firstImg={product.images[0]} secImg={product.images[1]} thirdImg={product.images[2]} fourthImg={product.images[3]} clickEvent={indexChange} divName={"gallery"}/>
                </div>
                <div className="infosSection">
                    <MaindescrSection divName={"top"} secdivName={"insideInfos"} productName={product.name} productPrice={product.price} productStock={product.stock} />
                    <hr/>
                    <ProductSpecifics uniqueAttributs={product.attributes} divName={"middle"} />
                    <hr/>
                    <DescquantSection divName={"bottom"} productDescription={product.description} />
                </div>
            </div>
        </>
    )
}

export default ProductDetails ;

