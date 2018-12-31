import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		border: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a, a:hover, a:active, a:visited {
		text-decoration: none;
		color: inherit;
	}

	html, body {
		font-family: "Gotham A", "Gotham B", Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
		background-color: #f6f6dd;
	}
`;

export const Flexer = styled.div`
  padding: 1.5vh 5%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: stretch;
  align-items: stretch;
`;