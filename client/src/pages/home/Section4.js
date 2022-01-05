import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { destructuredTheme } from "../../style";
import CardPrice from "./CardPrice";

function Section4() {
	const pricePlan = [
		{
			planName: "Spotter",
			price: 0,
			swipesNum: 5,
			msgesNum: 10,
		},
		{
			planName: "Cardio Bunny",
			price: 5,
			swipesNum: "Unlimited",
			msgesNum: "Unlimited",
		},
		{
			planName: "Gym Rat",
			price: 15,
			details: "Priority Listing",
			swipesNum: "Unlimited",
			msgesNum: "Unlimited",
		},
	];

	return (
		<Styled>
			<h2>A Plan for Every Fitness Enthusiast Needs</h2>
			<h3>Simple and affordable price plans for you and your needs</h3>
			{pricePlan.map((each) => (
				<CardPrice pricePlan={each} />
			))}
		</Styled>
	);
}

export default Section4;

const Styled = styled.section(({ theme }) => {
	const t = destructuredTheme(theme);

	return css`
		height: auto;
		display: grid;
		padding: 18vh 5vh;
		gap: 2em;

		h2 {
			font-size: 2.5em;
		}
	`;
});
