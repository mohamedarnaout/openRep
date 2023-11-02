import { useState } from "react";
function Progress() {
  const [width, setWidth] = useState(40);
  return (
    <div>
      <input
        type="number"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />
      <div className="outer">
        <div className="inner" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

export default Progress;
