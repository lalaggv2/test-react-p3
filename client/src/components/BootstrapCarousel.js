import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class BootstrapCarousel extends Component {
  render() {
    return (
      < div >
        < div className='container-fluid' >
          {/* < Carousel > */}
          <Carousel interval={600} keyboard={false} pauseOnHover={true}>
            < Carousel.Item style={{ 'width': "800px" }} >
              < img style={{ 'width': "800px" }}

                className="d-block w-100"
                src={'../assets/img/pair_1920.jpg'} />

              < Carousel.Caption style={{
                'z-index': 1
              }} >
                <h3> Life </h3 >
              </Carousel.Caption >
            </Carousel.Item >

            < Carousel.Item style={{ 'height': "100%" }}>

              < img style={{ 'width': "100%" }}

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