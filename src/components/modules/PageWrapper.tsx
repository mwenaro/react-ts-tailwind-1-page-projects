import React from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container min-h-screen mx-auto max-w-lg ">

      {children}

    </div>
  )
}
