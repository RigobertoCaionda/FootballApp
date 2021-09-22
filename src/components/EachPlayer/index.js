const Page = ({data, currentMatch}) => {
	console.log(data)
	return (
				
				<tbody>
					<tr>
						<td>{data.position} {data.player.name}</td>
						<td>{data.player.position}</td>
						<td>{data.team.name}</td>
						<td>{currentMatch}</td>
						<td>{data.numberOfGoals}</td>
					</tr>
				</tbody>		
		);
}
export default Page;