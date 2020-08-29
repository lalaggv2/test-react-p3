import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import Axios from "axios";
import family from "./images/family.jpg"
import Carousel from "../components/BootstrapCarousel"


function Home(props) {

  const { isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  // this function is duplicated in the Members page component
  // consider refactor 
  const getSecret = async () => {
    const secretResponse = await Axios.get("/api/secrets");
    console.log(secretResponse.data);
    setSecret(secretResponse.data);
  };

  return (
    <Container className="signup">
      <Row>
        <Col className="intro" md={{ span: 8, offset: 2 }}>
          <h1 className="pageHeader" style={{ color: 'white' }}>Welcome to East Coast Life Insurance</h1>
          {/* <img src={family} alt="This a family" />
          <br></br> */}
          <Carousel />
          {isAuth ? (
            <>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  setSecret('');
                  logout();
                }}
              >
                Logout
              </Button>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/members");
                }}
              >
                Members
              </Button>
            </>
          ) : (
              <>
                <Button
                  className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    props.history.push("/login");
                  }}
                >
                  Login
              </Button>
                <Button
                  className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    props.history.push("/signup");
                  }}
                >
                  Signup
              </Button>
              </>
            )}

        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{secret}</h1>
        </Col>
      </Row>

      <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'><h3>Copyright &copy; 2020 - East Coast Insurance</h3>
          <h5>Made with love by Angela, Diana, Lynn, Scott and Shannon</h5></div>
      </footer>
    </Container >
  );
}

export default Home;




// import React, { useContext, useState } from "react";
// import { AuthContext } from "../AuthContext";
// import "../App.css";
// import { Container, Row, Button, Col } from "react-bootstrap";
// import Axios from "axios";

// function Home(props) {

//   const { isAuth, logout } = useContext(AuthContext);

//   const [secret, setSecret] = useState("");

//   // this function is duplicated in the Members page component
//   // consider refactor 
//   const getSecret = async () => {
//     const secretResponse = await Axios.get("/api/secrets");
//     console.log(secretResponse.data);
//     setSecret(secretResponse.data);
//   };

//   return (
//     <Container className="signup">
//       <Row>
//         <Col md={{ span: 8, offset: 2 }}>
//           <h1>Home Page</h1>
//           {isAuth ? (
//             <>
//               <Button
//                 className="m-1"
//                 onClick={e => {
//                   e.preventDefault();
//                   setSecret('');
//                   logout();
//                 }}
//               >
//                 Logout
//               </Button>
//               <Button
//                 className="m-1"
//                 onClick={e => {
//                   e.preventDefault();
//                   props.history.push("/members");
//                 }}
//               >
//                 Members
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 className="m-1"
//                 onClick={e => {
//                   e.preventDefault();
//                   props.history.push("/login");
//                 }}
//               >
//                 Login
//               </Button>
//               <Button
//                 className="m-1"
//                 onClick={e => {
//                   e.preventDefault();
//                   props.history.push("/signup");
//                 }}
//               >
//                 Signup
//               </Button>
//             </>
//           )}
//           <Button
//             className="m-1"
//             onClick={e => {
//               e.preventDefault();
//               getSecret();
//             }}
//           >
//             Show Secrets
//           </Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={{ span: 8, offset: 2 }}>
//           <h1>{secret}</h1>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;
