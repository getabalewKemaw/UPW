"use client";

import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiTelegram,
  SiGmail,
  SiFfmpeg,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiTailwindcss,
  SiSpringboot,
  SiHibernate,
  SiJsonwebtokens,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
  SiGooglecloud,
  SiDocker,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaCreditCard,
  FaWaveSquare,
  FaRobot,
  FaBrain,
  FaCode,
  FaBroadcastTower,
  FaAws,
} from "react-icons/fa";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const norm = name.toLowerCase();

  // Next.js
  if (norm.includes("next")) {
    return <SiNextdotjs className={`${className} text-zinc-900 dark:text-zinc-100 shrink-0`} />;
  }

  // React
  if (norm.includes("react")) {
    return <SiReact className={`${className} text-[#00d8ff] shrink-0`} />;
  }

  // TypeScript
  if (norm.includes("typescript")) {
    return <SiTypescript className={`${className} text-[#3178c6] shrink-0`} />;
  }

  // Python
  if (norm.includes("python")) {
    return <SiPython className={`${className} text-[#3776ab] shrink-0`} />;
  }

  // Java
  if (norm.includes("java") && !norm.includes("script")) {
    return <FaJava className={`${className} text-[#e76f00] shrink-0`} />;
  }

  // Spring Boot
  if (norm.includes("spring")) {
    return <SiSpringboot className={`${className} text-[#6db33f] shrink-0`} />;
  }

  // PostgreSQL
  if (norm.includes("postgres")) {
    return <SiPostgresql className={`${className} text-[#336791] shrink-0`} />;
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return <SiTailwindcss className={`${className} text-[#38bdf8] shrink-0`} />;
  }

  // Express.js
  if (norm.includes("express")) {
    return <SiExpress className={`${className} text-zinc-700 dark:text-zinc-300 shrink-0`} />;
  }

  // Prisma
  if (norm.includes("prisma")) {
    return <SiPrisma className={`${className} text-zinc-900 dark:text-zinc-100 shrink-0`} />;
  }

  // Gemini AI / Google AI
  if (norm.includes("gemini") || norm.includes("ai")) {
    return <FaRobot className={`${className} text-amber-500 shrink-0`} />;
  }

  // Telegram
  if (norm.includes("telegram")) {
    return <SiTelegram className={`${className} text-[#229ed9] shrink-0`} />;
  }

  // Gmail
  if (norm.includes("gmail") || norm.includes("mail")) {
    return <SiGmail className={`${className} text-[#ea4335] shrink-0`} />;
  }

  // FFmpeg & Streaming
  if (norm.includes("ffmpeg") || norm.includes("mse") || norm.includes("streaming")) {
    return <SiFfmpeg className={`${className} text-[#007808] shrink-0`} />;
  }

  // WaveSurfer
  if (norm.includes("wave")) {
    return <FaWaveSquare className={`${className} text-[#06b6d4] shrink-0`} />;
  }

  // Scikit-Learn
  if (norm.includes("scikit") || norm.includes("forest") || norm.includes("tfidf")) {
    return <SiScikitlearn className={`${className} text-[#f7931e] shrink-0`} />;
  }

  // Pandas
  if (norm.includes("pandas")) {
    return <SiPandas className={`${className} text-[#150458] dark:text-[#8b5cf6] shrink-0`} />;
  }

  // NumPy
  if (norm.includes("numpy")) {
    return <SiNumpy className={`${className} text-[#4d77cf] shrink-0`} />;
  }

  // Hugging Face
  if (norm.includes("hugging") || norm.includes("gradio")) {
    return <SiHuggingface className={`${className} text-[#ffcc4d] shrink-0`} />;
  }

  // Chapa / Payment
  if (norm.includes("chapa") || norm.includes("payment")) {
    return <FaCreditCard className={`${className} text-emerald-500 shrink-0`} />;
  }

  // JWT & Security / RBAC
  if (norm.includes("jwt") || norm.includes("rbac") || norm.includes("security")) {
    return <SiJsonwebtokens className={`${className} text-[#fb015b] shrink-0`} />;
  }

  // Hibernate
  if (norm.includes("hibernate") || norm.includes("jpa")) {
    return <SiHibernate className={`${className} text-[#bcae79] shrink-0`} />;
  }

  // Database
  if (norm.includes("database") || norm.includes("sql")) {
    return <FaDatabase className={`${className} text-blue-500 shrink-0`} />;
  }

  // RESTful APIs
  if (norm.includes("api") || norm.includes("rest")) {
    return <FaBroadcastTower className={`${className} text-indigo-500 shrink-0`} />;
  }

  // Redis
  if (norm.includes("redis")) {
    return <SiRedis className={`${className} text-[#dc382d] shrink-0`} />;
  }

  // Apache Kafka
  if (norm.includes("kafka")) {
    return <SiApachekafka className={`${className} text-[#231f20] dark:text-[#ededeb] shrink-0`} />;
  }

  // Kubernetes
  if (norm.includes("kuber") || norm.includes("k8s")) {
    return <SiKubernetes className={`${className} text-[#326ce5] shrink-0`} />;
  }

  // Google Cloud
  if (norm.includes("google cloud") || norm.includes("gcp")) {
    return <SiGooglecloud className={`${className} text-[#4285f4] shrink-0`} />;
  }

  // AWS
  if (norm.includes("aws") || norm.includes("amazon")) {
    return <FaAws className={`${className} text-[#ff9900] shrink-0`} />;
  }

  // Docker
  if (norm.includes("docker")) {
    return <SiDocker className={`${className} text-[#2496ed] shrink-0`} />;
  }

  // Fallback
  return <FaCode className={`${className} text-theme-muted shrink-0`} />;
}
