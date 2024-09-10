import dipActive from "../assets/pics/dip-active.png";
import dipHighlight from "../assets/pics/dip-highlight.png";
import mcpActive from "../assets/pics/mcp-active.png";
import mcpHighlight from "../assets/pics/mcp-highlight.png";
import pipActive from "../assets/pics/pip-active.png";
import pipHighlight from "../assets/pics/pip-highlight.png";

export const areasConfig = [
  {
    id: "dip",
    labelImage: dipActive,
    highlightImage: dipHighlight,
  },

  {
    id: "pip",
    labelImage: pipActive,
    highlightImage: pipHighlight,
  },
  {
    id: "mcp",
    labelImage: mcpActive,
    highlightImage: mcpHighlight,
  },
];

export const jointBtnAreaConfig = {
  pinky: [
    { top: "24%", left: "21%", type: "dip" },
    { top: "31%", left: "24%", type: "pip" },
    { top: "40%", left: "27%", type: "mcp" },
  ],
  ring: [
    { top: "13%", left: "32%", type: "dip" },
    { top: "23%", left: "33%", type: "pip" },
    { top: "37%", left: "35%", type: "mcp" },
  ],
  middle: [
    { top: "9%", left: "43%", type: "dip" },
    { top: "20%", left: "44%", type: "pip" },
    { top: "35%", left: "44%", type: "mcp" },
  ],
  index: [
    { top: "11%", left: "55%", type: "dip" },
    { top: "21%", left: "55%", type: "pip" },
    { top: "35%", left: "54%", type: "mcp" },
  ],
  thumb: [
    { top: "40%", left: "75%", type: "pip" },
    { top: "52%", left: "67%", type: "mcp" },
  ],
};
