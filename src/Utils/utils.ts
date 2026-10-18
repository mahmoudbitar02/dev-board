import { toast } from "../components/ui/toast";

export function showToast(toastType: string, toastText: string) {
  toast.add({
    type: toastType,
    description: toastText,
  });
}

export function isPastDate(dateString: string): boolean {
  if (!dateString) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadLine = new Date(dateString);
  deadLine.setHours(0, 0, 0, 0);

  return deadLine.getDate() < today.getDate();
}
