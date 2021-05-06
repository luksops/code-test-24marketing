import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
  background: #191920;
  -webkit-font-smoothing: antialiased;
}
  #root {
      max-width: 1020px;
      min-height: 70vh;
      margin: 0 auto;
      padding: 50px 0px;
      display: flex;

      align-items: center;
      justify-content: center;

    }
`;
