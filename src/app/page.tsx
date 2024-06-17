"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import dynamic from "next/dynamic";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import {
  AgileIcon,
  AmazonLogo,
  AsanaLogo,
  AWSLogo,
  ChatGPTLogo,
  ClickUpLogo,
  DHLLogo,
  DockerLogo,
  DPDLogo,
  FedexLogo,
  GitLogo,
  GithubActionsIcon,
  GraphQLLogo,
  InternetmarkeLogo,
  JiraLogo,
  JSLogo,
  KanbanLogo,
  KlaviyoLogo,
  KubernetesLogo,
  MapsLogo,
  MySQLLogo,
  NextJSLogo,
  NodeJSLogo,
  NoSQLLogo,
  PostgresSQLLogo,
  PrompIcon,
  ReactLogo,
  ShopifyLogo,
  StorybookLogo,
  StripeLogo,
  TailwindCSSLogo,
  TrelloLogo,
  TSLogo,
  VercelLogo,
  VSCodeInsidersLogo,
} from "../../public/images/logos/";

const World = dynamic(
  () => import("../components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

const globeConfig = {
  pointSize: 10,
  globeColor: "#000000",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 2,
  maxRings: 5,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 1.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="bg-black text-white h-[80px] w-full fixed z-50">
        <div className="max-w-[1360px] mx-auto w-full h-full flex justify-between items-center px-5">
          <span className="font-black leading-6 text-xl lg:text-2xl uppercase">
            Milveo® <br /> Experts
          </span>
          <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
              <span>Termin buchen</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </header>
      <section className="w-full max-w-[1360px] mb-20 lg:mb-40 lg:mt-10 pt-[80px] lg:px-5">
        <div className="flex flex-col lg:flex-row h-screen-80 lg:h-auto gap-5 items-center justify-between">
          <div className="w-full flex-grow lg:w-[40%] lg:bg-white lg:border border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 lg:p-10 relative h-fit lg:h-[700px]">
            <Icon className="hidden lg:flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="hidden lg:flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="hidden lg:flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="hidden lg:flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="hidden lg:flex flex-col">
              <p>Ich bin</p>
              <h2 className="text-4xl font-black mb-2">Dominik Lössl</h2>
              <p className="mb-5">
                und helfe Unternehmen dabei, ihre Online-Präsenz zu optimieren
                und ihre Umsätze zu steigern.
              </p>
              <ul className="flex flex-col gap-1 mb-10">
                <li className="flex gap-2 align-middle items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="check-square"
                    height="20"
                    width="20"
                  >
                    <path
                      fill="#000000"
                      d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-sm">
                    10+ Jahre Erfahrung
                  </span>
                </li>
                <li className="flex gap-2 align-middle items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="check-square"
                    height="20"
                    width="20"
                  >
                    <path
                      fill="#000000"
                      d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-sm">Projektmanager</span>
                </li>
                <li className="flex gap-2 align-middle items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="check-square"
                    height="20"
                    width="20"
                  >
                    <path
                      fill="#000000"
                      d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"
                    ></path>
                  </svg>
                  <span className="font-semibold text-sm">Lead Developer</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <button className="w-fit bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                    <span>Termin buchen</span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
                <button className="invert w-fit bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                    <span>CV downloaden</span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>
            </div>
            <div className="lg:hidden flex flex-col">
              <p className="text-sm lg:text-base">👋 Ich bin</p>
              <h2 className="text-4xl font-black mb-2">Dominik Lössl</h2>
              <p className="text-sm lg:text-base">
                und helfe Unternehmen dabei, ihre Online-Präsenz zu optimieren
                und ihre Umsätze zu steigern.
              </p>
              <div className="flex gap-3 mt-5">
                <button className="w-fit bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                    <span>Termin buchen</span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
                <button className="invert w-fit bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                    <span>CV downloaden</span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] h-[50vh] lg:h-[700px] hover:text-white border-y border-black/[0.1] lg:border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto px-4 relative">
            <Icon className="hidden lg:flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="hidden lg:flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="hidden lg:flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="hidden lg:flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />

            <div className="flex absolute w-full h-full justify-center items-center">
              <div className="bg-boxes text-black h-full w-1/2 relative overflow-hidden">
                <h2 className="font-black text-3xl lg:text-5xl ml-5 mt-5 lg:mt-10 lg:ml-10">
                  Shopify <br /> Experte
                </h2>
                <div
                  className={`absolute w-[150%] mx-auto z-1 opacity-1 bottom-0 left-[-100px] lg:left-[-152px]`}
                  style={{
                    aspectRatio: "1.2 / 1",
                  }}
                >
                  <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
              </div>
              <div className="w-2 bg-white"></div>
              <div className="text-white h-full w-1/2 relative bg-black">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    className="h-full w-full absolute inset-0 z-1"
                  >
                    <CanvasRevealEffect
                      animationSpeed={20}
                      containerClassName="bg-transparent rotate-180"
                      colors={[
                        [56, 176, 0],
                        [56, 176, 0],
                      ]}
                      opacities={[
                        0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1,
                      ]}
                      dotSize={2}
                    />
                  </motion.div>
                </AnimatePresence>
                <h2 className="font-black text-3xl lg:text-5xl top-5 left-5 lg:left-auto lg:top-10 lg:right-10 absolute">
                  Full-Stack <br /> Developer
                </h2>
              </div>
            </div>

            <div className="w-3/4 lg:w-3/4 flex justify-center relative h-full">
              <img
                src="/images/shopify-experte-full-stack-developer.png"
                alt="Dominik Loessl"
                className="self-center w-full absolute bottom-0 z-10 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1360px] mb-20 lg:mb-40 px-5">
        <h1 className="text-3xl lg:text-5xl font-black mb-10">Tech Stack</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Frontend
              </li>
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Backend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={NextJSLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Next.js</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Frontend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={ReactLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">React</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Frontend
              </li>
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Backend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={JSLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">JavaScript</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Frontend
              </li>
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Backend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={TSLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">TypeScript</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Backend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={NodeJSLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Node.js</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Backend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={GraphQLLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">GraphQL</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Frontend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={TailwindCSSLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">tailwind css</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Backend
              </li>
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Hosting
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={AWSLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">AWS</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Hosting
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={VercelLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Vercel</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Frontend
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/3">
                <img src={StorybookLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Storybook</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Database
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={PostgresSQLLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">PostgresSQL</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Database
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={MySQLLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">MySQL</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Database
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={NoSQLLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">NoSQL</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Containerization
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={DockerLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Docker</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <ul className="absolute top-2 right-2 flex gap-2">
              <li className="bg-black px-2 py-1 text-xs lg:text-sm text-white rounded-md">
                Containerization
              </li>
            </ul>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={KubernetesLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Kubernetes</span>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1360px] mb-20 lg:mb-40 px-5">
        <h1 className="text-3xl lg:text-5xl font-black mb-10">APIs</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />

            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={ChatGPTLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">ChatGPT</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={DHLLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">DHL</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={InternetmarkeLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Internetmarke</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={DPDLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">DPD</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={FedexLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">FedEx</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={ShopifyLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Shopify (Plus)</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={AmazonLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Amazon</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={StripeLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Stripe</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={KlaviyoLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Klaviyo</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-3/4">
                <img src={MapsLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Google Maps</span>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1360px] mb-20 lg:mb-40 px-5">
        <h1 className="text-3xl lg:text-5xl font-black mb-10">Skills/Tools</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={AgileIcon.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Scrum</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={KanbanLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Kanban</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={ClickUpLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">ClickUp</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={JiraLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Jira</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={TrelloLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Trello</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={AsanaLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Asana</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={GitLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Git</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={GithubActionsIcon.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">GitHub Actions</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={PrompIcon.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">Prompt Engineering (AI)</span>
          </div>
          <div className="w-full aspect-square hover:cursor-pointer hover:bg-boxes hover:border-black border-y border-black/[0.1] border lg:border-black/[0.2] group/canvas-card flex items-center justify-center mx-auto p-5 relative">
            <Icon className="flex absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="flex absolute h-6 w-6 -bottom-3 -right-3  text-black" />
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-1/2">
                <img src={VSCodeInsidersLogo.src} className="w-full" alt="" />
              </div>
            </div>
            <span className="absolute bottom-2">VS Code</span>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1360px] mb-10 lg:mb-20">
        <h1 className="text-3xl lg:text-5xl font-black px-5">Projekte</h1>
        <HoverEffect
          items={[
            {
              title: "Freiluftkind",
              description:
                "A technology company that builds economic infrastructure for the internet.",
              link: "https://freiluftkind.com",
            },
            {
              title: "Lagersoftware",
              description:
                "A multinational technology company that specializes in Internet-related services and products.",
              link: "https://store.baaboo.com",
            },
            {
              title: "Baaboo",
              description:
                "A multinational technology company that specializes in Internet-related services and products.",
              link: "https://store.baaboo.com",
            },
            {
              title: "Springlane",
              description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
              link: "https://netflix.com",
            },
            {
              title: "Check Your Health",
              description:
                "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
              link: "https://meta.com",
            },
            {
              title: "Colours and Sons",
              description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
              link: "https://amazon.com",
            },
            {
              title: "Bundle Generator",
              description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
              link: "https://amazon.com",
            },
            {
              title: "Produktkonfigurator",
              description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
              link: "https://amazon.com",
            },
            {
              title: "Produktimport / Bestellungen Export",
              description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
              link: "https://amazon.com",
            },
          ]}
        />
      </section>
      <section className="w-full max-w-[1360px] mb-20 lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-black px-5 mb-5">
          Testimonials
        </h1>
        <InfiniteMovingCards
          items={[
            {
              quote:
                "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
              name: "Charles Dickens",
              title: "A Tale of Two Cities",
            },
            {
              quote:
                "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
              name: "William Shakespeare",
              title: "Hamlet",
            },
            {
              quote: "All that we see or seem is but a dream within a dream.",
              name: "Edgar Allan Poe",
              title: "A Dream Within a Dream",
            },
            {
              quote:
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
              name: "Jane Austen",
              title: "Pride and Prejudice",
            },
            {
              quote:
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
              name: "Herman Melville",
              title: "Moby-Dick",
            },
          ]}
          direction="right"
          speed="normal"
        />
      </section>

      <footer className="bg-black px-10 py-20 w-full text-white flex flex-col gap-5 justifiy-center items-center">
        <span className="font-black leading-6 text-xl lg:text-2xl uppercase">
          Milveo® <br /> Experts
        </span>
        <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
            <span>Termin buchen</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <a href="" className="text-sm">
          Impressum
        </a>
      </footer>
    </main>
  );
}

function Icon({ className, ...rest }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}
