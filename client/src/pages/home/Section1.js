import React from "react";
import styled, { css } from "styled-components";
import { destructuredTheme, Button } from "../../style";
import { Dumbbell } from "@styled-icons/fa-solid/Dumbbell";
import homesection1 from "../../images/home/homesection1.mp4";

// 1. Gradient to text: https://stackoverflow.com/questions/37831837/gradient-text-color

function Section1() {
	return (
		<Styled>
			<video autoPlay loop muted>
				<source src={homesection1} type="video/mp4" />
			</video>
			<div className="bg-filter" />
			<div className="hero-content">
				<LifterIcon>
					<svg style={{ width: "100%", height: "100%", position: "absolute" }} aria-hidden="true" focusable="false">
						<linearGradient id="my-cool-gradient" x2="1" y2="1">
							<stop offset="0%" stop-color="#447799" />
							<stop offset="50%" stop-color="#224488" />
							<stop offset="100%" stop-color="#112266" />
						</linearGradient>
					</svg>
				</LifterIcon>
				<h1>Lifter</h1>
				<p>Meet new and interesting workout partners</p>
				<Button black>CREATE ACCOUNT</Button>
				<Button white>LOGIN</Button>
			</div>
		</Styled>
	);
}
export default Section1;

// ===========================================================//

const Styled = styled.section(({ theme }) => {
	const t = destructuredTheme(theme);

	return css`
		position: relative;
		overflow: hidden;

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
			padding-bottom: ${t.p2};
			height: 100vh;

			.lifterLogo {
				width: 20vh;
				z-index: 1;
			}

			h1 {
				z-index: 1;
			}

			p {
				width: 50vw;
				opacity: ${t.op70};
				color: ${t.white.DEFAULT};
				padding: ${t.p2} 0;
				z-index: 1;
			}

			Button {
				width: 80vw;
				margin-bottom: 1em;
				z-index: 1;
				max-width: 500px;
			}
		}
	`;
});

const LifterIcon = styled(Dumbbell)`
	z-index: 10;
	width: 25vh;
	position: relative;
	color: url(#my-cool-gradient);
`;
