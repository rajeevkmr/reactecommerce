import React, { Component } from 'react'
import Header from './Header';
//import Footer from './Footer';

 class Layout extends Component {
     
    render() {
        return (
            <div className="container-fluid">
                    <Header />
                    {this.props.children}
            </div>
        )
    }
}

export default Layout;