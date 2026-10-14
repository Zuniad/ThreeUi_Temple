# Kage Temple 3D Landing Page Integration

Integrate the authentic authored Kage landing page experience from ThreeUI, featuring an interactive Kyoto temple night-walk with scroll-driven 3D scenes, particle physics, and a live property inspector drawer.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions were aligned during Phase 1 clarification:

- **Confirmed Layout Presentation**: Fullscreen immersive viewport displaying the complete authored temple journey seamlessly across all desktop and mobile viewports.
- **Confirmed Control Strategy**: Interactive collapsible drawer allowing real-time adjustments of typography (heading/body font family, weights, sizing, letter-spacing) and primary color accents while defaulting to the canonical configured props (`#e0231c`, `onest`, `46px`).

---

## 1. Overview & Core Concept

- **What It Does**: Transports visitors into an atmospheric night journey through a Kyoto mountain temple. Combines custom Three.js WebGL scenes, interactive pointer trails, floating sakura/maple particles, layered parallax foreground assets, and cinematic chapter narratives.
- **Target Audience / Persona**: Creative developers, digital designers, and web enthusiasts seeking high-craft 3D WebGL storytelling with interactive typography controls.
- **Key Value**: Delivers the exact authored ThreeUI Kage experience without approximations, while adding live design introspection tools for font and color tuning.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Entry & Sanmon Gate**: The user enters an obsidian night atmosphere greeted by Japanese temple architecture, ambient lanterns, and drifting cherry blossom petals.
2. **Scroll-Driven Chapter Progression**: Scrolling down smoothly advances through chapters—Approach, Lantern Court, and Moonlit Water—triggering 3D camera sweeps and asset parallax.
3. **Live Theme & Typography Tuning**: A subtle bottom trigger expands a floating glassmorphic control drawer, enabling instant live updates to primary color, heading font, body font, font weight, and typography scales without resetting scroll position.

### Visual Identity & Theme
- **Aesthetic Direction**: Cinematic neo-traditional Japanese aesthetic, deep night tranquility, crimson temple lacquer accents, and atmospheric mist.
- **Color Palette & Mood**:
  - Deep Canvas: Obsidian Black (`#0a0a0c`) and Charcoal Slate (`#121318`)
  - Accent Highlight: Crimson Vermilion (`#e0231c`)
  - Warm Glow: Amber Lantern Gold (`#f6ad55` / `#ecc94b`)
  - Typography: Pure Crisp White (`#ffffff`) and Muted Mist (`#94a3b8`)
- **Typography & Hierarchy**:
  - Primary Display & Headings: `Onest` / Japanese sans-serif display typography with crisp tracking and optical balance
  - Body Prose: Clear legible weight hierarchy (300 light body paired with 400 regular headings)
  - Numerical Values & Controls: Monospace tabular numerals (`tabular-nums`) for slider values

### Interactive Feedback & Motion
- Smooth exponential damping on 3D camera transitions and cursor-following particle trails.
- Zero-occlusion collapsible drawer tucked safely at the bottom center, sliding smoothly into view when toggled.

---

## 3. Key Product Decisions & Trade-Offs

- **Exact Registered Bundle Extraction vs Manual Synthesis**:
  - *Chosen Approach*: Retrieve the exact authored bundle and canonical HTML document from the ThreeUI source registry, preserving exact shader logic, timing curves, and binary assets.
  - *Why*: Ensures 100% fidelity to Meng To's original artistic direction, avoiding any subtle behavioral or shader discrepancies.
- **Non-Intrusive Bottom Inspector Drawer**:
  - *Chosen Approach*: Position the prop controller as an expandable bottom dock adhering to 3D spatial guidelines.
  - *Why*: Prevents sidebar clutter from obscuring the central 3D temple gate and allows unobstructed immersion.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App Root (Fullscreen)                           │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                    KageLandingPage Viewport                      │  │
│  │                                                                  │  │
│  │   ┌──────────────────────────────────────────────────────────┐   │  │
│  │   │          Three.js Canvas & Particle World                │   │  │
│  │   │       (Scroll Camera, Shaders, Leaf Emitters)            │   │  │
│  │   └──────────────────────────────────────────────────────────┘   │  │
│  │   ┌──────────────────────────────────────────────────────────┐   │  │
│  │   │          DOM Overlay & Parallax Chapter Scenes           │   │  │
│  │   │      (Navigation, Typography, Foreground Elements)       │   │  │
│  │   └──────────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │           Collapsible Live Property Inspector (Bottom)           │  │
│  │      [Color Picker · Font Family · Weight · Font Size Sliders]   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State
- **Configured Props State**: Reactive state holding `primaryColor`, `headingFont`, `bodyFont`, `headingWeight`, `bodyWeight`, `headingSize`, `bodySize`, and `headingLetterSpacing`.
- **Drawer State**: Boolean flag toggling inspector expansion with zero layout shifts on the underlying 3D world.

### Execution Steps
1. **Asset & Source Ingestion**: Download and verify all required registered files and binary assets from the ThreeUI distribution bundle.
2. **Component Integration**: Mount `<KageLandingPage />` in the primary Scene wrapper with exact configuration.
3. **Interactive Control Layer**: Add the collapsible floating dock with live state binding to the component props.
4. **Verification & Build**: Compile the applet and verify responsive layout, scroll interaction, and shader rendering.
