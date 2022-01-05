import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { Navbar } from "../../style";
import { Menu } from "@styled-icons/heroicons-solid/Menu";
import { ReactComponent as LifterLogo } from "../../images/common/LifterLogo.svg";
import styled from "styled-components";

/**
 * author(s): Blahblahblaah13
 * created: 29.11.2021
 * version: 1
 * updated: 
 * 
 * Purpose: Public landing page for Lifter, subdivided into 5 sections and a sticky navbar
 * 
 * Notes:
 1. Snap to section when scrolling: https://stackoverflow.com/questions/53416348/css-scroll-snapping-vertical-not-working
 2. Autoplay video in react: https://stackoverflow.com/questions/50259734/video-autoplay-not-working-trying-to-find-a-fix
 3. Destructuring props in styled-components: https://spectrum.chat/styled-components/help/using-destructuring-assignment-on-props~1ec8c907-9ace-44b5-a554-57d9380cb4db
 4. Carousel npm package: https://github.com/leandrowd/react-responsive-carousel
 5. get scroll position with useRef: https://www.codegrepper.com/code-examples/javascript/react+how+to+get+scroll+position+value
 6. navbar changing color according to section:https://www.youtube.com/watch?v=JMsNslI8KoY
 7. To destrcuture theme: https://stackoverflow.com/questions/41794086/es6-destructuring-within-a-return-statement
 8. Sticky: https://www.youtube.com/watch?v=8TyoihVGErI 
 9. Grid: https://www.youtube.com/watch?v=rg7Fvvl3taU
 10. Hide scollbar: https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
 11. issues installing framer motion: https://stackoverflow.com/questions/69769360/error-importing-framer-motion-v5-in-react-with-create-react-app
 12. Styled-Components and Framer Motion: https://dev.to/darthknoppix/animate-styled-components-with-framer-motion-2202
 13. 
 
 */

function Home() {
	return (
		<div style={{ position: "relative" }}>
			<Section1 />
			<div>
				<StyledNavbar id="navbar">
					<LifterLogo className="LifterLogo" fill="red" />
					<h2>Lifter</h2>
					<Menu className="Menu" />
				</StyledNavbar>
				<Section2 />
				<Section3 />
				<Section4 />
			</div>
			<Section5 />
		</div>
	);
}

export default Home;

const StyledNavbar = styled(Navbar)`
	position: sticky;
	top: 0;
	z-index: 10;

`;
