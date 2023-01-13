import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../App';

// import searchHandler from './Home';
// import searchTerm from './Home';

const Navbar = () => {
    // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext);

    // const getSearchTerm = (event) => {
    //     searchHandler(event.target.value);
    // }
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active px-3" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/smartphones" class="nav-link active px-3" aria-current="page" href="#">List</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/smartphones/add" class="nav-link active px-3" aria-current="page" href="#">Add SmartPhone</Link>
                            </li>


                        </ul>
                        {/* <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                        </form> */}
                    </div>
                    <div>
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/logout" class="nav-link active px-3 ml-auto" aria-current="page" href="#">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div>
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/register" class="nav-link active px-3 ml-auto" aria-current="page" href="#">Register</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/login" class="nav-link active px-3 ml-auto" aria-current="page" href="#">Login</Link>
                            </li>
                        </ul>
                    </div>

                </>
            )
        }
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

                <div class="container-fluid">
                    {/* <div className="content">
                        <strong>FlagShip SmartPhone Gallery</strong>
                        <strong>FlagShip SmartPhone Gallery</strong>
                    </div> */}
                    <Link to="/" class="navbar-brand" aria-current="page" href="#">
                        <strong>
                            FLAGSHIP SMARTPHONE GALLERY
                        </strong>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <RenderMenu />

                </div>
            </nav>
        </>
    )
}

export default Navbar