import useWindowSize from "./hooks/useWindow";
import useFetch from "./hooks/useFetch";
function App() {
  const { width, height } = useWindowSize();
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return (
    <div>
      {error != null ? (
        <div>
          <h1>ERROR: {error}</h1>
        </div>
      ) : loading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <div>
          width={width} | height={height}
          {width > 750 && <h3>Your random data: {JSON.stringify(data)}</h3>}
        </div>
      )}
    </div>
  );
}

export default App;
