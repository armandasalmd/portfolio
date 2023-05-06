import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
  }

  .desc {
    margin-bottom: 7rem;
    font-size: 2rem;
    text-align: center;
    color: #999999;
  }
  
  h2{
    margin-bottom: 1rem;
    text-align: center;
    font-size: 4rem;
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }

    margin-left: -32px;
    margin-right: -32px;
  }
`;