import { toast } from "react-toastify";

const notice = (status, text) => {
  if (status === "success") {
    return toast.success(text);
  } else if (status === "error") {
    return toast.error(text);
  }
};

export default notice;
