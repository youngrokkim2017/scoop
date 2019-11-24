import React from 'react';
import { StringDecoder } from 'string_decoder';

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
        scrollImages.style.transform = 'translateX(-100%)';
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
        return (
            <div className="scroll-container">
                <div className="scroll-images">
                    <div className="scroll-function">
                        {this.props.foodPhotoUrls.map((foodPhotoUrl) => (
                            <img key={foodPhotoUrl} src={foodPhotoUrl} alt=""/>
                        ))}
                    </div>
                </div>

                <button className="hide" onClick={this.scrollLeft} id="scroll-left"></button>
                <button onClick={this.scrollRight} id="scroll-right"></button>
            </div>
        )
    }
}

export default ScrollImage;