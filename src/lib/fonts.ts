import { Anton, Gasoek_One, Sora, Space_Grotesk } from "next/font/google";

const gasoek = Gasoek_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
});

const space = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const gasoekClass = gasoek.className;
export const soraClass = sora.className;
export const spaceClass = space.className;
export const antonClass = anton.className;
