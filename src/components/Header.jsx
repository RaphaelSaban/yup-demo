export default function Header({ username, status }) {
  return (
    <div style={style}>
      <div>{username}</div>
      <div>{status}</div>
    </div>
  );
}

const style = {
  padding: 8,
  backgroundColor: "white",
  textAlign: "center",
};
