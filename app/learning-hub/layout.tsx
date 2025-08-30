import { AuthGuard } from "../auth/AuthGaurd";
import React from "react";

export default function LearningHubLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}