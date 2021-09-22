import styled from 'styled-components';
export const PageContainer = styled.div`
	width: 1000px;
	margin: auto;
	background-color: #a5a58d;
	padding: 15px 50px;
	@media(min-width: 768px) and (max-width: 1023px) {
		width: auto;
	}
	@media(max-width: 600px) {
		width: auto;
	}
`;
export const PageTitle = styled.h1`
	text-align: center;
	margin-bottom: 30px;
`;