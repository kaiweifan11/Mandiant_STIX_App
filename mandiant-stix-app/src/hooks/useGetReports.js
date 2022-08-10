import { useCallback, useState } from 'react';
import axios from 'axios';

export default function useGetReports() {
	
	const [isLoading, setIsLoading] = useState(false);

	const getMandiantReport = useCallback(
		async () => {
			// TODO: destructure ibxs, region, accessCategory, page, pageSize for server-side filtering
			setIsLoading(true);
			axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
			  const persons = res.data;
			  //this.setState({ persons });
			  console.log('persons', persons);
			})

			try {
				isLoading(false);
			} catch (err) {
				console.log(err);
			}
			setIsLoading(false);
		},
		[isLoading]
	);

	return { getMandiantReport };
}