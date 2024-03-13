import { Outlet, Link} from 'react-router-dom'
import { Fragment} from 'react'

const Navigation = () => {
    return (
        <Fragment>
            <div>
            <p> I am Navigation page</p>
            <div>
                <Link className='nav-links-container' to="/home">Logo</Link>
            </div>
            <div>
                <Link className='nav-links-container' to="/shop">Shop</Link>
            </div>
            <div>
                <Link className='nav-links-container' to="/sign-in">SignIn</Link>
            </div>
            <Outlet/> 
            </div>
        </Fragment>
    )
  }

export default Navigation
