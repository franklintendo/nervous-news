import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { LOADING, SET_REPORTS } from "../utils/actions";

function Reports() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        getReports();
    }, []);

    function getReports() {
        API.getReports()
        .then((res) => {

            // Create array that filters out articles that don't have an accompanying image
            const reports = res.data.articles.filter(article => {
                if (article.urlToImage !== null) {
                    return article;
                }
            });

            dispatch({
                type: SET_REPORTS,
                reports: reports,
            });
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
            { renderReportLinks(state.reports) }
        </div>
    )
}

export default Reports;