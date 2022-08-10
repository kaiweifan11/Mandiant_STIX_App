import { useCallback, useState } from 'react';
import axios from 'axios';

export default function useGetReports() {
	const [reportData, setReportData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getMandiantReport = useCallback(
		async () => {
			setIsLoading(true);
			try {
				axios.get(`https://oasis-open.github.io/cti-documentation/examples/example_json/apt1.json`)
				.then(res => {
					const data = res.data;
					if(data){
						setReportData(data.objects);
					}
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