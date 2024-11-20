import styled from "styled-components";

const Option = styled.option``;

export const fontSizes = [
  {
    value: "8px",
    label: "x-Small",
    component: styled(Option)`
      font-size: 8px;
    `,
  },
  {
    value: "10px",
    label: "Small",
    component: styled(Option)`
      font-size: 10px;
    `,
  },
  {
    value: "12px",
    label: "Medium (default)",
    component: styled(Option)`
      font-size: 12px;
    `,
  },
  {
    value: "14px",
    label: "Large",
    component: styled(Option)`
      font-size: 14px;
    `,
  },
  {
    value: "16px",
    label: "x-Large",
    component: styled(Option)`
      font-size: 16px;
    `,
  },
];

export const textColors = [
  {
    value: "white",
    label: "White",
    component: styled(Option)`
      color: black;
      background-color: white;
    `,
  },
  {
    value: "#F1E9D2",
    label: "Paper (bkgd default)",
    component: styled(Option)`
      color: black;
      background-color: #f1e9d2;
    `,
  },
  {
    value: "pink",
    label: "Pink",
    component: styled(Option)`
      color: black;
      background-color: pink;
    `,
  },
  {
    value: "gold",
    label: "Gold",
    component: styled(Option)`
      color: black;
      background-color: gold;
    `,
  },
  {
    value: "cyan",
    label: "Cyan",
    component: styled(Option)`
      color: black;
      background-color: cyan;
    `,
  },
  {
    value: "greenyellow",
    label: "Neon",
    component: styled(Option)`
      color: black;
      background-color: greenyellow;
    `,
  },
  {
    value: "#315BA1",
    label: "Azure (text default)",
    component: styled(Option)`
      color: white;
      background-color: #315ba1;
    `,
  },
  {
    value: "blue",
    label: "Blue",
    component: styled(Option)`
      color: white;
      background-color: blue;
    `,
  },
  {
    value: "navy",
    label: "Navy",
    component: styled(Option)`
      color: white;
      background-color: navy;
    `,
  },
  {
    value: "purple",
    label: "Purple",
    component: styled(Option)`
      color: white;
      background-color: purple;
    `,
  },
  {
    value: "darkgreen",
    label: "Green",
    component: styled(Option)`
      color: white;
      background-color: darkgreen;
    `,
  },
  {
    value: "black",
    label: "Black",
    component: styled(Option)`
      color: white;
      background-color: black;
    `,
  },
];

export const fontFamilies = [
  {
    value: "spyagency",
    label: "Spy Agency",
    component: styled(Option)`
      font-family: spyagency;
      font-size: 0.7em;
    `,
  },
  {
    value: "champion",
    label: "Champion",
    component: styled(Option)`
      font-family: champion;
    `,
  },
  {
    value: "monospace",
    label: "Monospace",
    component: styled(Option)`
      font-family: monospace;
    `,
  },
  {
    value: "open-sans",
    label: "Open Sans (default)",
    component: styled(Option)`
      font-family: open-sans;
    `,
  },
  {
    value: "courgette",
    label: "Courgette",
    component: styled(Option)`
      font-family: courgette;
    `,
  },
  {
    value: "josefin-sans",
    label: "Josefin Sans",
    component: styled(Option)`
      font-family: josefin-sans;
    `,
  },
];
