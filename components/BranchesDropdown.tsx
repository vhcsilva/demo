import {useEffect, useState} from "react";

import ReactSelect from "./ReactSelect";

export default function BranchesDropdown({
  repoId,
  onSelected,
  value,
  disabled,
}: any) {
  const [option, setOption] = useState<{ value: string; label: string }>()

  useEffect(() => { setOption(value) }, [value]);

  return (
    <div>
      <label className="caption-small mb-2 text-uppercase">
        Select a branch
      </label>
      <ReactSelect
        key={`select_repo-${repoId}`}
        value={option}
        placeholder="Select"
      />
    </div>
  );
}
