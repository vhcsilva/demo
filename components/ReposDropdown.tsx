import React, {useEffect, useState} from "react";
import ReactSelect from "./ReactSelect";

export default function ReposDropdown({ value } : any) {
  const [option, setOption] = useState<{ value: { id: string, path: string }; label: string }>()

  useEffect(() => { if(value?.value !== option?.value) setOption(value) }, [value]);

  return (
    <div>
      <label className="caption-small mb-2 text-uppercase">
        Select a repository
      </label>
      <ReactSelect
        value={option}
        placeholder="Select"
      />
    </div>
  );
}
