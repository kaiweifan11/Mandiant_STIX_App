import { useCallback, useState } from 'react';
import axios from 'axios';

export default function useGetReports() {
	const [reportData, setReportData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getMandiantReport = useCallback(
		async () => {
			// TODO: destructure ibxs, region, accessCategory, page, pageSize for server-side filtering
			setIsLoading(true);
			try {
				axios.get(`https://oasis-open.github.io/cti-documentation/examples/example_json/apt1.json`)
				.then(res => {
					const data = res.data;
					//this.setState({ persons });
					console.log('data', data);
					setReportData(data);
				})
			} catch (err) {
				console.log(err);
				setReportData({});
			}
			setIsLoading(false);
		},
		[]
	);

	return { getMandiantReport, reportData, isLoading };
}