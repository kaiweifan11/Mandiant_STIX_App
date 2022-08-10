import {constants} from '../constants';

export const getConstant = (key) =>{
    if(constants[key]) return constants[key];
    else return key;
}

export const getAllFilters = (data) =>{
    const nameFilters = [];
    const typeFilters = [];
    const killChainPhaseFilters = [];

    const checkExists = {
        nameFilters: [],
        typeFilters: [],
        killChainPhaseFilters: []
    }

    data.forEach((row) => {
        if(row.name && !checkExists.nameFilters.includes(row.name)){
            nameFilters.push({
                text: row.name,
                value: row.name,
            });
            
            checkExists.nameFilters.push(row.name);
        }
        
        if(row.type && !checkExists.typeFilters.includes(row.type)){
            typeFilters.push({
                text: row.type,
                value: row.type,
            });
            checkExists.typeFilters.push(row.type);
        }
        
        if(row.kill_chain_phases){
            for(let phase of row.kill_chain_phases){
                if(!checkExists.killChainPhaseFilters.includes(phase.kill_chain_name)){
                    killChainPhaseFilters.push({
                        text: phase.kill_chain_name,
                        value: phase.kill_chain_name,
                    });
                    checkExists.killChainPhaseFilters.push(phase.kill_chain_name);
                }
                if(!checkExists.killChainPhaseFilters.includes(phase.phase_name)){
                    killChainPhaseFilters.push({
                        text: phase.phase_name,
                        value: phase.phase_name,
                    });
                    checkExists.killChainPhaseFilters.push(phase.phase_name);
                }
            }
        }
    })

    return { nameFilters, typeFilters, killChainPhaseFilters };
}