import useFetch from "./useFetch";

function FetchData() {
  const [data, loading, error] = useFetch(
    "https://dummy.restapiexample.com/api/v1/employees",
  );

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {!loading &&
        error === null &&
        data.map((obj) => <p key={obj.id}>{obj.employee_name}</p>)}
    </div>
  );
}

export default FetchData;
