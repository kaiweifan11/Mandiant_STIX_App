import { useEffect, useState } from 'react';
import { Table, Drawer, Typography } from 'antd';
import 'antd/dist/antd.css';
import getColumns from './DataTableColumns';
import DataTableSearch from './DataTableSearch';
import './DataTable.css';
import {getConstant} from '../utils/utils';

const { Title } = Typography;

const DataTable = (props) => {
    const {data} = props;
    const dataSource = data === null ? [] : data;
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [drawerData, setDrawerData] = useState([]);
    const [filteredData, setFilteredData] = useState(dataSource);

    useEffect(() => {
        // Get report data by calling the hook
        if(dataSource !== null) setFilteredData(dataSource);
      }, [dataSource]);

    const showDrawer = () => {
        setDrawerVisible(true);
    };
  
    const onClose = () => {
        setDrawerVisible(false);
    };

    const onRowClick = (record, rowIndex) => {
        setDrawerData(record);
        showDrawer();
    }

    const searchByKeyword = (searchKey) =>{
        if(searchKey === ''){
            setFilteredData(data)
            return;
        }
        const temp = data.filter((row)=> {
            if(row.name === searchKey || row.type === searchKey) return true;
            if(row.kill_chain_phases){
                for(let phase of row.kill_chain_phases){
                    if(phase.kill_chain_name === searchKey || phase.phase_name === searchKey) return true;
                }
            }
            return false;
        });
        setFilteredData(temp);
    }

    const renderKillPhase = (kill_chain_phases) =>{
        return kill_chain_phases.map((phase) =>{
            return(
                <>
                    <p>{getConstant('kill_chain_name')}: {phase.kill_chain_name}</p>
                    <p>{getConstant('phase_name')}: {phase.phase_name}</p>
                </>
            )
        })
    }

    return(
        <div key='data-table'>
            <Title level={2}>Mandiant Report on APT1</Title>
            <DataTableSearch data={dataSource} searchByKeyword={searchByKeyword}/>
            <Title className='second-title' level={5}>Please use the column headers to filter the data or tap on the rows to view details</Title>
            <Table
                columns={getColumns(filteredData)}
                dataSource={filteredData}
                rowClassName={'mouse-over'}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => { onRowClick(record, rowIndex) },
                    };
                }}
            />

            <Drawer title="Details" placement="right" onClose={onClose} visible={drawerVisible} width={'40%'}>
                {Object.keys(drawerData).map((key)=>{
                    console.log('key', key)
                    console.log('drawerData[key]', drawerData[key])
                    if(key === 'kill_chain_phases'){
                        return(
                            renderKillPhase(drawerData[key])
                        )
                    }
                    return (
                        <p>{getConstant(key)}: {drawerData[key]}</p>
                    )
                })}
            </Drawer>
        </div>
    )
    

};

export default DataTable;