import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { logoutUser } from '../../redux/auth/action';
import { userTradeBussines } from '../../redux/bussiness/action'



export const NavBar = (props) => {
    const { route } = useRouter();
    const businessState = useSelector(state => state);
    const { userbussines } = businessState.businessReducer;
    // console.log(userbussines);
    const dispatch = useDispatch();
    const [localstorageItem, setLocalStorageItem] = useState(null)
   
    console.log(route)
    


    useEffect(() => {
        dispatch(userTradeBussines(localStorage.getItem("Recommend_Share_current_user") == null ? '' : JSON.parse(localStorage.getItem("Recommend_Share_current_user")).id))

        const interval = setInterval(() => {
            setLocalStorageItem(JSON.parse(localStorage.getItem('Recommend_Share_current_user')));
        }, 1000);
        return () => clearInterval(interval);
    }, [setLocalStorageItem])


    const handleLogout = () => {
        dispatch(logoutUser())
    };
    return (
        <>
            <div className="navbar-header">
                <Container>
                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        className="navbar navbar-expand-lg"
                    >
                        <Link className="navbar-brand" href="/">
                            <img src='/logo/logo-on-dark.svg' height={ 65 } width={ 200 } alt="" />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav">
                            <div id="nav-icon3">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-item-bg">
                                <li className="nav-item">
                                    <Link href="/home-improvements-and-maintenance" >
                                        <a className= {route == '/home-improvements-and-maintenance' ? "active" : "navlink"} >
                                                Home Improvements &amp; Maintenance 
                                        </a>
                                       
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/champions" >
                                        <a className= {route == '/champions' ? "active" : "navlink"} >
                                             Champions
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link   href="/about-us" >
                                         <a className= {route == '/about-us' ? "active" : "navlink"} >
                                            About
                                        </a>                                       
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/faq" >
                                        <a className= {route == '/faq' ? "active" : "navlink"} >
                                            FAQs
                                        </a>                                        
                                    </Link>
                                </li>
                            </Nav>
                            <Nav>
                                { localstorageItem == null ?
                                    <div className="login">
                                        <li className="nav-item">
                                            <Link className="nav-link btn-login" href="/login">
                                                Login
                                            </Link>
                                        </li>
                                    </div>
                                    :
                                    <div className="login-uesr">
                                        <ul className="navbar-nav me-auto">

                                            <li className="nav-item dropdown d-block d-lg-flex align-items-center">
                                                <Dropdown className="">
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <img
                                                            src="https://recommendandshare.com/media/cache/avatar_small/uploads/customers/sam-avatar-1626495954.png"
                                                            className="avatar"
                                                        />
                                                        <span className="ms-2">{ localstorageItem.name }</span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>My Dashboard</Dropdown.Item> 
                                                        <Dropdown.Divider />                                                       
                                                        {userbussines != (null || 'undefined') ? userbussines.map((bussines)=>
                                                        <Dropdown.Item><Link href="">{bussines.name}</Link></Dropdown.Item>
                                                        ) : ""}                                                                                                           
                                                        <Dropdown.Item ><Link href="/secure/tradespeople/create">Add a Business</Link></Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item><Link href="/profile">Edit My Account</Link></Dropdown.Item>
                                                        <Dropdown.Item><Link href="/password">My Password</Link></Dropdown.Item>                                                        
                                                        <Dropdown.Item onClick={ () => handleLogout() }>Logout</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </li>
                                        </ul>
                                    </div>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>






        </>
    )
}


export default connect(null, null)(NavBar)
