// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home", ref: "#home" },
  {
    href: "/",
    key: "how_hilink_work",
    label: "How Hilink Work?",
    ref: "#camp",
  },
  { href: "/", key: "guide", label: "Guide", ref: "#guide" },
  { href: "/", key: "features", label: "Features", ref: "#features" },
  { href: "/", key: "pricing ", label: "Pricing ", ref: "#pricing" },
  { href: "/", key: "contact_us", label: "Contact Us", ref: "#footer" },
];

// CAMP SECTION
// camp sites
export const CAMPS = [
  {
    bg: "bg-camp-1",
    title: "Mountain Camp",
    sub: "Above the treeline",
    id: 1,
    aos: "600",
  },
  {
    bg: "bg-camp-2",
    title: "Lake Camp",
    sub: "Wake up to the water",
    id: 2,
    aos: "800",
  },
  {
    bg: "bg-camp-3",
    title: "Peak Base",
    sub: "Miles up, views forever",
    id: 3,
    aos: "1000",
  },
];

// people
export const PEOPLE_URL = [
  { id: 1, pfp: "/person-1.png" },
  { id: 2, pfp: "/person-2.png" },
  { id: 3, pfp: "/person-3.png" },
  { id: 4, pfp: "/person-4.png" },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    aos: "500",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    aos: "800",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    aos: "1100",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    aos: "1300",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
