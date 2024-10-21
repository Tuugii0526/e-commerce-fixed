import { fetchCustomers } from "@/lib/actions";
import { ProfileTransition } from "./ProfileTransition";
import { ErrorProfileTransition } from "./ErrorProfileTransition";

export const UpperProfileTransition = async () => {
    let data;
  try {
     data = await fetchCustomers();
  } catch (error) {}
  if (data?.success) {
    return <ProfileTransition customers={data?.customers} />;
  } else {
    return <ErrorProfileTransition />;
  }
};
