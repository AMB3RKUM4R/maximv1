import { AuthGuard } from "../auth/AuthGaurd";
import React from "react";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}