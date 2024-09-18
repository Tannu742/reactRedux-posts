import { useState } from "react";
import TshirtData from "../../components/tshirtData/data";

const Tshirt = () => {
    const [input, setinput] = useState('');
    const [searchData, setSearchData] = useState([]);


    const handleSrch = (e) => {
        e.preventDefault();
        const men = TshirtData.category.men.filter(item => item.title.trim().toLowerCase().includes(input.trim().toLowerCase())).map((el => ({ ...el, category: 'MEN' })));
        const women = TshirtData.category.women.filter(item => item.title.trim().toLowerCase().includes(input.trim().toLowerCase())).map((el => ({ ...el, category: 'WOMEN' })));
        const searched = [...men, ...women];
        setinput('');
        setSearchData(searched);
        console.log(searched);
    }
    return (
        <div>
            <input type="search" placeholder="search" onChange={(e) => setinput(e.target.value)} value={input} />
            <button onClick={handleSrch}>search</button>
            <div className="row srhCategory">
                <ol>
                    {
                        searchData.map((item) => {
                            return(
                                <li key={item.id}>{item.title} <span>{item.category}</span></li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    );
}

export default Tshirt;
