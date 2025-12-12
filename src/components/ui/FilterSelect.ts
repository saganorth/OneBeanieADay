import type { SelectOption } from "../../models/filterInter";

export function createFilterSelect(
  label: string,
  className: string,
  defaultOption: string,
  options: SelectOption[]
): HTMLElement {
  const filterGroup = document.createElement("div");
  filterGroup.className = "filter-group";

  const labelElement = document.createElement("label");
  labelElement.className = "filter-label";
  labelElement.textContent = `${label}:`;

  const select = document.createElement("select");
  select.className = `filter-select ${className}`;

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = defaultOption;
  select.appendChild(defaultOpt);

  options.forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });

  filterGroup.appendChild(labelElement);
  filterGroup.appendChild(select);

  return filterGroup;
}
