import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./style/Global";
import Home from "./pages/home";
import Register from "./pages/register";

const theme = {
	color: {
		black: {
			light: "#383838",
			DEFAULT: "#1E2224",
			dark: "#000000",
		},
		white: {
			light: "#FFFFFF",
			DEFAULT: "#F6F8FA",
			dark: "#EBEBEB",
		},
		grey: {
			light: "#CFD5D9",
			DEFAULT: "#909699",
			dark: "#4B5358",
		},
		blue: {
			light: "#ACD2E8",
			DEFAULT: "#497F9E",
			dark: "#233F4F",
		},
		purple: {
			light: "#DDBEEC",
			DEFAULT: "#BA76DA",
			dark: "#4A295A",
		},
		gradient: "linear-gradient(to bottom, #497F9E, #BA76DA)",
	},
	font: {
		lato: `"Lato", sans-serif`,
		oxygen: `"Oxygen", sans-serif`,
	},
	fontSize: {
		lg10: "10em",
		md5: "5em",
		sm1: "1.3em",
	},
	opacity: {
		op70: "0.7",
	},
	borderRadius: {
		br50: "50px",
	},
	padding: {
		p2: "2em",
	},
	thickness: {
		thick2: "2.5px",
	}
};

function App() {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes>
				{!isLogged ? (
					<>
						<Route path="/" element={<Home />} />
						<Route path="/register/:id" element={<Register />} />
					</>
				) : (
					<></>
				)}
			</Routes>
		</ThemeProvider>
	);
}

export default App;

