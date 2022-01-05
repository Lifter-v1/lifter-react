import React from "react";
import styled, { css } from "styled-components";
import { destructuredTheme, Button } from "../../style";


function CardPrice({ pricePlan }) {
	return (
		<Card>
			<div className="top">
				<p>{pricePlan.planName}</p>

				<h3>$ {pricePlan.price} / mth</h3>
			</div>
			<div className="bottom">
				{pricePlan.details && <p>{pricePlan.details}</p>}
				<p>{pricePlan.swipesNum} Swipes per Day</p>
				<p>{pricePlan.msgesNum} Messages Per Day</p>
				<p>Unlimited App Usage</p>
            </div>
            <Button transparent> Sign Me Up! </Button>
		</Card>
	);
}

export default CardPrice;

const Card = styled.div(({ theme }) => {
	const t = destructuredTheme(theme);

	return css`
		background-color: ${t.white.DEFAULT};
		height: 50vh;
		width: 50vh;
		filter: ${t.dropShadow1};
		justify-content: flex-start;
        gap: 1em;

		.top {
			border-bottom: 2px solid ${t.purple.light};
			filter: ${t.dropShadow1};
			width: 100%;
			height: 40%;
			font-size: 1.5em;
			h3 {
				font-size: 2.2em;
			}
		}

		.bottom {
            width: 100%;
            height: 60%;
            gap: 1em;
            font-size: 1em;
            justify-content: center;
            align-items: center;
            color: ${t.grey.dark};

		}

        Button {
            width: 70%;
            margin-bottom: 5%;
        }
	`;
});
