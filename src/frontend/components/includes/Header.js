import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <header>
            <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                
                    <div class="navbar-header">
                        <Link className="navbar-brand" to="#">Ecommerce Site</Link>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link"  to="/home">Home</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link> 
                        </li>
                    </ul>
                
            </nav>
        </header>            
        );
    }
}

export default Header;



