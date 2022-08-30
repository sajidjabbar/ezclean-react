import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import bell from "../assets/img/bell.png";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import Faq from "../pages/FAQ/Faq";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Auth/Login";

const Header = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	let location = useLocation();
	console.log(location);

	return (
		<nav className="navbar navbar-default navbar-trans navbar-expand-lg">
			<div className="container">
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#navbarDefault"
					aria-controls="navbarDefault"
					aria-expanded="false"
					aria-label="Toggle navigation"
				></button>
				<a className="navbar-brand text-brand" href="/">
					<img className={"header-logo"} src={logo} />
				</a>
				<div
					className="navbar-collapse collapse justify-content-center"
					id="navbarDefault"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							{/*<a className="nav-link active" href="#">Home</a>*/}
							<Link
								className={
									location.pathname === "/" ? "nav-link active" : "nav-link"
								}
								to={"/"}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							{/*<a className="nav-link" href={<About />}>About</a>*/}
							<Link
								className={
									location.pathname === "/About"
										? "nav-link active"
										: "nav-link"
								}
								to={"/About"}
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							{/*<a className="nav-link" >Services</a>*/}
							<Link
								className={
									location.pathname === "/Services"
										? "nav-link active"
										: "nav-link"
								}
								to={"/Services"}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							{/*<a className="nav-link" >Blog</a>*/}
							<Link
								className={
									location.pathname === "/Blogs"
										? "nav-link active"
										: "nav-link"
								}
								to={"/Blogs"}
							>
								Blogs
							</Link>
						</li>
						<li className="nav-item">
							{/*<a className="nav-link" >FAQ</a>*/}
							<Link
								className={
									location.pathname === "/faq" ? "nav-link active" : "nav-link"
								}
								to={"/faq"}
							>
								FAQ
							</Link>
						</li>
						<li className="nav-item">
							{/*<a className="nav-link" >Contact</a>*/}
							<Link
								className={
									location.pathname === "/Contact"
										? "nav-link active"
										: "nav-link"
								}
								to={"/Contact"}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				{/*<a className="d-none d-md-block my-account-btn mr-2">Login</a>*/}
				<Link className="d-none d-md-block my-account-btn mr-2" to={"/Login"}>
					Login
				</Link>
				|<a className="d-none d-md-block my-account-btn ml-2">Register</a>
				<img className={"img-fluid ml-4"} src={bell} />
			</div>
		</nav>
	);
};

export default Header;
