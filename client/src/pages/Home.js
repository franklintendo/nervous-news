import React from "react";
import Reports from "../components/Reports";
import { Container } from "react-bootstrap";



function Home() {
    return(
        <div>
            <Container>
                Home content
                <Reports />
            </Container>
        </div>
    )
}

export default Home;