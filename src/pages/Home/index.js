import {HomeArea} from './styled';
import {PageContainer} from '../../AppStyled';
import LeagueLink from '../../components/LeagueLink';
const Page = () => {
	return (
			<HomeArea>
				<PageContainer>
					<LeagueLink link="/leagues/2021" text="Premier League" />
					<LeagueLink link="/leagues/2014" text="La Liga" />
					<LeagueLink link="/leagues/2019" text="Serie A" />
					<LeagueLink link="/leagues/2002" text="Bundesliga" />
					<LeagueLink link="/leagues/2015" text="Ligue 1" />
					<LeagueLink link="/leagues/2017" text="Liga Nos" />
				</PageContainer>
			</HomeArea>
		);
}
export default Page;