import { Image, useWindowDimensions } from "react-native";

type props = {
    size?: number
}
export function PlantlyImage({ size}: props) {
    const { width } = useWindowDimensions();
    const imageSize = size ?? Math.min(width / 1.5, 400)

    return (
        <Image 
        source={require("@/assets/plantly.png")}
        style={{ width: imageSize, height: imageSize}}/>
    )
}