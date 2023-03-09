import { PLAYER_STORAGE_KEY } from "../constants";

export const config = JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY) as string) || {};

export const setConfig = (key: string, value: any) => {
  config[key] = value;
  localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(config));
};
