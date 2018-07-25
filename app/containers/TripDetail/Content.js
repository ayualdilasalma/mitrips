import styled from 'styled-components';
import { Row } from 'reactstrap';

const Content = styled(Row)`
  padding-top: 20px;
  padding-bottom: 20px;

  h1 {
    font-size: 4.5rem;
  }

  h5 {
    font-size: 2.2rem;
  }

  h5 > span {
    color: purple;
  }

  img {
    max-width: 100%;
  }

  .button-container {
    padding: 20px;
    text-align: center;
  }

  .button-container .btn-join {
    padding: 15px;
    border-radius: 40px;
    width: 250px;
    background-color: #22b7a2;
    text-transform: capitalize;
    color: white;
    margin: 5px;
    font-size: 2.2rem;
  }

  .button-container h6 {
    font-size: 1.7rem;
    color: #736b6b;
  }

  .timeline-container {
    padding-top: 10px;
    background-color: #61f1d6;
  }

  .participant-container {
    padding-top: 10px;
  }

  .participant-container img {
    max-width: 10%;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export default Content;
