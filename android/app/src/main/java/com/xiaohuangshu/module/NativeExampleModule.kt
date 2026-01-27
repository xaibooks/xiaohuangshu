package com.xiaohuangshu.module

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = NativeExampleModule.NAME)
class NativeExampleModule(
  reactContext: ReactApplicationContext
) : NativeExampleModuleSpec(reactContext) {

  override fun getName(): String = NAME

  override fun add(a: Double, b: Double): Double {
    return a + b
  }

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = "NativeExampleModule"
  }
}
