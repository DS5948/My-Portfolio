"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { useToast } from "@/components/ui/use-toast"

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
})

export function ContactForm() {
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values) {
    // Simulate form submission
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "success",
    })
    form.reset()
  }

  return (
    <GlassmorphicCard className="p-6">
      <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
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
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </GlassmorphicCard>
  )
}
