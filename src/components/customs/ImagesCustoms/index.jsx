import React from 'react'
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css';


const LazyImage = ({ objectFit, widthStle, ...props }) => {
    return (
        <LazyLoadImage effect="opacity" height="100%" width="100%" {...props} style={{width: widthStle, objectFit }} />
    )
}

export default LazyImage

LazyImage.defaultProps = {
    objectFit: "contain"
}