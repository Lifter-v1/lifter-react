import React from "react";
import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import buddyBoxing from "../../images/home/buddy-boxing.mp4";
import buddySoccer from "../../images/home/buddy-soccer.mp4";
import buddyYoga from "../../images/home/buddy-yoga.mp4";
import { ReactComponent as YogaIcon } from "../../images/home/YogaIcon.svg";
import { ReactComponent as SoccerIcon } from "../../images/home/TeamIcon.svg";
import { ReactComponent as BoxingIcon } from "../../images/home/BoxingIcon.svg";
import { destructuredTheme, Button } from "../../style";

function Section3() {
	// ========================CAROUSEL SECTION 3 =======================//
	const slidesSection3 = [
		{
			video: buddyBoxing,
			h3: ' "I no longer have to workout alone. I\'ve found the best workout partner on Lifter. " ',
			p: "Tom, Yorkshire England",
		},
		{
			video: buddySoccer,
			h3: ' "Ole ole ole oleee! "',
			p: "Lionel, Barcelona",
		},
		{
			video: buddyYoga,
			h3: ' "I used to be so lonely, but with Lifter I\'ve found a reliable workout buddy "',
			p: "Angelique, New Jersey",
		},
	];

	const thumbs = [<BoxingIcon className="thumbnail" />, <SoccerIcon className="thumbnail" />, <YogaIcon className="thumbnail" />];
	return (
		<Styled>
			<Carousel showArrows={true} infiniteLoop={true} showStatus={false} renderThumbs={() => thumbs}>
				{slidesSection3.map((each) => (
					<div className="carousel-items">
						<video autoPlay loop muted>
							<source src={each.video} type="video/mp4" />
						</video>
						<div className="carousel-text">
							<h3>{each.h3}</h3>
							<p>{each.p}</p>
						</div>
					</div>
				))}
			</Carousel>
			<Button> CREATE ACCOUNT </Button>
			<Button> LOGIN </Button>
		</Styled>
	);
}

export default Section3;

// ===================================================================//
const Styled = styled.section(({ theme }) => {
	const t = destructuredTheme(theme);

	return css`
		background-color: ${t.black.DEFAULT};
		position: relative;
		padding-top: 12vh;

		.carousel-items {
			display: flex;
			flex-direction: column;
			width: 100vw;
		}

		video {
			background-color: ${t.black.DEFAULT};
			left: 0;
			overflow: hidden;
			object-fit: cover;
			height: 50vh;
			width: 100vw;
		}

		.carousel-text {
			position: absolute;
			background-color: ${t.black.DEFAULT};
			opacity: ${t.op70};
			width: 100vw;
			height: 50vh;
		}

		h3,
		p {
			color: ${t.white.DEFAULT};
			width: 80vw;
			padding: 1em;
		}
		p {
			opacity: ${t.op70};
		}

		.thumbnail {
			width: 100%;
		}
	`;
});
