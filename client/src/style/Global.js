import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(({ theme }) => {
	const {
		color: { black, white, grey, blue, purple, gradient },
		font: { lato, oxygen },
		fontSize: { lg10, md5, sm1 },
		opacity: { op70 },
		borderRadius: { br50 },
		padding: { p2 },
		thickness: { thick2 },
		
	} = theme;

	return css`
		@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oxygen:wght@300;400;700&display=swap");

		:root {
			font-size: calc(0.5em + 1vw);
			box-sizing: border-box;
		}

		*,
		::before,
		::after {
			box-sizing: inherit;
			margin: 0;
			padding: 0;
		}

		html,
		body {
			overflow-x: hidden;
			scroll-behavior: smooth;
			font-family: ${lato};
			color: ${black.DEFAULT};
			background-color: ${white.DEFAULT};

		}

	/* Allow snapping to section on scroll. Ensure parent container cotnains scrollSnapType: "y mandatory" */

		.snapScroll {
			scroll-snap-type: y mandatory;
		}

		section {
			scroll-snap-align: center;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}

		section {
			height: 100vh;
			width: 100vw;
		}

		img {
			object-fit: contain;
			overflow: hidden;
		}

		h1 {
			font-family: ${oxygen};
			font-size: ${md5};
			font-weight: bold;
		}
	`;
});
