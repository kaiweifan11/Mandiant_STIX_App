import { useEffect } from 'react';
import DataTable from './components/DataTable';
import useGetReports from './hooks/useGetReports';
import './App.css';

const App = () => {
  const {getMandiantReport, reportData} = useGetReports();

  useEffect(() => {
    // Get report data by calling the hook
    if(reportData === null) getMandiantReport();
  }, [getMandiantReport, reportData]);

  return (
    <div className='app'>
      <DataTable data={reportData}/>
    </div>
    
  );
}

export default App;
