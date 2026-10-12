import { toast } from "../components/ui/toast";

export function showToast(toastType: string, toastText: string) {
  toast.add({
    type: toastType,
    description: toastText,
  });
}
