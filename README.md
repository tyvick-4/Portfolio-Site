# Discord Server Discovery Personalization Prototype

This repository contains a high-fidelity React prototype demonstrating the business value of personalization and SEO structured data within Discord's Server Discovery surface. It serves as a product thinking artifact for a Staff Product Manager (Growth & SEO) role.

## 🚀 Setup & Execution

This project is built with Vite and React. To run the prototype locally:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Development Server:**
    ```bash
    npm run dev
    ```

3.  **View the Prototype:**
    Open your browser and navigate to `http://localhost:5173`.

## 🎭 Demo Script & Walkthrough

### Part 1: The Personalization Hypothesis
1.  **Start on the Main View:** The prototype launches into a side-by-side comparison. 
    *   **Left (Control):** Represents Discord's current discovery page. A flat catalog sorted by member count.
    *   **Right (Treatment):** Represents a personalized surface powered by DERE (Discord's Entity Representation Engine) embeddings and behavior signals.
2.  **Highlight the Signals:** Point out the "Why this?" chips on the Treatment side (e.g., "Trending", "Matches your interests").
3.  **Toggle User State:** Use the top nav to switch between a **Dormant User** profile and a **New User** profile. Watch how the treatment panel re-ranks the servers to prioritize reactivation (bringing back servers the dormant user previously left) vs. broad appeal/trending content for cold starts.
4.  **Open PM Notes:** Click the `📋 PM Notes` tab on the right edge. Discuss the growth hypothesis: personalized discovery is the lowest-friction reactivation surface available for Discord's ~200M dormant registered accounts.

### Part 2: The SEO Structured Data Layer
1.  **Switch Contexts:** Click the blue `✨ View SEO Layer` button in the top navigation.
2.  **Explain the Current State:** Under the "Current State" tab, show how Discord's server pages currently lack structured data, passing no deep content signals to Google.
3.  **Reveal the Proposal:** Click "Proposed State (+ JSON-LD)". Walk through the two sets of schema:
    *   `Organization` schema to establish the server entity.
    *   `DiscussionForumPosting` schema applied to public channel threads.
4.  **Show the Impact:** Direct attention to the Google SERP Simulator on the right. Show the contrast between a generic blue link and a rich result carousel. Discuss the precedent (Reddit's dominance in search via this exact schema) and the potential for a new organic acquisition loop.

## 📁 Project Structure highlights
*   `src/ServerDiscoveryPrototype.jsx`: The main layout engine comparing Control and Treatment.
*   `src/components/StructuredDataDemo.jsx`: The SEO-focused presentation layer.
*   `src/mockData.js`: The underlying data structure simulating DERE signals and user state.
*   `FIGMA_SPEC.md`: Documentation for translating this build into a Figma design file.
