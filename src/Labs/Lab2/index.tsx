import BackgroundColors from "./Backgroundcolors";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors"
import "./index.css"
import Margins from "./Margins";
import Padding from "./Padding";
import Positions from "./Positions";
import Zindex from "./Zindex";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <BackgroundColors />
      <ForegroundColors />
      <Borders />
      <Padding />
      <Margins />
      <Corners />
      <Dimensions />
      <Positions />
      <Zindex />
      <Float />
      <h3>Styling with the STYLE attribute</h3>
      <p id="wd-lab2-style-attribute">
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
    </div>
);}
