import styled from 'styled-components';

const Content = styled.header`
  text-align: center;
  background-color: black;
  color: white;
  text-transform: uppercase;

  .top-header {
    display: inline-flex;
    margin: 5px 0px;
  }

  .top-header .navbar-brand {
    flex-grow: 1;
  }

  a {
    font-size: 1.2rem;
  }

  .navbar-collapse {
    flex-grow: 0;
  }

  .user-container {
    max-height: 50px;
  }

  .user-container > img {
    max-height: inherit;
    border-radius: 50%;
  }

  .search-container {
    color: black;
    margin-right: 15px;
  }

  .search-container > span {
    margin: 0 10px;
  }
`;

export default Content;
