"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3a8f2638-d52c-45d2-a2c0-5dc22462a798");
  }, []);

  return null;
};
