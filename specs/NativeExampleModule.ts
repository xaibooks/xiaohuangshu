import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

// The name **must exactly match** your native module registration.
export default TurboModuleRegistry.getEnforcing<Spec>("NativeExampleModule");
