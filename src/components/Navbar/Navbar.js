import "./styles.css";

const Navbar = () => {
    return (
        <div className="navbar-div">
            <nav>
                <ul>
                    <li>
                        <button>
                        Home
                        </button>
                    </li>
                    <li>
                        <button>
                        Project
                        </button>
                    </li>
                    <li>
                        <button>
                        Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;