import React from 'react';
import { StringDecoder } from 'string_decoder';
import { withRouter, Link } from 'react-router-dom';

class ScrollImage extends React.Component {
    constructor(props) {
        super(props);

        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
    }

    scrollRight(e) {
        e.preventDefault();

        const scrollRightButton = document.getElementById('scroll-right');
        const scrollLeftButton = document.getElementById('scroll-left');

        scrollRightButton.classList.toggle('hide');
        scrollLeftButton.classList.toggle('hide');

        const scrollImages = document.querySelector('.scroll-function');

        scrollImages.style.transition = 'transform 1s ease-in-out';
        scrollImages.style.transform = 'translateX(-67%)';
        // scrollImages.style.transform = 'translateX(-75%)';
    }

    scrollLeft(e) {
        e.preventDefault();

        const scrollRightButton = document.getElementById('scroll-right');
        const scrollLeftButton = document.getElementById('scroll-left');

        scrollRightButton.classList.toggle('hide');
        scrollLeftButton.classList.toggle('hide');

        const scrollImages = document.querySelector('.scroll-function');

        scrollImages.style.transition = 'transform 1s ease-in-out';
        scrollImages.style.transform = 'translateX(0px)';
    }

    render() {

        // const foodImageItems = this.props.foodPhotoUrls.map(foodPhoto => (
        //     <img key={foodPhoto} src={foodPhoto} alt="" />)
        // );

        return (
            <div className="scroll-container">
                <div className="scroll-images">
                    <div className="scroll-function">
                        {this.props.foodPhotoUrls.map((foodPhoto) => (
                            <img key={foodPhoto} src={foodPhoto} alt=""/>
                        ))}
                        
                        {/* {foodImageItems} */}
                        
                        {/* <img src={this.props.foodPhotoUrls} alt=""/> */}
                    </div>
                </div>

                <button className="hide" onClick={this.scrollLeft} id="scroll-left">&#10094;</button>
                <button onClick={this.scrollRight} id="scroll-right">&#10095;</button>
            </div>
        )
    }
}

export default ScrollImage;
// export default withRouter(ScrollImage);