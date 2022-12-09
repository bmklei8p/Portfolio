

function Nav() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </nav>
            {/* <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand">
                    <img src="" width="30" height="30" className="d-inline-block align-top" alt="" />
                    BRYAN KLEINBERG
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <NavLink className="nav-item nav-link font-weight-bold" to="">HOME</NavLink>
                    <NavLink className="nav-item nav-link font-weight-bold" to="">ABOUT</NavLink>
                    <NavLink className="nav-item nav-link font-weight-bold" to="">PROJECTS</NavLink>
                    <NavLink className="nav-item nav-link font-weight-bold" to="">CONTACT</NavLink>
                    </div>
                </div>
            </Nav> */}
        </>
    )
}

export default Nav