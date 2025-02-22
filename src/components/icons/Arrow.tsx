import { ISvgIcon } from './model'

const Arrow = ({ className }: ISvgIcon) => (
  <svg
    className={className}
    width="12"
    height="39"
    viewBox="0 0 12 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.50503 38.495C5.77839 38.7683 6.22161 38.7683 6.49498 38.495L10.9497 34.0402C11.2231 33.7668 11.2231 33.3236 10.9497 33.0503C10.6764 32.7769 10.2332 32.7769 9.9598 33.0503L6 37.0101L2.0402 33.0503C1.76684 32.7769 1.32362 32.7769 1.05025 33.0503C0.776887 33.3236 0.776887 33.7668 1.05025 34.0402L5.50503 38.495ZM5.3 3.0598e-08L5.3 38L6.7 38L6.7 -3.0598e-08L5.3 3.0598e-08Z"
      fill="black"
    />
  </svg>
)

export default Arrow
