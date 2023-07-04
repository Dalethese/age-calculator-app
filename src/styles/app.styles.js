import styled from "styled-components";
import { color } from "./themes";

export const Container = styled.div`
  width: calc(100% - 1rem);
  max-width: 37.5rem;
  padding: 2rem;
  background-color: ${color.white};
  border-radius: 2.4rem 2.4rem 10rem 2.4rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  label {
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${color.smokeyGrey};
    display: flex;
    flex-direction: column;

    input {
      width: 7rem;
      height: 3.6rem;
      padding-left: 1rem;
      border: 1px solid ${color.lightGrey};
      border-radius: 0.8rem;
      font-size: 1.6rem;
      font-weight: bold;

      &::placeholder {
        color: ${color.smokeyGrey};
      }

      &:hover,
      &:focus {
        border-color: ${color.offBlack};
        outline-color: ${color.offBlack};
      }

      &[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
      }

      &[type="number"]::-webkit-inner-spin-button,
      &[type="number"]::-webkit-outer-spin-button {
        display: none;
        margin: 0;
      }
    }

    &.invalid {
      color: ${color.lightRed};

      input {
        border-color: ${color.lightRed};
      }
    }
  }
`;

export const SubmitContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const Line = styled.div`
  &:before {
    content: "";
    width: calc(100% - 1rem);
    height: 0.2rem;
    background-color: ${color.lightGrey};
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 0;
  }
`;

export const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  /* padding: 1rem; */
  position: relative;
  border: none;
  border-radius: 50%;
  background-color: ${color.purple};
  z-index: 10;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${color.offBlack};
  }

  img {
    width: 2.6rem;
    pointer-events: none;
  }
`;

export const MainContent = styled.main`
  font-style: italic;
  font-weight: bolder;

  span {
    color: ${color.purple};
  }
`;
