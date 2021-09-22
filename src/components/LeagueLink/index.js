import {Container, LinkArea} from './styled';
import {useHistory} from 'react-router-dom';
const Page = ({link, text}) => {
	const history = useHistory();
	const handleLinkClick = (e) => {
		e.preventDefault();
		history.push(link);
	}
	
	return (
				<LinkArea  href={link} onClick={handleLinkClick}>
					<Container>
						{text}
					</Container>
				</LinkArea>
		);
}
export default Page;