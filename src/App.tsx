import React, { useCallback, useMemo, useState } from "react";
import Footer from "./components/Footer";
import logo from "./assets/images/logo.svg";
import Menu from "./assets/images/icon-menu.svg";
import MenuClose from "./assets/images/icon-close-menu.svg";

import clientDataBiz from "./assets/images/client-databiz.svg";
import clientAudiophile from "./assets/images/client-audiophile.svg";
import clientMeet from "./assets/images/client-meet.svg";
import clientMaker from "./assets/images/client-maker.svg";
import HeroImgMobile from "./assets/images/image-hero-mobile.png";
import HeroImgDesktop from "./assets/images/image-hero-desktop.png";
import Navigation, { StringArray } from "./components/Navigation";
import useMediaQuery from "./hooks/useMediaQuery";

const App = () => {
	const [open, setOpen] = useState<boolean>(false);

	const classNames: StringArray = useMemo(() => {
		const classes: StringArray = ["header__end"];

		if (open) {
			classes.push("open");
		}

		return classes;
	}, [open]);

	const matches = useMediaQuery("(min-width: 768px)");

	const handleToggle = useCallback(() => {
		setOpen((prevState) => !prevState);
	}, []);

	return (
		<div className="container">
			<header className="header flex">
				<div className="header__logo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
				<Navigation open={open} handleClick={handleToggle} />
				<div className={classNames.join(" ")}>
					<button
						className="btn btn--secondary"
						onClick={handleToggle}
					>
						<img
							src={open ? MenuClose : Menu}
							className="App-logo"
							alt="menu"
						/>
					</button>
					<button className="btn btn--secondary mobile-hidden">
						Login
					</button>
					<button className="btn btn--outline mobile-hidden">
						Register
					</button>
				</div>
			</header>
			<main className="main flex">
				<section className="content">
					<h1>Make remote work</h1>
					<p className="content__description">
						Get your team in sync, no matter your location.
						Streamline processes, create team rituals, and watch
						productivity soar.
					</p>
					<button className="btn btn--primary btn--large">
						Learn more
					</button>

					<div className="clients">
						<div className="client">
							<img
								src={clientDataBiz}
								alt="data biz client logo"
							/>
						</div>
						<div className="client">
							<img
								src={clientAudiophile}
								alt="audiophile client logo"
							/>
						</div>
						<div className="client">
							<img src={clientMeet} alt="meet client logo" />
						</div>
						<div className="client">
							<img src={clientMaker} alt="maker client logo" />
						</div>
					</div>
				</section>
				<div className="image">
					<img
						src={matches ? HeroImgDesktop : HeroImgMobile}
						alt="Hero image"
						loading="lazy"
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;
