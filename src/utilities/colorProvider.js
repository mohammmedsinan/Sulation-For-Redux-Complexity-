import { Site_Theme } from './config';
import Hex from './rgbToHex';
const { primaryColor, secondaryColor, accentColor } = Site_Theme;

export const Primary = Hex(primaryColor);
export const Secondary = Hex(secondaryColor);
export const Accent = Hex(accentColor);
