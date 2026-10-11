import { Button } from "@/components/ui/button";
function MyButton({
  onSave,
  value,
  buttonText,
  variant,
  disabled,
  style,
}: {
  onSave?: () => void;
  value: string;
  buttonText: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  disabled?: boolean;
  style?: string;
}) {
  return (
    <Button
      onClick={onSave}
      className={style ? style : "text-black hover:cursor-pointer p-5"}
      disabled={disabled ? !value.trim() : false}
      variant={variant}
    >
      {buttonText}
    </Button>
  );
}

export default MyButton;
