import React from 'react'
import { connect } from 'react-redux'
import { Container, Navbar } from 'react-bootstrap';
import Link from 'next/link'


export const NavBar = (props) => {
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
                                <div className="login">
                                    <Link href="/login">
                                        <a className="nav-link"> Login </a>
                                    </Link>
                                </div>

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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
