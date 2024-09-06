import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { satoshi } from "../fonts";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import GoogleIcon from "@/components/icons/google";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <form className="flex w-[400px] flex-col gap-4">
        <div className="mb-4 flex flex-col items-center space-y-3">
          <h1
            className={cn("text-center text-3xl font-bold", satoshi.className)}
          >
            Create an account
          </h1>

          <p className="text-center text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Input type="email" placeholder="name@example.com" />
          <Button className="w-full">Get started</Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          variant="default"
          className="flex w-full items-center gap-2 bg-black hover:bg-black/90"
        >
          <FaGithub size={20} />
          GitHub
        </Button>

        <Button
          variant="outline"
          className="flex w-full items-center gap-2 border-gray-300 hover:bg-gray-100"
        >
          <GoogleIcon />
          Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="ml-1 font-medium text-primary">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
