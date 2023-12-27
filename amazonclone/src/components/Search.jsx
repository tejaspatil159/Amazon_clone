import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="flex grow items-center ">
      <select className="text-black bg-amazonclone-background p-3 rounded-l-md text-xs">
        <option>All</option>
      </select>
      <input
        className="px-2 flex grow p-2 "
        placeholder="Search Amazon.in "
      ></input>

      <SearchIcon
        sx={{ fontSize: 40 }}
        className="bg-amazonclone-yellow text-black rounded-r-md p-1 "
      />
    </div>
  );
};

export default Search;
