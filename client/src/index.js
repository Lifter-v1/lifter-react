import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/**
 * Current dependencies for home page:
 * 1. Animation: framer-motion
 * 2. Carousel:  react-responsive-carousel
 * 3. CSS: styled-components
 * 4. Icons: styled-icons
 * 
 * Future suggestions:
 * -- To replace styled-components + carousel + icons ==> Material-Ui
 * -- apologies if its difficult to replace! Should have done proper commenting ....T.T All the bessstttee!
 */
ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	document.getElementById("root")
);
