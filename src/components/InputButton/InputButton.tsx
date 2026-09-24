import { Input } from "@/components/ui/input";

function InputButton({
  value,
  setValue,
  placeholder,
  maxLength,
}: {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  maxLength?: number;
}) {
  return (
    <div className="w-full">
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        className="w-full mt-1 py-5 focus-visible:border-2 focus-visible:border-primary focus-visible:ring-0 "
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
      />
    </div>
  );
}

export default InputButton;
