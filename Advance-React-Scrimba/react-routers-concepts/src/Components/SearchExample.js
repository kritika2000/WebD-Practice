import { useSearchParams } from "react-router-dom";

export function SearchExample() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
        placeholder="Enter Search Param"
      />
    </>
  );
}
