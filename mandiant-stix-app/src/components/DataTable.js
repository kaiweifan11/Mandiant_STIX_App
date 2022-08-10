import { Table } from 'antd';
import 'antd/dist/antd.css';
import columns from './DataTableColumns';

const DataTable = (data) => {
    const dataSource = data === null || !data.data ? [] : data.data;
    console.log('dataSource', typeof dataSource)

    if(data === null || !data.data){

    }

    return <Table columns={columns} dataSource={dataSource}/>
};

export default DataTable;