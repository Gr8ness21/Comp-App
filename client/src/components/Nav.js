import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to={'/'}>Home </Link>
                    <Link to={'/cities'}>Cities </Link>
                    <Link to={'/parks'}> Parks </Link>
                </div>
            </div>
        );
    }
}

export default Nav;