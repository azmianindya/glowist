export const user = {
    name: "Raisa Nabila",
}

export const statCards = [
  {
    title: "Skincare",
    value: 24,
    caption: "Total Produk",
    icon: "SprayCan",
  },
  {
    title: "Makeup",
    value: 18,
    caption: "Total Produk",
    icon: "Palette",
  },
  {
    title: "Kategori",
    value: 42,
    caption: "Semua Kategori",
    icon: "Sparkles",
  },
  {
    title: "Suka",
    value: 12,
    caption: "Koleksi Anda",
    icon: "Heart",
  },
] as const

export const categoryColor: Record<string, string> = {
  Skincare: "bg-pink-100 text-pink-600",
  Makeup: "bg-purple-100 text-purple-600",
}

export const recentlyAdded = [
  {
    name: "CeraVe Hydrating Cleanser",
    category: "Skincare",
    price: 125000,
    image: "https://dynamic.zacdn.com/yuuLZ4aK9-pdVFWMF9Gb7HKcXcQ=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/cerave-6247-6929854-1.jpg",
  },
  {
    name: "Maybelline Vinyl Ink",
    category: "Makeup",
    price: 149000,
    image: "https://medias.watsons.co.id/publishing/WTCID-31419-side-zoom.jpg?version=1728578615&imageresize=1280_1280",
  },
  {
    name: "The Ordinary Niacinamide 10%",
    category: "Skincare",
    price: 167900,
    image: "https://id.ozcosmetics.com/prodimgs/202301/282663.jpg",
  },
  {
    name: "Wardah Lightening Cushion",
    category: "Makeup",
    price: 135000,
    image: "https://medias.watsons.co.id/publishing/WTCID-60015-side-zoom.jpg?version=1755875424&imageresize=720_720",
  },
] as const

export const popularProducts = [
  {
    name: "Skintific Serum",
    category: "Skincare",
    price: 129000,
    image: "https://bigpharmacy.com.my/cdn/shop/files/10024091_result_2b324a6b-8f1b-4b2c-8613-18490868d9c2_20260127153513.jpg?v=1770882322&width=823",
  },
  {
    name: "Maybelline Fit Me Cushion",
    category: "Makeup",
    price: 159000,
    image: "https://image.femaledaily.com/dyn/210/images/prod-pics/product_1635745020_128_800x800.jpg",
  },
  {
    name: "Rom&nd Lip Tint",
    category: "Makeup",
    price: 119000,
    image: "https://romandbeauty.com/cdn/shop/files/03_bare_grape_1_0db1ad15-19c7-49b5-970a-a48a3a9fdd76.jpg?v=1774510656&width=600",
  },
] as const