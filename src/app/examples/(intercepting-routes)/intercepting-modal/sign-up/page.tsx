import { Boundary } from "@/app/_components/boundary";
import { SignUp } from "../_components/signUp";

export default function Page() {
  return (
    <Boundary label="Sign Up">
      <div className="flex flex-col gap-4">
        <SignUp />
        <p className="text-sm text-gray-300">
          You won't reach this page unless you visit it directly.
        </p>
      </div>
    </Boundary>
  );
}
