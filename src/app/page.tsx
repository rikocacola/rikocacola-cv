import { redirect } from "next/navigation";

/** The dashboard is the only page for now. */
export default function HomePage() {
  redirect("/dashboard");
}
