"use client";

import { useState } from "react";
import { useReplaceableParams } from "../../utils/navigation";

export default function Filter() {
  const {
    values: { filter },
    replace,
  } = useReplaceableParams("page", "filter");
  const [text, setText] = useState(filter ?? "");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        replace({ page: "1", filter: text });
      }}
      className="flex space-x-4"
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
