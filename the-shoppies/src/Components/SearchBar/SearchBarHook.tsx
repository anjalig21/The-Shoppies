import React, { useState } from "react";

function SearchBarHook() {
    const [search, setSearch] = useState<any>();
    return {
        search,
        setSearch
    }
}

export default SearchBarHook