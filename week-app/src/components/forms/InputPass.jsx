import styles from "./inputs.module.css";
import { useState } from "react";

export default function BlueButton({ ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={props.style}>
      <div className={styles.title}>Пароль</div>
      <div className={styles.inputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={"Введите пароль"}
          className={styles.input}
        />
        <button
          className={styles.eyeIcon}
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility"
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="#000"
            >
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="#000"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

{
  /* <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8446 4.02259L10.856 4L10.8446 3.97741C10.3859 3.07138 9.72269 2.35114 8.85576 1.81742C7.98864 1.28359 7.03635 1.01667 6 1.01667C4.96365 1.01667 4.01137 1.28359 3.14424 1.81742C2.27731 2.35114 1.61412 3.07138 1.15539 3.97741L1.14396 4L1.15539 4.02259C1.61412 4.92862 2.27731 5.64886 3.14424 6.18258C4.01137 6.71641 4.96365 6.98333 6 6.98333C7.03635 6.98333 7.98864 6.71641 8.85576 6.18258C9.72269 5.64886 10.3859 4.92862 10.8446 4.02259ZM7.70368 5.66425C7.23597 6.12156 6.66906 6.35 6 6.35C5.33094 6.35 4.76403 6.12156 4.29632 5.66425C3.82865 5.20698 3.59545 4.65319 3.59545 4C3.59545 3.34681 3.82865 2.79302 4.29632 2.33575C4.76403 1.87844 5.33094 1.65 6 1.65C6.66906 1.65 7.23597 1.87844 7.70368 2.33575C8.17135 2.79302 8.40455 3.34681 8.40455 4C8.40455 4.65319 8.17135 5.20698 7.70368 5.66425ZM4.92186 5.05575C5.21779 5.3451 5.57816 5.49 6 5.49C6.42184 5.49 6.78221 5.3451 7.07814 5.05575C7.37411 4.76636 7.52273 4.41348 7.52273 4C7.52273 3.58653 7.37411 3.23364 7.07814 2.94425C6.78221 2.6549 6.42184 2.51 6 2.51C5.57816 2.51 5.21779 2.6549 4.92186 2.94425C4.62589 3.23364 4.47727 3.58653 4.47727 4C4.47727 4.41348 4.62589 4.76636 4.92186 5.05575ZM6 7.95C4.68243 7.95 3.48298 7.5906 2.40039 6.87168C1.3235 6.15655 0.541624 5.19968 0.0539414 4C0.541624 2.80032 1.3235 1.84345 2.40039 1.12832C3.48298 0.409396 4.68243 0.05 6 0.05C7.31757 0.05 8.51702 0.409396 9.59961 1.12832C10.6765 1.84345 11.4584 2.80032 11.9461 4C11.4584 5.19968 10.6765 6.15655 9.59961 6.87168C8.51702 7.5906 7.31757 7.95 6 7.95Z" fill="#404040" stroke="white" stroke-width="0.1"/>
</svg> */
}