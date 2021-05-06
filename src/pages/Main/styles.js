import styled from 'styled-components';

export const Container = styled.div`
	text-align: center;
	border: 1px solid #eee;
	border-radius: 4px;
	padding: 20px;
	background-color: white;
	flex-grow: 1;

	& > p {
		font-weight: bold;
		padding: 10px 0px;
		font-size: 1.2rem;
		color: #847e3f;
	}

	span {
		p {
			padding: 10px 0px;
			font-size: 0.8rem;
		}

		p:nth-child(even) {
			background-color: #847e3f40;
		}
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		padding: 6px 12px;
		margin: 20px 3px 0;
		background-color: #847e3f;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
`;
