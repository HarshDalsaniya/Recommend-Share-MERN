import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Navbar, Dropdown } from 'react-bootstrap';
import Link from 'next/link'
import { logoutUser } from '../../redux/auth/action';


export const NavBar = (props,{logoutUser}) => {
    // console.log(JSON.parse(props.localstorageItem).name)
    const handleLogout = () => {
        console.log("logout.....!!!")
        props.logoutUser();
    };
    return (
        <>
            <div className="navbar-header">
                <Container>
                    <div className="navbar navbar-expand-lg">
                        <div className="container-fluid navbar-items">
                            <div className="nav-logo">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img
                                            src="/logo/logo-on-dark.svg"
                                            alt="Recommend and Share"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="login-uesr">
                                <ul className="navbar-nav me-auto"></ul>
                            </div>
                            <button
                                className="navbar-toggler hamburger-menu"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <div>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-item-bg">
                                    <li className="nav-item">
                                        <Link href="/home-improvements-and-maintenance">
                                            <a className="nav-link">
                                                Home Improvements &amp; Maintenance
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/champions">
                                            <a className="nav-link" >
                                                Champions
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about-us">

                                            <a className="nav-link" tabIndex={ -1 } aria-disabled="true">
                                                About
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/faq">
                                            <a className="nav-link" tabIndex={ -1 } aria-disabled="true">
                                                FAQs
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                { props.localstorageItem == null ?
                                    <div className="login">
                                        <Link href="/login">
                                            <a className="nav-link"> Login </a>
                                        </Link>
                                    </div>
                                    :
                                    <div className="login-uesr" id="login-uesr-block-2">
                                        <ul className="navbar-nav me-auto">


                                            <li className="nav-item dropdown d-block d-lg-flex align-items-center">
                                                <Dropdown className="">
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <img
                                                            src="https://recommendandshare.com/media/cache/avatar_small/uploads/customers/sam-avatar-1626495954.png"
                                                            className="avatar"
                                                        />
                                                        <span className="ms-2">{JSON.parse(props.localstorageItem).name}</span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>My Dashboard</Dropdown.Item>
                                                        <Dropdown.Item>vm</Dropdown.Item>
                                                        <Dropdown.Item>Add a Business</Dropdown.Item>
                                                        <Dropdown.Item><Link href="/profile">Edit My Account</Link></Dropdown.Item>
                                                        <Dropdown.Item>My Password</Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item onClick={ () => handleLogout() }>Logout</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </li>
                                        </ul>
                                    </div>
                                }




                                <div className="login-uesr" id="login-uesr-block-2">
                                    <ul className="navbar-nav me-auto"></ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </div >
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps =(dispatch)=> {
    return{
    logout:()=>dispatch(logoutUser()),
    dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
