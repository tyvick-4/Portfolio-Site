# Figma Design Specification: Discord Server Discovery Prototype

This document provides a complete inventory of the components, design tokens, and interactions used in the Discord Server Discovery prototype to assist in translating this React build into a high-fidelity Figma file.

## 1. Component Inventory

Below is the list of React components and their corresponding Figma component naming conventions:

*   **`ServerCard/Default`**: The standard server display card used in the Control panel.
*   **`ServerCard/Personalized`**: The server card used in the Treatment panel, distinguished by the inclusion of a Reason Chip.
*   **`ReasonChip/Returning`**: The amber/yellow pill indicating past membership (icon: ↩).
*   **`ReasonChip/Friends`**: The green pill indicating friend activity (icon: 👥).
*   **`ReasonChip/Interest`**: The blurple pill indicating graph/interest match (icon: 🎮).
*   **`ReasonChip/Trending`**: The red pill indicating a trending server (icon: 📈).
*   **`ReasonChip/Serendipity`**: The purple pill indicating a novel recommendation (icon: ✨).
*   **`PanelHeader/Control`**: The sticky header for the generic discovery panel.
*   **`PanelHeader/Treatment`**: The sticky header for the personalized discovery panel.
*   **`Sidebar/CategoryNav`**: The left-hand navigation menu for filtering servers.
*   **`Modal/ServerPreview`**: The overlay displaying detailed server information when a card is clicked.
*   **`Panel/PMNotes`**: The collapsible side panel containing strategic annotations.
*   **`SEOLayer/JsonCodeBlock`**: The syntax-highlighted display for HTML/JSON-LD.
*   **`SEOLayer/SerpWidget/Generic`**: The Google search simulator showing standard blue links.
*   **`SEOLayer/SerpWidget/RichResult`**: The Google search simulator showing forum rich results.

## 2. Color Styles (Design Tokens)

Map these CSS variables to Figma Color Styles:

*   **`Bg/Primary`**: `#313338` (Main app background)
*   **`Bg/Secondary`**: `#2B2D31` (Sidebar, Reason Chip backgrounds)
*   **`Bg/Tertiary`**: `#1E1F22` (Deep panels, modals, syntax block bg)
*   **`Bg/Card`**: `#2B2D31` (Server card background)
*   **`Bg/CardHover`**: `#35373C` (Server card hover state)
*   **`Accent/Blurple`**: `#5865F2` (Primary brand color, Join buttons)
*   **`Accent/BlurpleHover`**: `#4752C4`
*   **`Accent/Green`**: `#57F287`
*   **`Accent/Yellow`**: `#FEE75C`
*   **`Accent/Red`**: `#ED4245`
*   **`Text/Primary`**: `#F2F3F5` (High emphasis text, headers)
*   **`Text/Secondary`**: `#B5BAC1` (Body text, descriptions)
*   **`Text/Muted`**: `#80848E` (Metadata, member counts)
*   **`Border/Subtle`**: `rgba(255,255,255,0.06)` (Dividers, borders)

## 3. Text Styles (Typography)

Primary font: `DM Sans` (to simulate Discord's `gg sans`).

*   **`Display/H1`**: `24px`, Weight: `800` (Panel Headers, Modal Titles)
*   **`Display/H2`**: `20px`, Weight: `700` (Page titles)
*   **`Heading/ServerName`**: `16px`, Weight: `600` (Card titles)
*   **`Body/Description`**: `13px`, Weight: `400`, Color: `Text/Secondary` (Card descriptions)
*   **`Metadata/Count`**: `12px`, Weight: `500`, Color: `Text/Muted` (Member/Online counts)
*   **`Label/Eyebrow`**: `11px`, Weight: `700`, Uppercase, Letter-spacing: `0.08em`, Color: `Text/Muted` (Section tags)
*   **`Label/Chip`**: `11px`, Weight: `600` (Reason Chips)

## 4. Spacing Tokens

Use these values for Auto Layout padding and gaps:

*   `4px` (micro adjustments, icon-to-text)
*   `8px` (small gaps, card border radius)
*   `12px` (chip padding, medium gaps)
*   `16px` (standard card padding, grid gaps)
*   `24px` (section spacing, modal padding)
*   `32px` (panel header padding)

## 5. Auto-Layout Notes

*   **Main Split View**:
    *   Direction: Horizontal
    *   Layout Mode: Space Between / Fill Container (two 1fr columns)
    *   Gap: `2px` (creates the divider line when background is `Bg/Tertiary`)
*   **Server Card Structure**:
    *   Direction: Vertical
    *   Padding: `16px` all sides
    *   Gap: `12px` (between Header, Description, and Button)
    *   Header row (Icon + Name): Horizontal, Gap `12px`, Align Center
*   **Server Card Grid**:
    *   Wrap mode: On
    *   Min card width: `280px`
    *   Gap: `16px` (Horizontal and Vertical)

## 6. Prototype Flow Notes

Wire these interactions in Figma's Prototype mode:

1.  **Toggle Switch (Top Bar)**: Connect "Dormant User" and "New User" to swap between two primary states of the Treatment panel (showing different server sorting/chips).
2.  **View SEO Layer**: Navigate to the dedicated SEO view frame.
3.  **Server Card Hover**: Use "While Hovering" to swap to the `ServerCard` hover variant (`transform: translateY(-2px)`, `Bg/CardHover`).
4.  **Reason Chip Hover**: Use "While Hovering" on the Reason Chip to reveal a tooltip overlay centered above the chip.
5.  **Card Click to Modal**: "On Click" on any Server Card opens the `Modal/ServerPreview` as a centered overlay with a dark backdrop (`rgba(0,0,0,0.85)`). Include a close interaction on the 'X' button or background click.
6.  **PM Notes Trigger**: "On Click" on the right-edge `📋 PM Notes` tab to slide-in the `Panel/PMNotes` overlay. Use "Slide In" animation.
