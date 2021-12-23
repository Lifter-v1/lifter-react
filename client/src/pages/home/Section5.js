import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as LifterLogo } from "../../images/common/LifterLogo.svg";
import { destructuredTheme } from "../../style";
import { TwitterSquare } from "@styled-icons/fa-brands/TwitterSquare";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Instagram } from "@styled-icons/remix-fill/Instagram";

function Section5() {
	return (
		<Styled>
			<LifterLogo />
			<h1>Lifter</h1>
			<div>
				<TwitterSquare className="logo" />
				<FacebookSquare className="logo" />
				<Instagram className="logo" />
			</div>
		</Styled>
	);
}

export default Section5;

const Styled = styled.section(({ theme }) => {
	const t = destructuredTheme(theme);

	return css`
		background-color: ${t.black.DEFAULT};
		color: ${t.white.DEFAULT};

		LifterLogo {
			background: ${t.gradient};
			background-color: red;
		}

		.logo {
			width: 10vw;
		}
	`;
});
