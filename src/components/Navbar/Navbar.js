import "./styles.css";

const Navbar = () => {
    return (
        <div className="navbar-div">
            <nav>
                <ul>
                    <li>
                        <button><a href="#">
                        Home
                        </a>
                        </button>
                    </li>
                    <li>
                        <button><a href="#project">
                        Project
                        </a></button>
                    </li>
                    <li>
                        <button><a href="#contact">
                        Contact
                        </a></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;