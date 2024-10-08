import { useState } from "react";
import SearchCom from "../components/SearchCom";
import NewFilterIcon from '../components/NewFilterIcon'
import stl from '../css/TenderManagement.module.css';
import TenderTable from "../components/TenderTable";
import { useNavigate } from "react-router-dom";

const TenderManagement = () => {
    const [status, setStatus] = useState("all")
    const navigate = useNavigate();
    const con = (e) => {

        setStatus(e.target.value)

    }
    // console.log("this is status :" + status)
    return (
        <>

            <div id={stl.tenderMng}>
                <div className={stl.tenderHeading}>
                    <h2>Tender Management</h2>
                    <div className={stl.createTenderBtnContainer}>
                        <button onClick={() => (navigate("/create-tender"))}>Create</button>
                    </div>
                </div>

                <div className={stl.tenderMngHeader}>

                    <div className={stl.searchInputecontainer}>

                        <SearchCom />
                        <div>
                            <NewFilterIcon />

                        </div>

                    </div>
                    <div className={stl.selectStatusContainer}>
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status" onChange={con}>
                            <option value="all">All</option>
                            <option value="submitted">Submitted</option>
                            <option value="ongoing">On Going</option>
                            <option value="proposed">Proposed</option>

                        </select>
                    </div>
                </div>

                <div className="tenderTableContainer">
                    <TenderTable status={status} />
                </div>
            </div>
        </>
    )
}

export default TenderManagement;