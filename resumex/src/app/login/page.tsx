import React from 'react';
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "~/components/login-form";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col items-center self-center gap-10">
            <img
            src="/transparent_black_main_logo.png"
            alt="ResumeX"
            width={200}
            height={200}
            />
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
