import { useState,useEffect } from 'react';
import { AutoComplete } from 'antd';
import {getAllFilters} from '../utils/utils';

const DataTableSearch = (props) => {
    const {data, searchByKeyword} = props;
    const [options, setOptions] = useState([]);
    const [allKeyWords, setAllKeyWords] = useState([]);

    useEffect(() => {
        // Get report data by calling the hook
        if(data.length > 0){
            setAllKeyWords(getAllKeywords(data));
        } 
      }, [data]);

    const getAllKeywords = (data) =>{
        const { nameFilters, typeFilters, killChainPhaseFilters } = getAllFilters(data);
        return [...nameFilters, ...typeFilters, ...killChainPhaseFilters];
    }
    
    const getOptions = (str) =>{
        return allKeyWords.filter((keyword)=> keyword.value.toLowerCase().indexOf(str.toLowerCase()) > -1)
    }

    const onSearch = (searchText) => {
        setOptions(
            !searchText ? [] : getOptions(searchText),
        );
    };
  
    const onSelect = (keyword) => {
      searchByKeyword(keyword);
    };

    return(
        <AutoComplete
            options={options}
            style={{
                width: 200,
            }}
            onSelect={onSelect}
            onSearch={onSearch}
            onClear={()=>onSelect('')}
            placeholder="Search"
            allowClear={true}
        />
    )
}

export default DataTableSearch;