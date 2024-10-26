import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbarpage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home"  style={{color:'white'}}>Home</Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/Contactpage"  style={{color:'white'}}>Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/Productspage" style={{color:'white'}}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/ServicesPage" style={{color:'white'}}>Services</Link>
                            </li>
                        </ul>
                        <form className="d-flex searchbar" >
                            <input className="form-control me-2"  placeholder="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbarpage