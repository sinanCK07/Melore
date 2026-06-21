export type FlavorId = "butter" | "saffron" | "cocoa" | "coconut";

export type Flavor = {
  id: FlavorId;
  name: string;
  labelLines: [string, string];
  tagline: string;
  hero: string;
  story: string;
  ingredients: string[];
  nutrition: { calories: string; protein: string; fat: string };
  bg: string;
  bgDeep: string;
  accent: string;
  text: string;
  cookieFill: string;
  cookieChips: string;
};

export const FLAVORS: Flavor[] = [
  {
    id: "butter",
    name: "Butter Cookies",
    labelLines: ["Butter", "Cookies"],
    tagline: "Pure. Buttery. Timeless.",
    hero: "A whisper of vanilla, a generous fold of cultured butter.",
    story:
      "The cookie that started it all. We churn our own cultured butter and rest the dough for forty-eight hours so every bite breaks with that unmistakable, golden snap.",
    ingredients: ["Cultured Butter", "Madagascar Vanilla", "Stone-milled Wheat", "Cane Sugar"],
    nutrition: { calories: "118 kcal", protein: "1.6 g", fat: "6.4 g" },
    bg: "#F6D57A",
    bgDeep: "#D9B043",
    accent: "#FFF1C1",
    text: "#3A2A0B",
    cookieFill: "#F1C16A",
    cookieChips: "#8A6A20",
  },
  {
    id: "saffron",
    name: "Kesar Badam",
    labelLines: ["Kesar", "Badam"],
    tagline: "Saffron, almond, pistachio — heirloom.",
    hero: "Kashmiri saffron, Mamra almonds, Sicilian pistachios.",
    story:
      "An ode to the spice route. Each cookie is hand-folded with whole pistachios and almonds, finished with threads of Mongra saffron bloomed in warm milk.",
    ingredients: ["Kashmiri Saffron", "Mamra Almonds", "Sicilian Pistachios", "Cardamom", "Buffalo Ghee"],
    nutrition: { calories: "132 kcal", protein: "2.4 g", fat: "7.1 g" },
    bg: "#F4B400",
    bgDeep: "#B88600",
    accent: "#7CB342",
    text: "#3A2700",
    cookieFill: "#F1C744",
    cookieChips: "#5F8A2E",
  },
  {
    id: "cocoa",
    name: "Chocolate Chip",
    labelLines: ["Chocolate Chip", "Cookies"],
    tagline: "Single-origin. Slow-melted. Unapologetic.",
    hero: "70% Ecuadorian cacao chunks in browned-butter dough.",
    story:
      "We melt and re-temper our chips in-house. The result: pools — not specks — of glossy single-origin chocolate, framed by edges that crackle and a middle that pulls.",
    ingredients: ["Ecuadorian 70% Cacao", "Browned Butter", "Muscovado Sugar", "Fleur de Sel"],
    nutrition: { calories: "144 kcal", protein: "2.1 g", fat: "8.0 g" },
    bg: "#3B2417",
    bgDeep: "#1A0F09",
    accent: "#8D5B3B",
    text: "#FBE6CE",
    cookieFill: "#A8723F",
    cookieChips: "#1A0F09",
  },
  {
    id: "coconut",
    name: "Crunchy Coconut",
    labelLines: ["Crunchy", "Coconut"],
    tagline: "Toasted coast. Caramelised crunch.",
    hero: "Slow-toasted coconut chips folded into golden dough.",
    story:
      "We toast Kerala-coast coconut over low heat until it caramelises, then press it into a wheat-and-jaggery dough. Tropical, deeply textured, never sweet for sweetness' sake.",
    ingredients: ["Toasted Coconut Chips", "Coconut Sugar", "Heirloom Wheat", "Sea Salt"],
    nutrition: { calories: "126 kcal", protein: "1.8 g", fat: "6.9 g" },
    bg: "#F5E6CC",
    bgDeep: "#D9A441",
    accent: "#D9A441",
    text: "#3A2A0B",
    cookieFill: "#E8C98C",
    cookieChips: "#8A5E1F",
  },
];
