import React from "react";
import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slides1 from "../../images/home/slides1.png";
import slides2 from "../../images/home/slides2.png";
import { destructuredTheme } from "../../style";

function Section2() {
	const slidesSection2 = [
		{ h1: "EASY", p: "Just swipe to find workout buddies", img: slides1, bg: "gradient" },
		{ h1: "ELITE", p: "Exclusive community to motivate one another", img: slides2, bg: "gradient" },
	];
	return (
		<Styled>
			<Carousel infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} autoPlay>
				{slidesSection2.map((each) => (
					<div className="carousel-items">
						<img src={each.img} alt="img" />
						<div/>
						<h1>{each.h1}</h1>
						<p>{each.p}</p>
					</div>
				))}
			</Carousel>
		</Styled>
	);
}

export default Section2;

// ================================= SECTION 2 ==========================================//

// SEction 2 content
const Styled = styled.section(({ theme, ...props }) => {
	const t = destructuredTheme(theme);
	console.log(props);

	return css`
		.carousel-items {
			height: 100vh;
			display: grid;
			grid-template-columns: 20% 70% 0%;
			grid-template-rows: 80% 20%;
			grid-template-areas:
				"h1 img bg"
				". p .";
			place-content: end;
			h1 {
				grid-area: h1;
				writing-mode: vertical-rl;
				text-orientation: upright;
				font-size: 10vh;
			}
			img {
				grid-area: img;
				height: 100%;
			}
			div {
				grid-column-start: img;
				grid-column-end: bg;
				grid-row-start: img;
				grid-row-end: bg;
				z-index: -1;
				margin-top: 20vh;
				height: 80%;
				background: ${t.gradient2};
			}

			p {
				grid-area: p;
				text-align: left;
				font-size: 1.2em;
			}
		}
	`;
});
