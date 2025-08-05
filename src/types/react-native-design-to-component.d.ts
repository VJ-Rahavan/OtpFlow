declare module 'react-native-design-to-component' {
  export interface ScaleHookReturn {
    getHeight: (value: number) => number;
    getWidth: (value: number) => number;
    fontSize: (value: number) => number;
    radius: (value: number) => number;
  }

  export function ScaleHook(): ScaleHookReturn;
}
