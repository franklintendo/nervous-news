import React from "react";
import { Col } from "react-bootstrap";


function ReportLink(props) {

    return(
        <Col>
            {/* <img src={report.urlToImage} style={{width: "250px", height: "auto"}} /> <a href={report.url}>{report.title}</a> <span onClick={() => sayReportTitle(report.title)}>Play Speech</span>   */}
            <img src={props.image} style={{width: "250px", height: "auto"}} /> <p>{props.title}</p> 
        </Col>
    )
}

export default ReportLink;