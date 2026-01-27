package com.xiaohuangshu


import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class DocumentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "DocumentModule"

    @ReactMethod
    fun ping(promise: Promise) {
        promise.resolve("pong") // this must return exactly "pong"
    }
}
