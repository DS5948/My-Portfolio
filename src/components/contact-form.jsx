"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx27oVnD5h-q4gSwbWwYDtOS6ho43CMGi74Lv00eOMllk8KnCKVU6ieZwgUyaq2ub7h3w/exec";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    if (
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"
    ) {
      setStatus("Google Sheets connection has not been configured yet.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const formData = new URLSearchParams();

      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("timestamp", new Date().toLocaleString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("Message sent successfully. Thank you!");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <GlassmorphicCard className="p-6 h-full">
      <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>

      <p className="text-sm text-zinc-500 mb-6">
        Have an opportunity, project, or question? Send me a message.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Name</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Email</FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    {...field}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Message</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    {...field}
                    rows={5}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {status && (
            <p
              className={`text-sm text-center ${
                status.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </Form>
    </GlassmorphicCard>
  );
}