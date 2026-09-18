import { Button } from "@/components/ui/button";
function MyButton({
  onSave,
  value,
  buttonText,
  variant,
  disabled,
}: {
  onSave?: () => void;
  value: string;
  buttonText: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  disabled?: boolean;
}) {
  return (
    <Button onClick={onSave} disabled={disabled ? !value.trim() : false} className="mt-4 text-black hover:cursor-pointer p-5" variant={variant}>
      {buttonText}
    </Button>
  );
}

export default MyButton;
