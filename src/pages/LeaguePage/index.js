import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../api';
import {
		LeagueArea, 
		Container,
		TopScorersArea,
		TopScorersButton,
		LastUpdate
	} from './styled';
import {PageTitle} from '../../AppStyled';
import EachTeam from '../../components/EachTeam';
import EachPlayer from '../../components/EachPlayer';
const Page = () => {
	const {id} = useParams();
	const [classification, setClassification] = useState([]);
	const [scorers, setScorers] = useState([]);
	const [leagueName, setLeagueName] = useState(0);
	useEffect(()=>{
		switch(id) {
			case '2021':
				setLeagueName('Premier League');
			break;
			case '2014':
				setLeagueName('La Liga');
			break;
			case '2019':
				setLeagueName('Serie A');
			break;
			case '2002':
				setLeagueName('Bundesliga');
			break;
			case '2015':
				setLeagueName('Ligue 1');
			break;
			case '2017':
				setLeagueName('Liga Nos');
			break;
			case '2001':
				setLeagueName('UEFA Champions League');
			break;
			case '2146':
				setLeagueName('UEFA Europe League');
			break;
			default:
				setLeagueName('Indefinido');
		}
		const getLeagueDetails = async () => {
			const json = await api.getLeagueData(id);
			setClassification(json);
		}
		getLeagueDetails();
	},[id]);

	const getTopScorers = async () => {
		const json = await api.getScorers(id);
		setScorers(json);
	}

	const handleClick = () => {
		getTopScorers();
	}

	return (
			<LeagueArea>
				<PageTitle>{leagueName}</PageTitle>
				<Container>
					<table width="100%" cellSpacing="0" border="1">
						<thead>
							<th width="40%">Equipa</th>
							<th width="10%">J</th>
							<th width="10%">V</th>
							<th width="10%">E</th>
							<th width="10%">D</th>
							<th width="10%">Golos</th>
							<th width="10%">PTS</th>
						</thead>
						
						{classification.length > 0 &&
							classification[0].table.map((item, index)=>(
								<EachTeam key={index} data={item}/>
							))
					}
					</table>

					<TopScorersArea>
						<TopScorersButton onClick={handleClick}>
							Top Goleadores
						</TopScorersButton>

						<table width="100%" border="1" cellSpacing="0">
							<thead>
							<th>Nome</th>
							<th>P</th>
							<th>T</th>
							<th>J</th>
							<th>G</th>
						</thead>
							{console.log(scorers)}
							{scorers.scorers &&
								scorers.scorers.map((i,k)=>(
									<EachPlayer key={k} data={i} 
										currentMatch={scorers.season.currentMatchday}/>
								))
							}
						</table>
						<LastUpdate>
							Atualizado em: {scorers.competition && 
								scorers.competition.lastUpdated}
						</LastUpdate>
					</TopScorersArea>
				</Container>
			</LeagueArea>
		);
}
export default Page;