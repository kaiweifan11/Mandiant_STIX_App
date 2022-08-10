import { useEffect } from 'react';
import DataTable from './components/DataTable';
import useGetReports from './hooks/useGetReports';

const App = () => {
  const {getMandiantReport, reportData} = useGetReports();
  const data = [
    {
      key: '1',
      name: 'John Brown',
     
    },
    {
      key: '2',
      name: 'Jim Green',
    },
    
  ];

  useEffect(() => {
    if(reportData === null) getMandiantReport();
    else console.log('reportData', JSON.stringify(reportData))
  }, [getMandiantReport, reportData]);


  return (
    <div>
      <div>Hello World</div>
      <DataTable data={reportData}/>
    </div>
    
  );
}

export default App;
