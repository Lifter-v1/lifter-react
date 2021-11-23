import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Menu } from "@styled-icons/heroicons-solid/Menu";
import { ReactComponent as LifterLogo } from "../../images/common/LifterLogo.svg";
import slides1 from "../../images/home/slides1.png";
import slides2 from "../../images/home/slides2.png";
import homesection1 from "../../images/home/homesection1.mp4";

/**
 * Applied Functionalities
 1. Snap to section when scrolling: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
 2. Autoplay video in react: https://stackoverflow.com/questions/50259734/video-autoplay-not-working-trying-to-find-a-fix
 3. Destructuring props in styled-components: https://spectrum.chat/styled-components/help/using-destructuring-assignment-on-props~1ec8c907-9ace-44b5-a554-57d9380cb4db
 4. Carousel npm package: https://github.com/leandrowd/react-responsive-carousel
 5. get scroll position with useRef: https://www.codegrepper.com/code-examples/javascript/react+how+to+get+scroll+position+value
 6. navbar changing color according to section:https://www.youtube.com/watch?v=JMsNslI8KoY
 7. To destrcuture theme: https://stackoverflow.com/questions/41794086/es6-destructuring-within-a-return-statement
 */

/**
 * ! ISSUES
 * 1. - [ ] navbar
 * 2. - [ ] snap
 * 3. - [ ] ALIGNEMEENNTTTT
 * HEELLPPP
 *
 */

function Home({match}) {
	console.log("ze props", match);
	// ========================CAROUSEL SECTION 2 =======================//
	const slides = [
		{ h1: "EASY", p: "Just swipe to find workout buddies", img: slides1, bg: "gradient" },
		{ h1: "ELITE", p: "Exclusive community to motivate one another", img: slides2, bg: "black" },
	];

	// ========================Navbar change upon scrolling =======================//
	const [darkNav, setDarkNav] = useState(false);
	const [isNavHorizontal, setIsNavHorizontal] = useState(true);
	useEffect(() => (window.innerWidth <= 425 ? setIsNavHorizontal(true) : setIsNavHorizontal(false)), [window.innerWidth]);

	// =======================================================================//

	return (
		<div className="snapScroll">
			<HeroSection>
				{/* Add autoPlay */}
				<video loop muted>
					<source src={homesection1} type="video/mp4" />
				</video>
				<div className="bg-filter" />
				<div className="hero-content">
					<LifterLogo color="#4B5358" className="LifterLogo" />
					<h1>Lifter</h1>
					<p>Meet new and interesting workout partners</p>
					<Button black>CREATE ACCOUNT</Button>
					<Button white>LOGIN</Button>
				</div>
			</HeroSection>
			<Section2>
				{/* {isNavHorizontal ? (
					<Navbar id="navbar" className="horizontal">
						<LifterLogo className="LifterLogo" />
						<h2>Lifter</h2>
						<Menu className="Menu" />
					</Navbar>
				) : (
					<Navbar id="navbar" className="vertical">
						<LifterLogo className="LifterLogo" />
						<h2>Lifter</h2>
						<p>About Us</p>
						<p>Login</p>
						<p>Sign Up</p>
					</Navbar>
				)} */}
				{
					<Carousel showStatus={false} showIndicators={false} showThumbs={false} autoPlay>
						{slides.map((each) => (
							<div className="section2-content">
								<img src={each.img} alt="img" />
								<div className={each.bg} />
								<h1>{each.h1}</h1>
								<p>{each.p}</p>
							</div>
						))}
					</Carousel>
				}
			</Section2>
			<></>
		</div>
	);
}

export default Home;

// ============================================================================//

const destructureTheme = ({
	color: { black, white, grey, blue, purple, gradient },
	font: { lato, oxygen },
	fontSize: { lg10, md5, sm1 },
	opacity: { op70 },
	borderRadius: { br50 },
	padding: { p2 },
	thickness: { thick2 },
}) => ({
	black,
	white,
	grey,
	blue,
	purple,
	gradient,
	lato,
	oxygen,
	lg10,
	md5,
	sm1,
	op70,
	br50,
	p2,
	thick2,
});

// ================================== HERO SECTION =============================//

const HeroSection = styled.section(({ theme }) => {
	const t = destructureTheme(theme);

	return css`
		position: relative;

		video {
			position: absolute;
			background-color: ${t.black.DEFAULT};
			left: 0;
			overflow: hidden;
			object-fit: cover;
			max-height: 100vh;
			min-width: 100vw;
		}

		.bg-filter {
			position: absolute;
			background: ${t.gradient};
			opacity: ${t.op70};
			height: 100vh;
			width: 100vw;
		}

		.hero-content {
			justify-content: end;
			padding-bottom: ${t.p2em};
			height: 100vh;

			.LifterLogo {
				width: 50vw;
				z-index: 1;
			}

			h1 {
				z-index: 1;
			}

			p {
				width: 50vw;
				opacity: ${t.op70};
				color: ${t.white.DEFAULT};
				padding: ${t.p2em} 0;
				z-index: 1;
			}

			Button {
				width: 80vw;
				margin: ${t.p2em} 0;
				z-index: 1;
				max-width: 500px;
			}
		}
	`;
});

//===================================== COMMON BUTTONS + SECTION ===============================//
const Button = styled.button(({ theme, ...props }) => {
	const t = destructureTheme(theme);

	return css`
		border-radius: ${t.br50};
		width: 100%;
		padding: 0.8rem 2.5rem; //! padding
		background-color: ${props.black ? t.black.DEFAULT : "transparent"};
		color: ${t.white.DEFAULT};
		border: ${props.white && `${t.thick2} solid ${t.white.DEFAULT}`};
	`;
});

// ================================= SECTION 2 ==========================================//

// SEction 2 content
const Section2 = styled.section(({ theme, ...props }) => {
	const t = destructureTheme(theme);
	console.log(props);

	return css`
		.section2-content {
			display: grid;
			grid-template-columns: 20% 80%;
			grid-template-rows: 80% 20%;
			grid-template-areas:
				"h1 img"
				"p .";
			place-content: end;
			h1 {
				grid-area: h1;
				writing-mode: vertical-rl;
				text-orientation: upright;
			}
			img {
				grid-area: img;
				height: 80%;
			}
			div {
				grid-area: img;
				z-index: -1;
				margin-top: 20vh;
				height: 70vh;
				background: ${props.className.gradient ? `${t.gradient}` : `${t.black.DEFAULT}`};
			}

			p {
				grid-area: p;
			}
		}
	`;
});
// ===================================================================//

//Navbar
const Navbar = styled.div(({ theme, ...props }) => {
	const t = destructureTheme(theme);

	return css`
		.horizontal {
			width: 100vw;
			height: 12vh;
			display: grid;
			grid-template-columns: 20% 29% 60%;
			grid-template-areas: "logo lifter menu";
			place-items: center start;
			background-color: yellow;
		}

		.vertical {
			width: 12vw;
			height: 100vh;
			display: grid;
			grid-template-rows: 20% 29% 60%;
			grid-template-areas: "logo lifter menu";
			place-items: center start;
		}

		.LifterLogo {
			height: 35%;
			width: 100%;
			grid-area: logo;
			fill: ${t.gradient};
		}

		h2 {
			grid-area: lifter;
		}

		.Menu {
			grid-area: menu;
			height: 50%;
			padding-left: 65%; //!padding
			color: ${t.purple.DEFAULT};
		}

		.sticky {
			position: fixed;
			top: 0;
		}
	`;
});

const SecionTestimonial = styled.div(({ theme, ...props }) => {
	const t = destructureTheme(theme);

	return css`
		width: 100vw;
		height: 100vh;
		background-color: ${t.black.DEFAULT};
	`;
});
