import React from 'react';
import { withRouter } from 'react-router-dom';
import routes from "../../config/routes";
import Header from '../header/index';
import Footer from '../footer/index';

const Layout = props => {
    const { location } = props;
    let hideHeader = ['/login', '/register', '/forgotpassword', '/confirm'].indexOf(location.pathname) > -1;
    
    return (
        <div>
            {
                hideHeader ? null : <Header />
            }
            {routes}
            {
                hideHeader ? null : <Footer />
            }
        </div>
    );
}

export default withRouter(Layout);