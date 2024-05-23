"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import XIcon from "../icons/x";

export function Combobox({
  onValueChange,
  options,
}: {
  onValueChange?: (value: string[]) => void;
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = React.useState(false);

  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (onValueChange) {
      onValueChange(selectedOptions);
    }
  }, [selectedOptions, onValueChange]);

  React.useEffect(() => {
    console.log(options);
  }, [options]);

  const deleteCategory = React.useCallback(
    (cate: string) => {
      setSelectedOptions((prev) => {
        const index = prev.indexOf(cate);
        if (index > -1) {
          prev.splice(index, 1);
        }
        return [...prev];
      });
    },
    [setSelectedOptions]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="justify-between flex items-center w-full bg-black text-amber-50 rounded p-2"
        >
          <div className="flex gap-2 flex-1 pr-8 flex-wrap">
            {selectedOptions.length > 0
              ? selectedOptions.map((option) => (
                  <div
                    className="text-xs bg-white rounded-sm p-1 max-w-40 text-black flex gap-1"
                    key={"sp-" + option}
                  >
                    <span className="truncate max-w-32">{option}</span>
                    <XIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCategory(option);
                      }}
                      className="text-base flex-1"
                    />
                  </div>
                ))
              : "Selecciona categorías ..."}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 max-h-[260px] overflow-auto">
        <Command>
          <CommandInput placeholder="Selecciona categorías ..." />
          <CommandEmpty>No se encontro la categoría</CommandEmpty>
          <CommandGroup className="overflow-auto">
            {/* {options.map((option) => (
              <CommandItem key={option.value}>
                <label
                  htmlFor={option.value}
                  className="flex items-center gap-2 font-medium leading-none py-2"
                >
                  <Checkbox
                    checked={selectedOptions.includes(option.value)}
                    onCheckedChange={(chk) => {
                      if (!chk) {
                        return deleteCategory(option.value);
                      }
                      setSelectedOptions((prev) => [...prev, option.value]);
                    }}
                    id={option.value}
                  />
                  {option.label}
                </label>
              </CommandItem>
            ))} */}

            <CommandItem key={options[0].value}>
              <label
                htmlFor={options[0].value}
                className="flex items-center gap-2 font-medium leading-none py-2"
              >
                <Checkbox
                  checked={selectedOptions.includes(options[0].value)}
                  onCheckedChange={(chk) => {
                    if (!chk) {
                      return deleteCategory(options[0].value);
                    }
                    setSelectedOptions((prev) => [...prev, options[0].value]);
                  }}
                  id={options[0].value}
                />
                {options[0].label}
              </label>
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
