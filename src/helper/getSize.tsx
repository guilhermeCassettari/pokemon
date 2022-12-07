import React from "react";
import { scale } from "react-native-size-matters";

export const getSize = (value: number ) => {
    return Math.floor(scale(value))
}