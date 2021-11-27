import React from "react";
import SectionHero from "./SectionHero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Navbar } from "../../style";
import { Menu } from "@styled-icons/heroicons-solid/Menu";
import { ReactComponent as LifterLogo } from "../../images/common/LifterLogo.svg";
import styled from "styled-components";

/**
 * Section Author: Blahblahblaah13
 * 
 * Applied Functionalities
 1. Snap to section when scrolling: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
 2. Autoplay video in react: https://stackoverflow.com/questions/50259734/video-autoplay-not-working-trying-to-find-a-fix
 3. Destructuring props in styled-components: https://spectrum.chat/styled-components/help/using-destructuring-assignment-on-props~1ec8c907-9ace-44b5-a554-57d9380cb4db
 4. Carousel npm package: https://github.com/leandrowd/react-responsive-carousel
 5. get scroll position with useRef: https://www.codegrepper.com/code-examples/javascript/react+how+to+get+scroll+position+value
 6. navbar changing color according to section:https://www.youtube.com/watch?v=JMsNslI8KoY
 7. To destrcuture theme: https://stackoverflow.com/questions/41794086/es6-destructuring-within-a-return-statement
 8. Sticky: https://www.youtube.com/watch?v=8TyoihVGErI 
 9. Grid: https://www.youtube.com/watch?v=rg7Fvvl3taU
 10. Hide scollbar: https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
 
 */

function Home() {
	return (
		<div className="snapScroll" style={{ position: "relative" }}>
			<SectionHero />
			<div>
				<StyledNavbar id="navbar">
					<LifterLogo className="LifterLogo" />
					<h2>Lifter</h2>
					<Menu className="Menu" />
				</StyledNavbar>
				<Section2 />
				<Section3 />
			</div>
		</div>
	);
}

export default Home;

const StyledNavbar = styled(Navbar)`
	position: sticky;
	top: 0;
	z-index: 10;
`;
