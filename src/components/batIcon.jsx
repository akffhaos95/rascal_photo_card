const BatIcon = ({ size = 36, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* 배트 몸통 */}
    <path
      d="M3 21 L17 7"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* 배트 손잡이 */}
    <path
      d="M17 7 L20 4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default BatIcon;
