const PitcherIcon = ({ size = 36, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* 머리 */}
    <circle cx="12" cy="4" r="2" fill={color} />

    {/* 몸통 */}
    <path
      d="M12 6 L12 14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* 던지는 팔 */}
    <path
      d="M12 8 L20 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* 공 */}
    <circle cx="21" cy="5" r="1.2" fill={color} />

    {/* 다리 */}
    <path
      d="M12 14 L8 22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 14 L16 22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default PitcherIcon;
