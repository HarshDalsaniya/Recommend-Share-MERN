import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, Dropdown,NavLink } from 'react-bootstrap';
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
    const [profile, setProfile] = useState('')
       
    useEffect(() => {
        dispatch(userTradeBussines(localStorage.getItem("Recommend_Share_current_user") == null ? '' : JSON.parse(localStorage.getItem("Recommend_Share_current_user")).id))
        const interval = setInterval(() => {
            setLocalStorageItem(JSON.parse(localStorage.getItem('Recommend_Share_current_user')));
            setProfile(localStorage.getItem("Recommend_Share_current_user") == null ? '' : JSON.parse(localStorage.getItem("Recommend_Share_current_user")).profile_Picture)

        }, 1000);
               
        return () => clearInterval(interval);
    }, [setLocalStorageItem ,setProfile, localStorage])

    const handleLogout = () => {
        dispatch(logoutUser())
    };
     
    // console.log()   

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
                            <img src={require('../../images/logo/logo-on-dark.svg')} height={ 65 } width={ 200 } alt="" />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav">
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Navbar.Toggle>
                        <Navbar.Collapse>
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
                                    <Link href="/about-us" >
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
                                            <Link href="/login">
                                                <a className="nav-link btn-login">Login</a>
                                            </Link>
                                        </li>
                                    </div>
                                    :
                                    <div className="login-uesr">
                                        <ul className="navbar-nav me-auto">

                                            <li className="nav-item dropdown d-block d-lg-flex align-items-center">
                                                <Dropdown >
                                                    <Dropdown.Toggle variant="success">
                                                        <img
                                                            src={`${process.env.IMAGE_PATH}/images/${profile}` } 
                                                            className="avatar"
                                                            style={{
                                                                width: '40px',
                                                                height: '40px',
                                                                objectFit:"cover"
                                                            }}
                                                        />
                                                        <span className="ms-2">{ localstorageItem.name }</span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>My Dashboard</Dropdown.Item> 
                                                        <Dropdown.Divider />                                                       
                                                        {userbussines.length>0 ? userbussines.map((bussines)=>
                                                        <Dropdown.Item key={"buss_"+bussines.name}><Link href={"/secure/"+ bussines.name}>{typeof bussiness!=null?bussines.name:""}</Link></Dropdown.Item>
                                                        ) : ""}                                                                                                           
                                                        <Dropdown.Item ><Link href="/secure/tradespeople/create"><a>Add a Business</a></Link></Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item><Link href="/profile"><a>Edit My Account</a></Link></Dropdown.Item>
                                                        <Dropdown.Item><Link href="/password"><a>My Password</a></Link></Dropdown.Item>                                                        
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
