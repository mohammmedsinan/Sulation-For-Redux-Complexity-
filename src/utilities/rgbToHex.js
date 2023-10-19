export default function rgbToHex(RGB) {
    const RGBarray = RGB.split(',');
    const rgb = (Number(RGBarray[0]) << 16) | (Number(RGBarray[1]) << 8) | (Number(RGBarray[2]) << 0); return '#' + (0x1000000 + rgb).toString(16).slice(1);
    return rgb;
}
