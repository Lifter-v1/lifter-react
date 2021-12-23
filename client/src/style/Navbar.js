import styled, { css } from "styled-components";
import { destructuredTheme } from "./destructuredTheme";

//Navbar
export const Navbar = styled.div(({ theme, ...props }) => {
	const t = destructuredTheme(theme);

	return css`
		width: 100vw;
		height: 12vh;
		display: grid;
		grid-template-columns: 20% 29% 60%;
		grid-template-areas: "logo lifter menu";
		place-items: center start;

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
		}

		h2 {
			grid-area: lifter;
		}

		.Menu {
			grid-area: menu;
			height: 50%;
			padding-left: 65%;
			color: ${t.purple.DEFAULT};
		}

		.sticky {
			position: fixed;
			top: 0;
		}
	`;
});
