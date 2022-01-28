import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
    font-family: cursive;
    font-size: 22px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;

    width: 200px;
    height: 20px;

    text-align: center;
    font-size: 18px;
    border: none;
    border-radius: 20px;
`;

export const SubmitBtn = styled.button`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 8px;
    font-family: cursive;
    font-size: 18px;

    border: none;
    border-radius: 10px;
    cursor: pointer;

    background: #3f87a6;
`;
    