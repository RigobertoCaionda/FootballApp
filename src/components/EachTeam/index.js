const Page = ({data}) => {
	return (
				
				<tbody>
					<tr>
						<td>{data.position} {data.team.name}</td>
						<td>{data.playedGames}</td>
						<td>{data.won}</td>
						<td>{data.draw}</td>
						<td>{data.lost}</td>
						<td>{data.goalsFor}: {data.goalsAgainst}</td>
						<td>{data.points}</td>
					</tr>
				</tbody>		
		);
}
export default Page;