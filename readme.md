1. Core intent (what you’re really building)

- TurboModules + Fabric
- Maximizing native work, minimizing JS abstractions


2. Data flow (clean mental model)
    Remote Source (GitHub)
            ↓
    Native Downloader
            ↓
    Native Cache / File Store
            ↓
    Native Parser / Renderer
            ↓
    TurboModule Interface
            ↓
    React Native UI


3. Step 2.2 — JS-only “native interface” placeholder

Objective

Introduce a single JS module that simulates a native document engine.

ReaderScreen will call this module to get pages instead of using local state directly.

Still fake content, fully testable.

4. Empty Native Module (TurboModule scaffold, Android only)

Objective

Confirm New Architecture (TurboModules) plumbing works

No file logic yet

Minimal native → JS call test


1. Android native module (Kotlin, minimal):     File: android/app/src/main/java/com/xiaohuangshu/DocumentModule.kt
2. Register module      File: android/app/src/main/java/com/xiaohuangshu/PackageList.kt (or MainApplication.kt)
3. JS bridge            File: src/native/DocumentModule.ts

Trigger codegen via Gradle
./gradlew :app:generateCodegenArtifactsFromSchema


