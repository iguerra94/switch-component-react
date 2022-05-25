import { SIZES } from "../utils.tsx/SwitchUtils";

type SwitchSize = "sm" | "md" | "lg";

interface SwitchProps {
  id: string;
  isOn: boolean;
  handleToggle: () => void;
  onBgColor?: string;
  size?: SwitchSize;
}

const Switch = ({
  id,
  isOn,
  handleToggle,
  onBgColor = "#000",
  size = "sm",
}: SwitchProps) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={id}
        type="checkbox"
      />
      <label
        style={{
          backgroundColor: isOn ? onBgColor : "",
          width: `${SIZES[size].containerWidth}px`,
          height: `${SIZES[size].containerWidth / 2}px`,
        }}
        className="switch-label"
        htmlFor={id}
      >
        <span
          style={{ width: SIZES[size].width, height: SIZES[size].width }}
          className="switch-button"
        />
      </label>
    </>
  );
};

export default Switch;
