import Logo from "../../components/Logo/index";
import SignUpForm from "@/components/SignUp/SignUpForm";

export default function Home() {
  return (
    <main className="min-h-screen mobile:p-8 tablet:p-24 desktop:p-36">
      <div className="">
        <Logo />
      </div>
      <SignUpForm />
    </main>
  );
}
