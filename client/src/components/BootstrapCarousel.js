import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class BootstrapCarousel extends Component {
  render() {
    return (
      < div >
        < div className='container-fluid' >
          < Carousel >
            < Carousel.Item style={{ 'height': "600px" }} >
              < img style={{ 'height': "600px" }}

                className="d-block w-100"
                src={'../assets/img/family.jpg'} />

              < Carousel.Caption >
                < h3 > Life </h3 >
              </Carousel.Caption >
            </Carousel.Item >

            < Carousel.Item style={{ 'height': "600px" }}>

              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../assets/img/fiat.jpg'} />

              < Carousel.Caption >

                < h3 > Auto</h3 >
              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../assets/img/home.jpg'} />

              < Carousel.Caption >

                < h3 > Home</h3 >

              </Carousel.Caption >
            </Carousel.Item >
          </Carousel >
        </div >
      </div >
    )
  }

}

export default BootstrapCarousel  