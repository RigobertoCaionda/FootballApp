import styled from 'styled-components';
export const LeagueArea = styled.div``;
export const Container = styled.div`
	width: 1000px;
	margin: auto;
	background-color: #a5a58d;
	padding: 15px 50px;
	@media (max-width: 600px) {
		width: auto;
		padding: 15px 5px;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: auto;
	}
`;
export const TopScorersArea = styled.div`
	margin-top: 50px;
`;
export const TopScorersButton = styled.button`
	padding: 5px;
	cursor: pointer;
`;
export const LastUpdate = styled.div`
	margin-top: 10px;
`;