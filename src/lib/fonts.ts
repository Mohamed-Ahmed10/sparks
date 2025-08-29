import { Gasoek_One, Sora, Space_Grotesk } from "next/font/google";

export const gasoek = Gasoek_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
});

export const space = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});
