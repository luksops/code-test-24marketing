import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, ButtonContainer } from './styles';

const apiUrl = 'https://swapi.dev/api/';

function Main() {
	const [apiResponsePeople, setApiResponsePeople] = useState({});
	const [apiResponsePlanets, setApiResponsePlanets] = useState([]);

	//this function will run everytime the component mounts and will save the api response inside the state
	useEffect(() => {
		//Function responsible for fetching the API
		async function fetchDataFromApi() {
			try {
				const [responsePeople, responsePlanets] = await Promise.all([
					api.get(apiUrl + 'people'),
					api.get(apiUrl + 'planets'),
				]);

				//Function responsible for transform the homeworld property into a number
				const people = responsePeople.data.results.map((p) => ({
					...p,
					homeworld: p.homeworld.slice(29, 30),
				}));

				const { previous, next } = responsePeople.data;

				setApiResponsePeople({ people, previous, next });
				setApiResponsePlanets(responsePlanets.data.results);
			} catch {
				console.log('Error fetching API');
			}
		}

		fetchDataFromApi();
	}, []);

	const handlePagination = async (url) => {
		const responsePeople = await api.get(url);

		const people = responsePeople.data.results.map((p) => ({
			...p,
			homeworld: p.homeworld.slice(29, 30),
		}));

		const { previous, next } = responsePeople.data;

		setApiResponsePeople({ people, previous, next });
	};

	return (
		<Container>
			<p>This is the API response for people and planets.</p>
			<span>
				{apiResponsePlanets.length ? (
					apiResponsePeople.people.map((item) => (
						<p key={item.name}>
							Hello, My name is {item.name}. I was born in{' '}
							{apiResponsePlanets[item.homeworld - 1].name} in {item.birth_year}{' '}
							and I have {item.starships.length} starships.
						</p>
					))
				) : (
					<p>LOADING...</p>
				)}
				<ButtonContainer>
					<button
						onClick={() => handlePagination(apiResponsePeople.previous)}
						disabled={!apiResponsePeople.previous}
					>
						Previous Page
					</button>
					<button
						onClick={() => handlePagination(apiResponsePeople.next)}
						disabled={!apiResponsePeople.next}
					>
						Next Page
					</button>
				</ButtonContainer>
			</span>
		</Container>
	);
}

export default Main;
