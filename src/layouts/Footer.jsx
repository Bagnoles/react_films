

function Footer() {
    return (
        <footer className="page-footer teal accent-4">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">React Movies</h5>
                        <p className="grey-text text-lighten-4">This is a study project using React JS.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/Bagnoles">My GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright
                </div>
            </div>
        </footer>
    )
}

export default Footer;