const Navbar = () => {
    return (
        <nav className="backdrop-blur-md shadow-sm">
            <div className="mx-auto px-6 lg:px-8 h-16 flex items-center justify-between text-white">
                <h1 className="text-xl font-bold text-gradient hover:scale-105 duration-100 cursor-pointer">Logstack.dev</h1>
                {/* <ul className="flex space-x-6 font-medium">
                    <li><a href="#" className="hover:underline">Home</a></li>
                </ul> */}
            </div>
        </nav>
    )
}

export default Navbar
