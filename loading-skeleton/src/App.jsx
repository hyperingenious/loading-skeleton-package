import Skeleton from "../skeleton/Skeleton";
function App() {
  return (
    <div
      style={{
        borderRadius: "12px",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Skeleton />
    </div>
  );
}

export default App;
