import React, { Component } from 'react';
import { Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div>
                <div><Link to={'/parks'}>PARKS </Link> <Link to={'/cities'}>Cities </Link> <Link to={'/'}>Home </Link>     </div>
            </div>
        );
    }
}

export default Nav;