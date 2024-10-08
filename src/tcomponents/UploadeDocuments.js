import { useState } from "react";
import BackIcon from "./BackIcon";
import stl from '../css/UploadeDocuments.module.css';
import EyeIcon from "./EyeIcon";
import DownloadIcon from "./DownloadIcon";
import { Link, useNavigate } from "react-router-dom";

const UploadedDocumets = () => {

    const [isPopUp, seIsPopUp] = useState(false);
    const [img, setImg] = useState("./assets/doc1.png");

    const popUpHandler = (imgUrl) => {
        seIsPopUp(!isPopUp)
        setImg(imgUrl)
        console.log("jsdh")
    }

    // const downloadImg = () => {
    //     const link = document.createElement('a');
    //     link.href = img;
    //     link.setAttribute('download', { img });
    //     document.body.appendChild(link);
    //     link.click();
    //     document.parentNode.removeChild(Link)

    // }

    const navigate = useNavigate()

    return (
        <>
            {/* <center><h2>Uploaded Documents</h2></center> */}
            <div id={stl.uploadedDocument}>
                <div className={stl.backBtnContainer}>
                    <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
                        <BackIcon />

                    </div>
                    <h2>Uploaded Documets</h2>

                </div>
                <div className={stl.documentsContainer}>

                    {/* <div className={stl.documentInnerContainer}>

                        <strong>Name Of The Documents</strong>
                        <div className={stl.imgContainer}>
                            <img src="./assets/doc1.png" alt="uploaded Documents" />
                        </div>
                    </div> */}

                    {
                        imges.map((item, index) => {
                            return (
                                <div className={stl.documentInnerContainer} key={index}>

                                    <strong>{item.name}</strong>
                                    <div className={stl.imgContainer}>
                                        <img src={item.url} alt={item.name} />
                                        <div className={stl.documentActionBtn}>
                                            <div onClick={() => popUpHandler(item.url)}>
                                                <EyeIcon />
                                            </div>
                                            <div >

                                                <Link to={item.url} download>
                                                    <DownloadIcon />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            {
                isPopUp && <div className={stl.imgPopUp}>
                    <div>
                        <button onClick={popUpHandler}>close</button>
                    </div>
                    <div className={stl.popImgContainer}>
                        <img src={img} alt="pricing" />

                    </div>
                </div>
            }

        </>
    )
}

export default UploadedDocumets;

const imges = [
    {
        url: './assets/doc1.png',
        name: 'Tender Copy'
    },
    {
        url: './assets/tenderCoduments.png',
        name: 'Technical Document   '
    },
    {
        url: './assets/payment.png',
        name: 'Tender Fees'
    },
    {
        url: './assets/medical.png',
        name: 'EMD Copy'
    },
    {
        url: './assets/boq.png',
        name: 'BOQ'
    },
    {
        url: './assets/pricing.png',
        name: 'Pricing'
    },
    {
        url: './assets/performance.png',
        name: 'Performance Guarentee'
    },
    {
        url: './assets/MOU.png',
        name: 'MOU'
    }
]