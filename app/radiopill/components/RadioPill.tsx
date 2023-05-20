"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "clsx";

type OptionType = {
  label: string;
  value: string;
};

interface RadioPillProps {
  onChange: (value: string) => void;
  value: string;
  options: OptionType[];
  label: string;
}

const RadioPill: React.FC<RadioPillProps> = ({
  onChange,
  value,
  options,
  label,
}) => {
  return (
    <RadioGroup.Root
      value={value}
      onValueChange={onChange}
      className="flex flex-col space-y-2 p-2"
    >
      <div className="text-sm">{label}</div>
      <div className="flex flew-row space-x-2 flex-wrap items-center">
        {options.map((option) => (
          <RadioGroup.Item
            id={option.value}
            key={crypto.randomUUID()}
            value={option.value}
            className={clsx(
              "px-3 py-2 rounded-full",
              "cursor-pointer",
              "text-xs font-medium text-gray-600",
              "bg-gray-100",
              "data-[state=checked]:bg-green-600",
              "data-[state=checked]:text-white"
            )}
          >
            <RadioGroup.Indicator />
            <label
              className="cursor-pointer"
              htmlFor={option.value}
            >
              {option.label}
            </label>
          </RadioGroup.Item>
        ))}
      </div>
    </RadioGroup.Root>
  );
};

export default RadioPill;
