import styled, { css } from "styled-components";
import { destructuredTheme } from "./destructuredTheme";

export const Button = styled.button(({ theme, ...props }) => {
	const t = destructuredTheme(theme);

	return css`
		border-radius: ${t.br50};
		width: 100%;
		padding: 0.8rem 2.5rem;
		background-color: ${props.black ? t.black.DEFAULT : "transparent"};
		color: ${t.white.DEFAULT};
		border: ${props.white && `${t.thick2} solid ${t.white.DEFAULT}`};
	`;
});
