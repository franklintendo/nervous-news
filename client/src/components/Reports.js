import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Reports() {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        getReports();
    }, []);

    function getReports() {
        API.getReports()
        .then((res) => {
            console.log(res.data.articles);
            setReports(res.data.articles);
        })
        .catch((err) => console.log(err));
    }

    function sayReportTitle(title) {
        const to_speak = new SpeechSynthesisUtterance(title);
        window.speechSynthesis.speak(to_speak);
    }

    function renderReportLinks(reports) {
        return reports.map((report, index) => {
            return <div key={index}><img src={report.urlToImage} style={{width: "250px", height: "auto"}} /> <a href={report.url}>{report.title}</a> <span onClick={() => sayReportTitle(report.title)}>Play Speech</span>  </div>
        });
    }

    return(
        <div>
            {/* Report links go here */}
            { renderReportLinks(reports) }
        </div>
    )
}

export default Reports;