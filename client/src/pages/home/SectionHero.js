import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as LifterLogo } from "../../images/common/LifterLogo.svg";
import { destructuredTheme, Button } from "../../style";
import homesection1 from "../../images/home/homesection1.mp4";

function SectionHero() {
	return (
		<Styled>
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
		</Styled>
	);
}
export default SectionHero;

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
