import { ISvgIcon } from './model'

const Chevron = ({ className, color }: ISvgIcon) => (
  <svg
    className={className}
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.53026 9.38383C9.23736 9.67673 8.76256 9.67673 8.46966 9.38383L0.823183 1.73733C0.530293 1.44443 0.530293 0.969629 0.823183 0.676729L1.17674 0.32313C1.46963 0.0302297 1.9445 0.0302298 2.2374 0.32313L8.99996 7.08573L15.7626 0.323132C16.0555 0.0302323 16.5303 0.0302324 16.8232 0.323132L17.1768 0.676732C17.4697 0.969632 17.4697 1.44443 17.1768 1.73733L9.53026 9.38383Z"
      fill={color || 'black'}
    />
  </svg>
)

export default Chevron
