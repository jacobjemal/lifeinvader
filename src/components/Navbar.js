const Navbar = () => {
    return(
        <nav className="navbar">
            <div>
                <a href="#" className="home-link">Lifeinvader</a>
            </div>
            <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="serch" placeholder="serch" />
            </div>
            <div>
            <i class="fa-solid fa-bell"></i>
            </div>
        </nav>
    )
}
export default Navbar