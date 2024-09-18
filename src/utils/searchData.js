import { useDeferredValue, useEffect, useState } from "react";

const SearchData = ({ mainData = [], handleFilterData, keyName }) => {
    const [search, setSearch] = useState('');
    const deferredSearch = useDeferredValue(search);

    const handleSearchInput = ({ target: { value } }) => {
        setSearch(value);
    }
    useEffect(() => {
        const searched = mainData.filter((item) => String(item[keyName]).trim().toLowerCase().includes(deferredSearch.trim().toLowerCase()));
        handleFilterData(searched);
    }, [deferredSearch, mainData]);

    return 
};
export default SearchData;