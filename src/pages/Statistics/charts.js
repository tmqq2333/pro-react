import styled from 'styled-components';
const ChartsCss = styled.div`
  /* .echarts-editor { */
    height: 100%;
    display: flex;
    flex-direction: row;

    .option-editor {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 10px;

      textarea {
        flex: 1;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: none;
        font-family: monospace;
      }
    }

    .chart-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background-color: #f6f6f6;
      border: 1px solid #ccc;
      border-radius: 5px;

      .react-echarts {
        height: 100%;
        width: 100%;
      }
    }
`;
export { ChartsCss };
