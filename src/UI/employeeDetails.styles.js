
// import styled from 'styled-components';

// export const MainContainer = styled.div`
//     display: flex;
//     justify-content :  center;
//     align-items : center;
//     width: 100%;
//     height :100%;
// `;

// export const DataContainer = styled.div`
//     width: 100%;
//     height: 100vh;
//     margin:20px;
//     border-radius:10px;
//     background-color: aliceblue;
// `;

// export const DataRow = styled.div`
//     display : flex;
//     justify-content : space-between;
//     align-items : center;
//     gap : 10px;
//     padding:10px;
//     background-color: lightblue;
// `;

// export const RowContent = styled.div`
//     display : flex;
//     justify-content : center;
//     align-items : center;
//     margin:5px;
//     border: 2px solid blue;
// `;

// export const RowValue = styled.span`
//     // background-color: ;

// `;


import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

export const DataContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 20px;
    border-radius: 10px;
    background-color: aliceblue;
    overflow-x: auto;
`;

export const DataRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: ${props => props.header ? 'darkblue' : 'lightblue'};
    color: ${props => props.header ? 'white' : 'black'};
    font-weight: ${props => props.header ? 'bold' : 'normal'};
    border-bottom: 1px solid blue;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const RowContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 10px;
    border: 2px solid blue;
    border-radius: 5px;
    text-align: center;
`;

export const RowValue = styled.span`
    word-break: break-word;
`;

export const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 1.5em;
    color: blue;
`;
