export default function Box(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: "100px",
        height: "100px",
        margin: "10px",
      }}
    ></div>
  );
}
