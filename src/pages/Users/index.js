import React, { useDeferredValue, useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';
import { PER_PAGE_RECORD } from '../../constants';

const tbodyData = [{
    id: 1, tds: ['12 Angry Men', 'Sidney Lumet', '1957']
}, {
    id: 2, tds: ['A Separation', 'Asghar Farhadi', '2011']
}, {
    id: 3, tds: ['Alice in Wonderland', 'Tim Burton', '2010']
}, {
    id: 4, tds: ['Alice', 'Frank Marshall', '1993']
}, {
    id: 5, tds: ['All Quiet on the Western Front', 'Lewis Milestone', '1930']
}, {
    id: 6, tds: ['American Beauty', 'Sam Mendes', '1999']
}, {
    id: 7, tds: ['American Gangster', 'Ridley Scott', '2007']
}, {
    id: 8, tds: ['American History X', 'Tony Kaye', '1998']
}, {
    id: 9, tds: ['Apocalypto', 'Mel Gibson', '2006']
}, {
    id: 10, tds: ['Beetlejuice', 'Tim Burton', '1988']
}, {
    id: 11, tds: ['Before Midnight', 'Richard Linklater', '2013']
}, {
    id: 12, tds: ['Before Sunrise', 'Richard Linklater', '1995']
}, {
    id: 13, tds: ['Before Sunset', 'Richard Linklater', '2004']
}, {
    id: 14, tds: ['Big Nothing', 'Jean-Baptiste Andrea', '2006']
}, {
    id: 15, tds: ['Birdman or (The Unexpected Virtue of Ignoran', 'Alejandro G. Iñárritu', '2014']
}, {
    id: 16, tds: ['Black Swan', 'Darren Aronofsky', '2010']
}, {
    id: 17, tds: ['Boyhood', 'Richard Linklater', '2014']
}, {
    id: 18, tds: ['Calvary', 'john Michael McDonagh', '2014']
}, {
    id: 19, tds: ['Casablanca', 'Michael Curtiz', '1942']
}, {
    id: 20, tds: ['Casino', 'Martin Scorsese', '1995']
}, {
    id: 21, tds: ['Casino Royale', 'Martin Campbell', '2006']
}, {
    id: 22, tds: ['Casino', 'Martin', '2006']
}, {
    id: 23, tds: ['Catch Me If You Can', 'Steven Spielberg', '2002']
}, {
    id: 24, tds: ['Chasing Amy', 'Kevin Smith', '1997']
}, {
    id: 25, tds: ['Chinatown', 'Roman Polanski', '1974']
}, {
    id: 26, tds: ['Chocolat', 'Lasse Hallström', '2000']
}, {
    id: 27, tds: ['City of God', 'Fernando Meirelles, Kátia Lund', '2002']
}, {
    id: 28, tds: ['Cloud Atlas', 'Tom Tykwer, Lana Wachowski, Lilly Wachowski', '2012']
}, {
    id: 29, tds: ['Corpse Bride', 'Tim Burton, Mike Johnson', '2005']
}, {
    id: 30, tds: ['Crash', 'Paul Haggis', '2004']
}, {
    id: 31, tds: ['Crocodile Dundee', 'peter Faiman', '1986']
}, {
    id: 32, tds: ['Dallas Buyers Club', 'jean-Marc-Valics', '2013']
}, {
    id: 33, tds: ['Das Bhoot', 'WolfGang Petersen', '1981']
}, {
    id: 34, tds: ['Despicable Me', 'Pierre Coffin, Chris Renaud', '2010']
}, {
    id: 35, tds: ['Despicable Me 2', 'Pierre Coffin, Chris Renaud', '2013']
}, {
    id: 36, tds: ['Django Unchained', 'Pierre Coffin, Chris Renaud', '2012']
}, {
    id: 37, tds: ['Downfall', 'Oliver Hirschbiegel', '2004']
}, {
    id: 38, tds: ['Ex Machina', 'Alex Garland', '2015']
}, {
    id: 39, tds: ['Flight', 'Robert Zemeckis', '2012']
}, {
    id: 40, tds: ['Forrest Gump', 'Robert Zemeckis', '1994']
}];

const theadData = [
    {
        id: 1, text: 'Title'
    }, {
        id: 2, text: 'Director'
    }, {
        id: 3, text: 'Year'
    }
];

const Users = () => {
    const [perPage, setPerPage] = useState(PER_PAGE_RECORD);
    const [pages, setPages] = useState('');
    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState(tbodyData.slice(0, perPage));
    const [search, setSearch] = useState('');
    const deferredSearch = useDeferredValue(search);

    const handlePageChange = (pageNo) => {
        let newData = tbodyData.slice(0, perPage);
        if (pageNo > 1) {
            const end = perPage * pageNo; // PP 5 * 2 pageNo = 10;
            const start = end - perPage; // 10 - 5 = 5;
            console.log(start, end);
            newData = tbodyData.slice(start, end);
        }
        console.log({ newData });
        setData(newData);
        console.log(pageNo, '== pageNo== ');
        setPageNo(pageNo);
    }

    const selectPages = ({ target: { value } }) => {
        setPerPage(value);
        setData(tbodyData.splice(0, value));
        // console.log(value);
    }
    const handleInput = ({ target: { value } }) => setSearch(value);

    const handleSearchData = (e) => {
        e.preventDefault();
        const newRows = tbodyData.filter((item) => item.tds.join('').split(' ').join('').toLowerCase().includes(deferredSearch.trim().toLowerCase()));
        setData(newRows);
        console.log({ newRows });
    }

    const handleSort = () => {
        const mainData = data.map(({ id, tds }) => {
            return { id, title: tds[0] };
        })
        // console.log({mainData});
        const direction = 'DESCENDING';
        const arr = mainData.sort((a, b) => {
            let sort;
            if (direction === 'ASCENDING') {
                sort = a.title.trim().toLowerCase() > b.title.trim().toLowerCase();
            }
            if (direction === 'DESCENDING') {
                sort = a.title.trim().toLowerCase() < b.title.trim().toLowerCase();
            }
            return sort ? 1 : -1;
        })
        setData(arr);
        // console.log(arr);
    }
    useEffect(() => {
        // const arr = data;
        // const arr = [
        //     { id: 1, title: '12 Angry Men' },
        //     { id: 2, title: 'A Separation' },
        //     { id: 3, title: 'Alice in Wonderland' },
        //     { id: 4, title: 'Alice' },
        //     { id: 5, title: 'B All Quiet on the Western Front' }
        // ];
        // const direction = 'DSCENDING';
        // const a = arr.sort((a, b) => {
        //     let sort;
        //     if (direction === 'ASCENDING') {
        //         sort = a.title.trim().toLowerCase() > b.title.trim().toLowerCase();
        //     }
        //     if (direction === 'DSCENDING') {
        //         sort = a.title.trim().toLowerCase() < b.title.trim().toLowerCase();
        //     }
        //     return sort ? 1 : -1;
        // });
        // console.log(a);
        const totalRecords = tbodyData.length;
        setPages(totalRecords / perPage);
    }, [totalRecords]);

    return (
        <div>
            <h1>Users</h1>
            <DataTable
                handlePageChange={handlePageChange}
                noOfPages={`${pageNo} of ${pages}`}
                tbody={data}
                pageNo={pageNo}
                thead={theadData}
                perPageValue={perPage}
                totalRecords={tbodyData.length}
                handleSelectedPage={selectPages}
                handleSearchData={handleSearchData}
                handleInput={handleInput}
                handleSort={handleSort}
            />
        </div>
    );
}

export default Users;
