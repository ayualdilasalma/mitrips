import styled from 'styled-components';
import { Row } from 'reactstrap';

const Content = styled(Row)`
  padding: 20px;
  form {
    width: 100%;
  }

  div.form-check {
    text-align: center;
    margin-top: 20px;
  }

  .btn-group-activity {
    margin-top: 10px;
  }

  .btn-group-activity button {
    margin-right: 5px;
  }
`;

export default Content;
