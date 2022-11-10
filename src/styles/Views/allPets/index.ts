import styled from "styled-components";

export const MainWrapper = styled.div`
  .pagination {
    cursor: pointer;
    display: flex;
    justify-content: center;
    list-style: none;
    padding-top: 4vw;
  }

  .pagination a {
    padding: 0.5vw;
    color: white;
    font-weight: 900;
    background-color: #29abe2;
    margin: 0.5vw;
  }

  .pagination__link--active a {
    border: 1px solid green;
    border-radius: 10%;
    color: black;
    background-color: #e7e9eb;
  }

  .pagination__link--disabled a {
    color: rgb(198, 197, 202);
  }
`;
export const Wrapper = styled.div``;

export const Heading = styled.div`
  margin-left: 1.5vw;
  font-size: 1.5vw;
  font-weight: 900;
  margin-top: 1vw;
`;
export const SelectBox = styled.select`
  margin-left: 1.5vw;
  padding: 0.2vw 0;
  width: 12.5vw;
  font-size: 1vw;
  color: #474747;
  border: 2px solid #29abe2;
  cursor: pointer;
  text-transform: capitalize;
`;
export const SelectOptions = styled.option``;

export const Dummy = styled.div`
  display: flex;
  width: 20vw;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid red;
`;
