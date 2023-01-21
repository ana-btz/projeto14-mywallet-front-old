import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const FieldWithoutContent = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    /* height: 70%; */
    min-height: 446px;
    padding: 0 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`
export const FieldWithContent = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 446px;
    padding: 20px 15px 10px 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`
export const RecordsContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`
export const TotalContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    span {
        color: #03AC00; /* vermelho: #C70000 */
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
    }
`
export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
        background-color: #A328D6;
        width: 156px;
        height: 114px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        p {
            width: 64px;
            display: flex;
            flex-wrap: wrap;
            font-size: 17px;
            font-weight: 700;
            line-height: 20px;
            text-align: left;
        }
        ion-icon {
            font-size: 25px;
        }
    }
`