import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataTable = ({
    thead = [],
    tbody = [],
    noOfPages = '',
    handlePageChange,
    pageNo,
    handleSelectedPage,
    perPageValue,
    totalRecords,
    handleSearchData,
    handleInput,
    handleSort
}) => {
    
    return (
        <div className="DataType">
            <h2 className="px-10">Movie List</h2>
            <form onSubmit={handleSearchData}>
                <input type="text" placeholder="search" onChange={handleInput} />
                <input type="submit" placeholder="search" />
            </form>
            <table border={0} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        {
                            thead.map((th) => {
                                return <th key={th.id}>
                                    <button onClick={handleSort} className="texthead">{th.text}</button>
                                </th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tbody.map((tr) => {
                            return <tr key={tr.id}>
                                {
                                    tr.tds.map(td => <td key={td}>{td}</td>)
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className="row DataTableRow justify-content-right align-items-center">
                <div className="mx-10">
                    <span>Rows Per Page:</span>
                    <select value={perPageValue} onChange={handleSelectedPage}>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                    </select>
                </div>
                <p className="px-10">{noOfPages}</p>
                <button onClick={() => handlePageChange(--pageNo)} className="Px-10" disabled={pageNo === 1 ? true : false}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button onClick={() => handlePageChange(++pageNo)} className="Px-10" disabled={pageNo * perPageValue === totalRecords ? true : false}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>
    );
}

// DataTable.propTypes = {
//     handleNext: PropTypes.func.isRequired,
//     handlePrev: PropTypes.func.isRequired,
//     noOfPages: PropTypes.string,
//     tbody: PropTypes.shape([
//         {
//             id: PropTypes.number,
//             tds: PropTypes.arrayOf(PropTypes.string)
//         }
//     ]),
//     thead: PropTypes.shape([
//         {
//             id: PropTypes.number,
//             text: PropTypes.string
//         }
//     ]),
// }

export default DataTable;
