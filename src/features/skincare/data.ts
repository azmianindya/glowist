export const user = {
  name: "Raisa",
}

export const skincareHero = {
  title: "Rawat kulitmu,\nsatu langkah setiap hari ♥",
  description:
    "Produk yang tepat, rutinitas yang konsisten,\nuntuk kulit yang lebih sehat dan bercahaya.",
  buttonLabel: "Lihat Rutinitas",
}

export const routines = [
  {
    title: "Pagi (AM)",
    time: "08:00 - 10:00",
    progress: "5 langkah",
    status: "Selesai",
    type: "morning" as const,
    steps: [
      "Cleanser",
      "Toner",
      "Serum",
      "Moisturizer",
      "Sunscreen",
    ],
  },
  {
    title: "Malam (PM)",
    time: "20:00 - 22:00",
    progress: "4/5",
    status: "Berjalan",
    type: "night" as const,
    steps: [
      "Makeup Remover",
      "Cleanser",
      "Toner",
      "Serum",
      "Moisturizer",
    ],
  },
]

export const skincareProducts = [
  {
    name: "Gentle Cleanser",
    category: "Cleanser",
    price: 89000,
  },
  {
    name: "Hydrating Toner",
    category: "Toner",
    price: 119000,
  },
  {
    name: "Brightening Serum",
    category: "Serum",
    price: 149000,
  },
  {
    name: "Moisturizer Gel",
    category: "Moisturizer",
    price: 129000,
  },
  {
    name: "Sunscreen SPF 50+",
    category: "Sunscreen",
    price: 99000,
  },
]

export const skinTip = {
  title: "Tips Kulit",
  description:
    "Jangan lupa re-apply sunscreen setiap 2–3 jam, ya! Sinar UV bisa masuk bahkan saat cuaca mendung.",
}