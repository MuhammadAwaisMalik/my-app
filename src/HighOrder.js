function RedColor(props) {
  return (
    <div className="bg-dark text-white w-25">
      <props.com></props.com>
    </div>
  );
}
function GreenColor(props) {
  return (
    <div className="bg-success w-25">
      <props.com></props.com>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
    </>
  );
}
