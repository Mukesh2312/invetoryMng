import stl from '../css/CreateTender.module.css'
import { Link, useNavigate } from 'react-router-dom';

const CreateTender = () => {
    const navigate = useNavigate();
    const formHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return (
        <>
            <div id={stl.createClient}>
                <div className={stl.clientHead}>
                    <div className={stl.headImgcontainer}>
                        <img src="./assets/formHeadbg.jpeg" alt="form head bg" />
                    </div>
                    <h2 className={stl.heading}>
                        Create Tender
                    </h2>
                </div>

                <div className={stl.formContainer}>
                    <div className={stl.formInnercontainer}>
                        <form >
                            <div className={stl.businessDetails}>

                                <div>
                                    <label htmlFor="tid">
                                        Tender ID :
                                    </label>
                                    <input type="text" id="tid" name="tid" />
                                </div>
                                {/* <div>
                                    <label htmlFor="date">Date.</label>
                                    <input type="date" id="date" name="date" />

                                </div> */}

                                <div>
                                    <label htmlFor="tname">
                                        Tender Name
                                    </label>
                                    <input type="text" name="tname" id="tname" />
                                </div>
                                <div>
                                    <label htmlFor="title">
                                        Title
                                    </label>

                                    <input type="text" name='title' id='title' />
                                </div>
                                <div>

                                    <label htmlFor="itdate">Issue Date :</label>
                                    <input type="date" id="itdate" name="itdate" />


                                </div>
                                <div>

                                    <label htmlFor="tfdate">Tender Floating Date :</label>
                                    <input type="date" id="tftdate" name="tfdate" />


                                </div>
                                <div>
                                    <label htmlFor="tdsc">
                                        Description :
                                    </label>
                                    <textarea name="tdsc" id="tdsc" rows='6' cols='50'></textarea>
                                </div>
                                <div>
                                    <label htmlFor="bdrname">
                                        Bidder Name :
                                    </label>
                                    <input type="text" name="bdrname" id="bdrname" />
                                </div>
                                <div>
                                    <label htmlFor="ddssd">
                                        Document Download/Sale Start Date :
                                    </label>
                                    <input type="date" id="ddssd" name="ddssd" />

                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="ddsnd">
                                        Document Download/Sale End Date :
                                    </label>
                                    <input type="date" id="ddsnd" name="ddsnd" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="bssd">
                                        Bid Subbmission Start Date :
                                    </label>
                                    <input type="date" id="bssd" name="bssd" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="bsed">
                                        Bid Subbmission End Date :
                                    </label>
                                    <input type="date" id="bsed" name="bsed" />


                                </div>

                                <div className={stl.hsnContainer}>
                                    <label htmlFor="bv">
                                        Bid Validity :
                                    </label>
                                    <input type="text" id="bv" name="bv" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="pbmap">
                                        Prebid Meeting Address Portal :
                                    </label>
                                    <input type="text" id="pbmap" name="pbmap" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="tbod">

                                        Technical Bid Opening Date :
                                    </label>
                                    <input type="date" id="tbod" name="tbod" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="pow">

                                        Period Of Work :
                                    </label>
                                    <input type="text" id="pow" name="pow" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="location">

                                        Location :
                                    </label>
                                    <input type="text" id="location" name="location" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="pincode">

                                        Pincode :
                                    </label>
                                    <input type="text" id="pincode" name="pincode" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="bop">

                                        Bid Opening Place :
                                    </label>
                                    <input type="text" id="bop" name="bop" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="pc">

                                        Product Category :
                                    </label>
                                    <input type="text" id="pc" name="pc" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="now">

                                        Nature Of Work :
                                    </label>
                                    <input type="text" id="now" name="now" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="now">

                                        Nature Of Work :
                                    </label>
                                    <input type="text" id="now" name="now" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="pib">

                                        Proposals Invited By :
                                    </label>
                                    <input type="text" id="pib" name="pib" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="dooofp">

                                        Date Of Opening Of Financial Proposals :
                                    </label>
                                    <input type="date" id="dooofp" name="dooofp" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="mosp">

                                        Mode Of Submitting Proposals :
                                    </label>
                                    <input type="text" id="mosp" name="mosp" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="twebsit">

                                        Tender Website :
                                    </label>
                                    <input type="text" id="twebsit" name="twebsit" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="corpfd">

                                        Cost Of RPF document :
                                    </label>
                                    <input type="text" id="corpfd" name="corpfd" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="emd">

                                        Earnest Money Deposite :
                                    </label>
                                    <input type="text" id="emd" name="emd" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="mop">

                                        Mode Of Payment :
                                    </label>
                                    <input type="text" id="mop" name="mop" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="amount">

                                        Amount :
                                    </label>
                                    <input type="text" id="amount" name="amount" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="bank">

                                        Bank :
                                    </label>
                                    <input type="text" id="bank" name="bank" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="ps">

                                        Performance Security :
                                    </label>
                                    <input type="text" id="ps" name="ps" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="mos">

                                        Method Of Selection :
                                    </label>
                                    <input type="text" id="mos" name="mos" />


                                </div>
                                <div className={stl.hsnContainer}>
                                    <label htmlFor="objc">

                                        Objecting Charges :
                                    </label>
                                    <textarea name="objc" id="objc" rows='3' cols='50'></textarea>



                                </div>

                                <div className="tenderProductList">
                                    <h3>
                                        Tender Product List
                                    </h3>
                                    <div>
                                        <label htmlFor="sn">
                                            Stock Name :
                                        </label>
                                        <input type="text" id="sn" name="sn" />
                                    </div>
                                    <div>
                                        <label htmlFor="pdesc">
                                            Description :
                                        </label>
                                        <input type="text" id="pdesc" name="pdesc" />
                                    </div>
                                    <div>
                                        <label htmlFor="prdtq">
                                            Quantity :
                                        </label>
                                        <input type="text" id="prdtq" name="prdtq" />
                                    </div>
                                    <div>
                                        <label htmlFor="punit">
                                            Unit :
                                        </label>
                                        <input type="text" id="punit" name="punit" />
                                    </div>
                                    <div>
                                        <label htmlFor="prate">
                                            Rate :
                                        </label>
                                        <input type="text" id="prate" name="prate" />
                                    </div>
                                    <div>
                                        <label htmlFor="pbt">
                                            Project Bid Total :
                                        </label>
                                        <input type="text" id="pbt" name="pbt" />
                                    </div>
                                </div>



                            </div>

                            <div className={stl.inputFilesContainer}>
                                <h3 style={{ marginBottom: "1.5rem" }}>Required Documents</h3>

                                <div className={stl.innerInputFilecontainer}>

                                    <div>
                                        <label htmlFor="ttAthorization">
                                            Tendor Copy :
                                        </label>
                                        <input type="file" id="ttAthorization" name="ttAthorization" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="ppt">Technical Document :</label>
                                        <input type="file" id="ppt" name="ppt" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>

                                    </div>
                                    <div>
                                        <label htmlFor="coverLetter">tender Fees (Screenshot) :</label>
                                        <input type="file" id="coverLetter" name="coverLetter" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <br />
                            <br />
                            <div className={stl.inputFilesContainer}>

                                <div className={stl.innerInputFilecontainer}>

                                    <div>
                                        <label htmlFor="ttAthorization">
                                            EMD Copy :
                                        </label>
                                        <input type="file" id="ttAthorization" name="ttAthorization" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="ppt">BOQ :</label>
                                        <input type="file" id="ppt" name="ppt" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>

                                    </div>
                                    <div>
                                        <label htmlFor="coverLetter">Pricing :</label>
                                        <input type="file" id="coverLetter" name="coverLetter" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <br />
                            <br />
                            <div className={stl.inputFilesContainer}>
                                <div className={stl.innerInputFilecontainer}>

                                    <div>
                                        <label htmlFor="ttAthorization">
                                            Perfomance Guarentee :
                                        </label>
                                        <input type="file" id="ttAthorization" name="ttAthorization" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="ppt">MOU :</label>
                                        <input type="file" id="ppt" name="ppt" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>

                                    </div>
                                    <div>
                                        <label htmlFor="coverLetter">Other :</label>
                                        <input type="file" id="coverLetter" name="coverLetter" />
                                        <div>
                                            <small>
                                                Max File Size: 5 MB
                                            </small>
                                            <br />
                                            <small>
                                                Allowed file types: doc, docx, jpeg, pdf, csv
                                            </small>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* Athorised person  */}
                            <div className={stl.personContainer}>
                                <div>
                                    <label htmlFor="authmanager">Authorised Manager :</label>
                                    <input type="text" name='authmanager' id='authmanager' />
                                </div>
                                <div>
                                    <label htmlFor="authperson">Authorised Person :</label>
                                    <input type="text" name='authperson' id='authperson' />
                                </div>
                            </div>
                            {/* Athorised person  */}

                            <div className={stl.formBtnContainer}>
                                <button type="submit" onClick={formHandler}>OK</button>
                                <Link to="/">
                                    <button>Cancel</button>

                                </Link>
                            </div>
                            <div className={stl.editBtn}>
                                <button >Edit</button>
                            </div>
                        </form>
                    </div>

                </div >



            </div >

        </>
    )
}
export default CreateTender;

const mfName = ["Tata", " Honda", "sukesh", " Dell"];
const product = ["Dell", "Asus", " Lava", " Lenovo", " HP"];
const gst = ["5%", "6%", "8%"];
const mou = ["mou1", "mou3", "mou4"];