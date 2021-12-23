import React from "react";
import styled, { css } from "styled-components";
import slides1 from "../../images/home/slides1.png";
import slides2 from "../../images/home/slides2.png";
import slides3 from "../../images/home/slides3.png";
import { destructuredTheme } from "../../style";

function Section2() {
	const slidesSection2 = [
		{ h2: "ELITE", p: "Exclusive community to motivate one another", img: slides1, className: "white" },
		{ h2: "EASY", p: "Just swipe to find workout buddies", img: slides2, className: "black" },
		{ h2: "TEAM", p: "Find people of similar passion", img: slides3, className: "black" },
		{ h2: "SWIPE", p: "Test it out below", img: null, className: "white" },
	];
	return (
		<Styled>
			{slidesSection2.map((each, id) => (
				<section key={id} className={each.className}>
					<h2>{each.h2}</h2>
					<img src={each.img} alt="img" />
					<div>
						<p>{each.p}</p>
					</div>
				</section>
			))}
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
		overflow-y: scroll;
		overflow-x: hidden;
		height: 100vh;
		z-index: 2;

		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;

		.black {
			background-color: ${t.black.DEFAULT};
			color: ${t.white.DEFAULT};
		}

	

		section {
			display: grid;
			grid-template-areas:
				"one"
				"two"
				"three";
			grid-template-rows: 2fr 2fr 1fr;
			position: relative;

			p {
				grid-area: two;
				color: ${t.white.DEFAULT};
			}

			

			h2 {
				grid-area: one;
				font-size: 8rem;
				letter-spacing: 3vw;
				justify-self: center;
				text-align: center;
				position: sticky;
				top: 0;

			}

			img {
				grid-row: 1 / 3;
				grid-column: 1;
				padding-top: 50px;
				max-width: 100vw;
				height: 100%;
				object-fit: cover;
				justify-self: center;
				z-index: 1;
			}

			div {
				grid-area: three;
				justify-content: center;
				background-color: ${t.black.DEFAULT};
				color: ${t.white.DEFAULT};
				height: 100%;
				padding-bottom: 1vh;
				align-self: end;
				z-index: 2;

				p {
					width: 50vw;
					font-size: 1.5em;
					color: ${t.grey.DEFAULT};
				}
			}

			&:last-child {
				height: 50vh;

				div {
					background-color: ${t.white.DEFAULT};
					color: ${t.black.DEFAULT};
				}

				h2 {
					font-size: 6rem;
				}

				img {
					display: none;
				}
			}
		}
		section::after {
			position: absolute;
			height: 70vh;
			width: 100vw;
			${'' /* background-color: ${t.black.DEFAULT}; */}
			bottom: 0;
			content: "";

		}
	`;
});
