import { useState, useRef } from "react";
import {
  Autocomplete,
  Loader,
  AutocompleteProps,
  AutocompleteItem,
} from "@mantine/core";
import { get } from "http";

interface AutoCompleteProps extends AutocompleteProps {
  value: string;
  onChange: (value: any) => void;
  getAsyncOptions: (value: string) => Promise<string[]>;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  value,
  onChange,
  getAsyncOptions,
}) => {
  const [data, setData] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChange = async (inputValue: string) => {
    setLoading(true);
    setInputValue(inputValue);
    const data = await getAsyncOptions(inputValue);
    setData(data);
    setInputValue(inputValue);
    setLoading(false);
  };
  return (
    <Autocomplete
      value={inputValue}
      data={data}
      onItemSubmit={onChange}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      label="Async Autocomplete data"
      placeholder="Your email"
    />
  );
};

export default AutoComplete;
