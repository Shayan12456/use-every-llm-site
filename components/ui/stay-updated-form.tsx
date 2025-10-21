"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { useToast } from "./use-toast";

export function StayUpdatedForm() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email is required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: "You're on the list. We'll keep you updated.",
        });
        setEmail("");
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center space-x-2 mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">Stay Updated</Button>
    </form>
  );
}
