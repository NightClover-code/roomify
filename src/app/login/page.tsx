"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { satoshi } from "../fonts";
import { FaGithub } from "react-icons/fa";
import GoogleIcon from "@/components/icons/google";

export default function LoginPage() {
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check if the user has visited before
    // This is a placeholder - replace with your actual logic
    const hasVisitedBefore = localStorage.getItem("hasVisited");
    setIsReturningUser(!!hasVisitedBefore);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    // Set that the user has visited
    localStorage.setItem("hasVisited", "true");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <form onSubmit={handleSubmit} className="flex w-[400px] flex-col gap-4">
        <div className="mb-4 flex flex-col items-center space-y-3">
          <h1
            className={cn("text-center text-3xl font-bold", satoshi.className)}
          >
            {isReturningUser ? "Welcome back" : "Create an account"}
          </h1>

          <p className="text-center text-muted-foreground">
            {isReturningUser
              ? "Enter your email below to sign in"
              : "Enter your email below to create your account"}
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            {isReturningUser ? "Sign in" : "Get started"}
          </Button>
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
          type="button"
          variant="default"
          className="flex w-full items-center gap-2 bg-black hover:bg-black/90"
        >
          <FaGithub size={20} />
          GitHub
        </Button>

        <Button
          type="button"
          variant="outline"
          className="flex w-full items-center gap-2 border-gray-300 hover:bg-gray-100"
        >
          <GoogleIcon />
          Google
        </Button>
      </form>
    </div>
  );
}
