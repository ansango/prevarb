import axios from "axios";

export const postContactForm = async (data: any) => {
  const response = await axios.post("/api/email/contact", data);
  return response;
};
