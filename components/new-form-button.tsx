"use client";

import { useRouter } from "next/navigation";

export default function CreateNewFormButton(props: { userId: number }) {
  const { userId } = props;
  const router = useRouter();

  const onCreateNewForm = () => {
    try {
      const body = { userId };
      fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // debugger;
      // const formId = (response.json() as any).id;

      // router.push(`/${userId}/${formId}/form1`);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={onCreateNewForm}>New Form</button>;
}
