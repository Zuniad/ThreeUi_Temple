/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import {
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Sparkles,
  Palette,
  Type,
} from "lucide-react";

export interface KageConfig {
  headingFont: string;
  bodyFont: string;
  headingWeight: string;
  bodyWeight: string;
  primaryColor: string;
  headingSize: number;
  bodySize: number;
  headingLetterSpacing: number;
}

export const CANONICAL_CONFIG: KageConfig = {
  headingFont: "onest",
  bodyFont: "onest",
  headingWeight: "400",
  bodyWeight: "300",
  primaryColor: "#e0231c",
  headingSize: 46,
  bodySize: 17,
  headingLetterSpacing: -0.012,
};

const COLOR_PRESETS = [
  { name: "Canonical Crimson", color: "#e0231c" },
  { name: "Kyoto Gold", color: "#d97706" },
  { name: "Night Indigo", color: "#3b82f6" },
  { name: "Bamboo Jade", color: "#10b981" },
  { name: "Sakura Blossom", color: "#ec4899" },
  { name: "Zen Violet", color: "#8b5cf6" },
];

const FONT_OPTIONS = [
  { label: "Onest (Authored)", value: "onest" },
  { label: "Serif (Editorial)", value: "serif" },
  { label: "Sans-Serif (Clean)", value: "sans" },
  { label: "Monospace (Technical)", value: "mono" },
];

const WEIGHT_OPTIONS = [
  { label: "300 (Light)", value: "300" },
  { label: "400 (Regular)", value: "400" },
  { label: "500 (Medium)", value: "500" },
  { label: "600 (SemiBold)", value: "600" },
  { label: "700 (Bold)", value: "700" },
];

/**
 * Canonical Scene component as specified in the ThreeUI requirements
 */
export function Scene(props?: Partial<KageConfig>) {
  const config = { ...CANONICAL_CONFIG, ...props };
  return (
    <div className="shader-frame w-full h-full">
      <KageLandingPage
        headingFont={config.headingFont}
        bodyFont={config.bodyFont}
        headingWeight={config.headingWeight}
        bodyWeight={config.bodyWeight}
        primaryColor={config.primaryColor}
        headingSize={config.headingSize}
        bodySize={config.bodySize}
        headingLetterSpacing={config.headingLetterSpacing}
      />
    </div>
  );
}

export default function App() {
  const [config, setConfig] = useState<KageConfig>(CANONICAL_CONFIG);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"colors" | "typography">("colors");

  const resetToCanonical = () => {
    setConfig(CANONICAL_CONFIG);
  };

  const isCustomized =
    JSON.stringify(config) !== JSON.stringify(CANONICAL_CONFIG);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#080808] text-slate-100 select-none">
      {/* 3D Immersive Scene Viewport */}
      <main className="absolute inset-0 w-full h-full">
        <Scene {...config} />
      </main>

      {/* Top Bar Overlay - Minimalist Zen Badge & Quick Status */}
      <header className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-2xl pointer-events-auto">
          <div
            className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
            style={{ backgroundColor: config.primaryColor }}
          />
          <span className="text-xs font-medium tracking-wide uppercase text-slate-300">
            Kage Temple · ThreeUI Experience
          </span>
          <span className="text-slate-600 text-xs">|</span>
          <span className="text-[11px] font-mono text-slate-400">
            Kyoto Night Walk
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {isCustomized && (
            <button
              onClick={resetToCanonical}
              title="Reset to canonical props"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-xl border border-white/10 text-slate-300 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={() => setIsDrawerOpen((prev) => !prev)}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium backdrop-blur-md rounded-xl border transition-all shadow-lg active:scale-95 ${
              isDrawerOpen
                ? "bg-white/15 border-white/30 text-white shadow-red-950/20"
                : "bg-black/60 hover:bg-black/80 border-white/10 text-slate-200"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Customize</span>
            {isDrawerOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>
        </div>
      </header>

      {/* Collapsible Bottom Control Dock (Ergonomic, Zero Viewport Occlusion) */}
      <aside
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[92vw] max-w-2xl z-30 transition-all duration-300 ease-out ${
          isDrawerOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[calc(100%+24px)] opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#0f1117]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-5 space-y-4 text-slate-200">
          {/* Header & Tabs */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("colors")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "colors"
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                Color & Theme
              </button>
              <button
                onClick={() => setActiveTab("typography")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "typography"
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Type className="w-3.5 h-3.5" />
                Typography
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetToCanonical}
                className="text-[11px] text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-white/5 transition-colors"
              >
                Default
              </button>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close inspector"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Color & Theme Tab */}
          {activeTab === "colors" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">
                  Primary Accent Color:{" "}
                  <span className="font-mono text-slate-200">
                    {config.primaryColor}
                  </span>
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {COLOR_PRESETS.map((preset) => (
                    <button
                      key={preset.color}
                      onClick={() =>
                        setConfig((prev) => ({
                          ...prev,
                          primaryColor: preset.color,
                        }))
                      }
                      className={`group relative flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-xs transition-all active:scale-95 ${
                        config.primaryColor.toLowerCase() ===
                        preset.color.toLowerCase()
                          ? "border-white/40 bg-white/10 text-white font-medium shadow-md"
                          : "border-white/10 bg-black/30 text-slate-400 hover:text-slate-200 hover:border-white/20"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shadow-inner border border-white/20"
                        style={{ backgroundColor: preset.color }}
                      />
                      <span>{preset.name}</span>
                    </button>
                  ))}

                  <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl px-2.5 py-1">
                    <input
                      type="color"
                      value={config.primaryColor}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          primaryColor: e.target.value,
                        }))
                      }
                      className="w-5 h-5 rounded cursor-pointer bg-transparent border-0 outline-none"
                    />
                    <span className="text-[11px] font-mono text-slate-400">
                      Custom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Typography Tab */}
          {activeTab === "typography" && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Heading Font */}
                <div>
                  <label className="block font-medium text-slate-400 mb-1.5">
                    Heading Font
                  </label>
                  <select
                    value={config.headingFont}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        headingFont: e.target.value,
                      }))
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-slate-200 outline-none focus:border-white/30"
                  >
                    {FONT_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-[#121318]"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Body Font */}
                <div>
                  <label className="block font-medium text-slate-400 mb-1.5">
                    Body Font
                  </label>
                  <select
                    value={config.bodyFont}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        bodyFont: e.target.value,
                      }))
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-slate-200 outline-none focus:border-white/30"
                  >
                    {FONT_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-[#121318]"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Heading Weight */}
                <div>
                  <label className="block font-medium text-slate-400 mb-1.5">
                    Heading Weight
                  </label>
                  <select
                    value={config.headingWeight}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        headingWeight: e.target.value,
                      }))
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-slate-200 outline-none focus:border-white/30"
                  >
                    {WEIGHT_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-[#121318]"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Body Weight */}
                <div>
                  <label className="block font-medium text-slate-400 mb-1.5">
                    Body Weight
                  </label>
                  <select
                    value={config.bodyWeight}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        bodyWeight: e.target.value,
                      }))
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-slate-200 outline-none focus:border-white/30"
                  >
                    {WEIGHT_OPTIONS.slice(0, 3).map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-[#121318]"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sliders: Sizes & Letter Spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div>
                  <div className="flex justify-between items-center mb-1 text-slate-400">
                    <span>Heading Size</span>
                    <span className="font-mono tabular-nums text-slate-200">
                      {config.headingSize}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="32"
                    max="64"
                    step="1"
                    value={config.headingSize}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        headingSize: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-white cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1 text-slate-400">
                    <span>Body Size</span>
                    <span className="font-mono tabular-nums text-slate-200">
                      {config.bodySize}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="22"
                    step="1"
                    value={config.bodySize}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        bodySize: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-white cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1 text-slate-400">
                    <span>Letter Spacing</span>
                    <span className="font-mono tabular-nums text-slate-200">
                      {config.headingLetterSpacing.toFixed(3)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-0.04"
                    max="0.04"
                    step="0.002"
                    value={config.headingLetterSpacing}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        headingLetterSpacing: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-white cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
