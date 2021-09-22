import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import LeaguePage from './pages/LeaguePage';
const Page = () => {
	return (
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/leagues/:id">
					<LeaguePage />
				</Route>

				<Route>
					<div>Pagina nao encontrada!</div>
				</Route>
			</Switch>
		);
}
export default Page;