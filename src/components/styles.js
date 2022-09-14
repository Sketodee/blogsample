import styled from "styled-components";

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ margin }) => margin || "16px"};
  border-radius: ${({ radius }) => radius || "10px"};
  padding: ${({ badgePadding }) => badgePadding || "8px 16px"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "#FFF1F0"};
  position: ${({ position }) => position || null};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
`;

export const HorizontalLayout = styled.div`
  display: flex;
  padding: 0px 16px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const InfoMessage = styled.h1`
  font-weight: 400;
  font-size: ${({ size }) => size || "12px"};
  line-height: ${({ height }) => height || "18px"};
  color: ${({ color }) => color || "#071827"};
  margin-top: ${({ top }) => top || "null"};
  margin-bottom: ${({ bottom }) => bottom || "null"};
`;

export const SuccessMessage = styled.h1`
  color: ${({ color }) => color || "#023B20"};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

export const CancelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled(InfoMessage)`
  margin-top: 2px;
`;

export const ErrorTitle = styled(SuccessMessage)`
  color: #E01A00;
`;

export const InfoTitle = styled(SuccessMessage)`
  color: ${({ color }) => color || "#071827"};
  font-weight: ${({ weight }) => weight || "700"};
  font-size: ${({ size }) => size || "10px"};
  margin-top: ${({ marginTop }) => marginTop || "null"};
`;
