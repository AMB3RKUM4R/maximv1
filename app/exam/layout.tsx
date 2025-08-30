import { AuthGuard } from "../auth/AuthGaurd";
import React from "react";

export default function ExamLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}