import NativeExampleModule from "../../specs/NativeExampleModule";

export function add(a: number, b: number): number {
  return NativeExampleModule.add(a, b);
}

export function multiply(a: number, b: number): number {
  return NativeExampleModule.multiply(a, b);
}
