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
		font-size: 16px;
	}

	span {
		p {
			padding: 10px 0px;
		}

		p:nth-child(even) {
			background-color: #eee;
		}
	}
`;
