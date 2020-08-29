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
                src={'../pages/images/family.jpg'} />

              < Carousel.Caption >
                < h3 > First Demo </h3 >
              </Carousel.Caption >
            </Carousel.Item >

            < Carousel.Item style={{ 'height': "600px" }}>

              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../pages/images/landscape.jpg'} />

              < Carousel.Caption >

                < h3 > Second Demo</h3 >
              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../pages/images/sunset.jpg'} />

              < Carousel.Caption >

                < h3 > Third Demo</h3 >

              </Carousel.Caption >
            </Carousel.Item >
          </Carousel >
        </div >
      </div >
    )
  }

}

export default BootstrapCarousel  