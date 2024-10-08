import { useEffect } from 'react'
import { data } from '../components/clientData'
import stl from '../css/TenderTable.module.css'
import { Link, useNavigate } from 'react-router-dom'

const TenderTable = ({ status }) => {

    const navigate = useNavigate()
    console.log("printing from child componet :", status)

    const filterData = () => {
        console.log("trigger")
        if (status === "all") return tenderData;
        return tenderData.filter(item => item.status === status)

    }

    const selectedFilterData = filterData()

    return (
        <>
            <div className={stl.dataContainer}>
                <div className={stl.tableContainer}>
                    <table className={stl.theding}>
                        <thead >
                            <tr>
                                <th className={stl.theding}>Tender ID</th>
                                <th className={stl.theding}>Tilte</th>
                                <th className={stl.theding}>Issued Date</th>
                                <th className={stl.theding}>Authorise Person</th>

                                <th className={stl.theding}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                selectedFilterData?.map((item, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{item.tender_id}</td>
                                                <td>{item.tilte}</td>
                                                <td>{item.issued_date}</td>
                                                <td>{item.authorised_person}</td>

                                                <td>
                                                    <Link to='/tender-details'>
                                                        <button className={stl.actionBtn} >View Details</button>
                                                    </Link>
                                                </td>
                                            </tr >
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}
export default TenderTable;


const tenderData = [
    {
        tender_id: 1,
        tilte: "Brief title or description of the tender",
        issued_date: '23-12-2015',
        authorised_person: 'Sahil',
        status: 'ongoing'
    },
    {
        tender_id: 2,
        tilte: "Brief title or description of the tender",
        issued_date: '25-12-2015',
        authorised_person: 'Sukesh',
        status: 'submitted'

    },
    {
        tender_id: 3,
        tilte: "Brief title or description of the tender",
        issued_date: '13-12-2015',
        authorised_person: 'Rahul',
        status: 'submitted'

    },
    {
        tender_id: 4,
        tilte: "Brief title or description of the tender",
        issued_date: '3-12-2015',
        authorised_person: 'Pravin',
        status: 'submitted'

    },
    {
        tender_id: 5,
        tilte: "Brief title or description of the tender",
        issued_date: '23-12-2015',
        authorised_person: 'Shaym',
        status: 'proposed'

    },
    {
        tender_id: 9,
        tilte: "Brief title or description of the tender",
        issued_date: '23-12-2015',
        authorised_person: 'Sunny',
        status: 'proposed'

    },
    {
        tender_id: 8,
        tilte: "Brief title or description of the tender",
        issued_date: '23-12-2015',
        authorised_person: 'JOhn',
        status: 'ongoing'

    },
    {
        tender_id: 10,
        tilte: "Brief title or description of the tender",
        issued_date: '23-12-2015',
        authorised_person: 'Dn',
        status: 'ongoing'

    },
    {
        tender_id: 11,
        tilte: "Brief title or description of the tender",
        issued_date: '23-12-2015',
        authorised_person: 'abs',
        status: 'submitted'

    }


]