import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

function Main() {
	const [apiResponsePeople, setApiResponsePeople] = useState([]);
	const [apiResponsePlanets, setApiResponsePlanets] = useState([]);

	//this function will run everytime the component mounts and will save the api response inside the state
	useEffect(() => {
		//Function responsible for fetching the API
		async function fetchDataFromApi() {
			try {
				const [responsePeople, responsePlanets] = await Promise.all([
					api.get('people'),
					api.get('planets'),
				]);

				//Function responsible for transform the homeworld property into a number
				const responsePeopleWithHomeworldInNumbers = responsePeople.data.results.map(
					(p) => ({ ...p, homeworld: p.homeworld.slice(29, 30) })
				);

				setApiResponsePeople(responsePeopleWithHomeworldInNumbers);
				setApiResponsePlanets(responsePlanets.data.results);
			} catch {
				console.log('Error fetching API');
			}
		}

		fetchDataFromApi();
	}, []);

	return (
		<Container>
			<p>This is the API response for people and planets.</p>
			<span>
				{apiResponsePlanets.length ? (
					apiResponsePeople.map((item) => (
						<p key={item.name}>
							Hello, My name is {item.name}. I was born in{' '}
							{apiResponsePlanets[item.homeworld - 1].name} in {item.birth_year}{' '}
							and I have {item.starships.length} starships.
						</p>
					))
				) : (
					<p>LOADING...</p>
				)}
			</span>
		</Container>
	);
}

export default Main;
