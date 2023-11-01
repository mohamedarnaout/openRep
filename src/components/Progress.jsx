function Progress(props) {
  return (
    <div>
      <input
        type="number"
        value={props.width}
        onChange={(e) => {
          props.setWidth(e.target.value);
        }}
      />
      <div className="outer">
        <div className="inner" style={{ width: `${props.width}%` }}></div>
      </div>
    </div>
  );
}

export default Progress;
