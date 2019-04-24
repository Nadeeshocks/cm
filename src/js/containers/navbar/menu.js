import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu = props => {
  const className = props.open ? "uncollapse" : "collapse";
  return (
    <div className={`${className} theme-menu `}>
      <div className="wrraper theme-menu-content">
        <div>
          <Container>
            <Row>
              <Col sm={{ size: 4, offset: 2 }}>
                <ul>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Stories">Stories</Link>
                  </li>
                  <li>
                    <Link to="/Partners">Partners</Link>
                  </li>
                  <li>
                    <Link to="/FAQ">FAQ</Link>
                  </li>
                </ul>
              </Col>
              <Col sm="4">
                <p>
                  <span className="theme-text-small">Address</span><br />
                  Spring Store London Oxford
              </p>
                <p>
                  <span className="theme-text-small">Phone</span><br />
                  +1 3456 7890 <br />
                  +1 3427 7670
              </p>
                <p>
                  <span className="theme-text-small">Email</span><br />
                  support@creativemarket.com
                  info@creativemarket.com
              </p>
                <p>
                  <span className="fab fa-facebook-f"></span>
                  <span className="fab fa-vimeo-v"></span>
                  <span className="fab fa-instagram"></span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="theme-menu-bg"></div>
      <i className="fa fa-arrow-right"></i>
    </div>

  )

}

export default Menu;