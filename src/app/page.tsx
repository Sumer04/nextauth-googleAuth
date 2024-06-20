import { getServerSession } from "next-auth";
import GoogleLoginbutton from "./component/GoogleLoginbutton";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex align-item-center min-h-screen flex-col items-center">
      <GoogleLoginbutton />
      <h1>Hello world</h1>
    </main>
  );
}
