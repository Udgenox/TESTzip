import './App.css'
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
            <div>TITLE</div>
            <h1>NEW string</h1>
            <h2>Coomit</h2>
            <h3>23123</h3>

        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;