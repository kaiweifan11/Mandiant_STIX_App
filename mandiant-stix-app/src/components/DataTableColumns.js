import {getAllFilters} from '../utils/utils';

const renderKillPhase = (kill_chain_phases) =>{
    return kill_chain_phases.map((phase) =>{
        return(
            <>
                <p>Kill Chain Name: {phase.kill_chain_name}</p>
                <p>Phase Name: {phase.phase_name}</p>
            </>
        )
    })
}

const getFilters = (data) =>{
    return getAllFilters(data);
}

const getColumns = (data) =>{
    const { nameFilters, typeFilters, killChainPhaseFilters} = getFilters(data)
    const columns = [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (text) => <div key='type'>{text}</div>,
            filters: typeFilters,
            onFilter: (value, record) => {
                if(record.type){
                    return record.type === value;
                }
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <div key='name'>{text}</div>,
            filters: nameFilters,
            onFilter: (value, record) => {
                if(record.name){
                    return record.name === value;
                }
            },
            //sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Kill Chain Phases',
            dataIndex: 'kill_chain_phases',
            key: 'kill_chain_phases',
            render: (kill_chain_phases) => {
                if(kill_chain_phases !== undefined && kill_chain_phases.length > 0){
                    return(
                        <div key={'kill_chain_phases'}>
                            {renderKillPhase(kill_chain_phases)}
                            
                        </div>
                    )
                }
                return null;        
            },
            filters: killChainPhaseFilters,
            onFilter: (value, record) => {
                if(record.kill_chain_phases){
                    for(let phase of record.kill_chain_phases){
                        if(phase.kill_chain_name === value || phase.phase_name === value) return true;
                    }
                }
                
            },
        },
    ];

    return columns;
}



export default getColumns;
