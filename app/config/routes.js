// var React = require('react');
import React from 'react';
// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;
// var hashHistory = ReactRouter.hashHistory;
import ReactRouter, {Route, Router, IndexRoute, hashHistory} from 'react-router';
// var Main = require('../components/Main');
import Main from '../components/Main';
//var Home = require('../components/Home');
import Home from '../components/Home';
// var PromptContainer = require('../containers/PromptContainer');
import PromptContainer from '../containers/PromptContainer';
// var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
// var ResultsContainer = require('../containers/ResultsContainer');
import ResultsContainer from '../containers/ResultsContainer';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='playerOne' header="Player One" component={PromptContainer} />
			<Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
			<Route path='battle' component={ConfirmBattleContainer} />
			<Route path='results' component={ResultsContainer} />
		</Route>
	</Router>
)

// module.exports = routes;
export default routes;