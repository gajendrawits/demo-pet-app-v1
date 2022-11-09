import styled from "styled-components";

export const MainWrapper = styled.div`
  .pagination {
    cursor: pointer;
    /* margin-top: 6vh; */
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

export const Heading = styled.div`
  font-size: 2vw;
  font-weight: 800;
  margin-top: 1vw;
  margin-left: 1.5vw;
`;
