let BASE = 'https://api.football-data.org/v2';

const api = {
	getLeagueData: async (leagueId) => {
		const res = await fetch(BASE+`/competitions/${leagueId}/standings`,{
			method: 'GET',
			headers: {
				'X-Auth-Token': '09d75dbfa988420ba5ee0bf6bfdc7d8e'
			}
		});
		const json = await res.json();
		return json.standings;
	},
	getScorers: async (leagueId) => {
		const res = await fetch(BASE+`/competitions/${leagueId}/scorers`,{
			method: 'GET',
			headers: {
				'X-Auth-Token': '09d75dbfa988420ba5ee0bf6bfdc7d8e'
			}
		});
		const json = await res.json();
		return json;
	}
}
export default api;
