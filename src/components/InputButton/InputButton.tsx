import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function InputButton({
  id,
  textarea,
  type = "text",
  value,
  setValue,
  placeholder,
  maxLength,
}: {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  maxLength?: number;
  id: string;
  textarea?: boolean;
  type?: "text" | "date";
}) {
  if (textarea) {
    return (
      <div className="w-full">
        <Textarea
          id={id}
          value={value}
          placeholder={placeholder}
          className="w-full mt-1 py-5 focus-visible:border-2 focus-visible:border-primary focus-visible:ring-0 "
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
        />
      </div>
    );
  }
  return (
    <div className="w-full">
      <Input
        id={id}
        type={type}
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
