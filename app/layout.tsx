import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnGuard – Predict Customer Churn 30 Days Before It Happens",
  description: "Analyzes user behavior patterns to identify customers likely to cancel subscriptions. Built for SaaS founders and customer success teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76205035-de93-4daf-a448-6306c149355e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
