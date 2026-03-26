# 🛰️ React Grid-Compass

A specialized React application built with **TypeScript** and **Material UI** to visualize object placement and orientation on a 5x5 coordinate system. This project demonstrates modular component architecture, strict type safety, and isolated component testing via **Storybook**.

## 🚀 Key Features
* **Dynamic 5x5 Grid:** A Material UI-based grid system representing a coordinate plane.

* **Coordinate Mapping:** Custom logic ensures the origin **(0,0)** is correctly mapped to the **South West** (bottom-left) corner.

* **Robust Input Parsing:** A regex-powered validation engine that handles user input strings (e.g., `1,2 NORTH`) with support for mixed casing and flexible spacing.

* **Visual Directional Cues:** Real-time rendering of directional icons (NORTH, EAST, SOUTH, WEST) based on validated user input.

* **Error Handling:** Integrated `Snackbar` and `Alert` systems to provide immediate feedback on out-of-bounds or malformed inputs.

## 🛠️ Tech Stack
* **Framework:** React 18+
* **Language:** TypeScript
* **UI Library:** Material UI (MUI)
* **Icons:** MUI Icons
* **Documentation & Testing:** Storybook
* **Styling:** CSS Modules / Custom CSS

## 📋 Input Specifications
The application accepts a string in the format: `x,y DIRECTION`

* **x:** Integer between 0 and 4.
* **y:** Integer between 0 and 4.
* **DIRECTION:** `NORTH`, `EAST`, `SOUTH`, or `WEST` (Case-insensitive).

*Example valid inputs: `0,0 NORTH`, `4,4 WEST`, `1, 2 east`.*

## 🏗️ Project Structure

```
src/
├── components/       # UI Components (Input, Grid, Alert)
├── helper/           # Logic, Parsing, and Validation (Pure functions)
├── enum/             # Constants and Icon Mappings
├── store/            # Global App Settings (GridSize, etc.)
├── css/              # Component-specific and Common styles
├── stories/          # Component-specific stories
```

## ⚙️ Getting Started
**Prerequisites**
* Node.js (v16+)
* npm or yarn

**Installation**
1. Clone the repository:
```
git clone https://github.com/j-basia/grid-compass.git
```

2. Install dependencies:
```
npm install
```

**Running the Application**

To start the development server:
```
npm run dev
```

**Storybook**

To view the components in isolation and test edge cases (0,0 boundaries, error states):
```
npm run storybook
```