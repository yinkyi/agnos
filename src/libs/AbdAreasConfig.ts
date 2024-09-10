import umbilicusActiveCenter from "../assets/pics/umbilicus-active.png";
import umbilicusHighlightCenter from "../assets/pics/umbilicus-highlight.png";
import epigastriumActiveTop from "../assets/pics/epigastrium-active.png";
import epigastriumHighlightTop from "../assets/pics/epigastrium-highlight.png";
import suprapubicActiveBottom from "../assets/pics/suprapubic-active.png";
import suprapubicHighlightBottom from "../assets/pics/suprapubic-highlight.png";
import rlqActiveBottomLeft from "../assets/pics/rlq-active.png";
import rlqHighlightBottomLeft from "../assets/pics/rlq-highlight.png";
import llqActiveBottomRight from "../assets/pics/llq-active.png";
import llqHighlightBottomRight from "../assets/pics/llq-highlight.png";
import ruqActiveTopLeft from "../assets/pics/ruq-active.png";
import ruqhighlightTopLeft from "../assets/pics/ruq-highlight.png";
import luqActiveTopRight from "../assets/pics/luq-active.png";
import luqHighlightTopRight from "../assets/pics/luq-highlight.png";

export const areasConfig = [
  {
    id: "center",
    buttonPosition: "top-[53%] left-[48%] -translate-x-1/2 -translate-y-1/2",
    labelPosition: "top-0",
    labelImage: umbilicusActiveCenter,
    highlightImage: umbilicusHighlightCenter,
  },
  {
    id: "top",
    buttonPosition: "top-[36%] left-[43.5%]",
    labelPosition: "top-0",
    labelImage: epigastriumActiveTop,
    highlightImage: epigastriumHighlightTop,
  },
  {
    id: "top-left",
    buttonPosition: "top-[42%] left-[35%]",
    labelPosition: "top-6",
    labelImage: ruqActiveTopLeft,
    highlightImage: ruqhighlightTopLeft,
  },
  {
    id: "top-right",
    buttonPosition: "top-[42%] left-[52%]",
    labelPosition: "top-6",
    labelImage: luqActiveTopRight,
    highlightImage: luqHighlightTopRight,
  },
  {
    id: "bottom",
    buttonPosition: "top-[59%] left-[43.5%]",
    labelPosition: "top-3",
    labelImage: suprapubicActiveBottom,
    highlightImage: suprapubicHighlightBottom,
  },
  {
    id: "bottom-left",
    buttonPosition: "top-[53.3%] left-[35%]",
    labelPosition: "-top-[7%]",
    labelImage: rlqActiveBottomLeft,
    highlightImage: rlqHighlightBottomLeft,
  },
  {
    id: "bottom-right",
    buttonPosition: "top-[53.3%] left-[52%]",
    labelPosition: "-top-[7%]",
    labelImage: llqActiveBottomRight,
    highlightImage: llqHighlightBottomRight,
  },
];
