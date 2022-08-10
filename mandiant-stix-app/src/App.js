import { useEffect } from 'react';
import useGetReports from './hooks/useGetReports'
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const App = () => {
  const {getMandiantReport, reportData} = useGetReports();

  useEffect(() => {
    if(reportData === {})
		getMandiantReport();
	}, [getMandiantReport, reportData]);

  return (
    <div>Hello World</div>
  );
}

export default App;
