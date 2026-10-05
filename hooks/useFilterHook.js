import { useState } from "react";

export default function useFilterHook(data, fields = []) {
  const [search, setSearch] = useState("");

  const searchValue = search.trim().toLowerCase();

  const filteredData = data.filter((item) =>
    fields.some((field) =>
      String(item[field] ?? "")
        .toLowerCase()
        .includes(searchValue)
    )
  );

  return {
    search,
    setSearch,
    filteredData,
  };
}