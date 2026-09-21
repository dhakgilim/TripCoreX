# TestFlight app locations (local-host handoff)

This file is for a **local Cursor / Mac host**. It is not the marketing site.

## What this repo is

`github.com/dhakgilim/TripCoreX` is the **tripcorex.com marketing site** (Vue 3 + Vite). It does **not** contain:

- an Expo Rider app
- a Kotlin / iOS Driver app
- an admin dashboard app
- `app.json`, `eas.json`, Xcode, Fastlane, or TestFlight config

Local site commands (website only):

```bash
npm ci
npm run dev
```

## Where the phone apps are *supposed* to be

From copy in this site (not from source we could open):

| Surface | Expected stack | Guessed home |
| --- | --- | --- |
| Rider | TypeScript / Expo (`expo-router`) | MinnDrive (user also said “MinnDrive admin”) |
| Driver | Kotlin-native wrapper | same MinnDrive / admin tree |
| Admin | Vue 3 fleet / 1099 dashboards | “MinnDrive admin” / `fleet-dash` |

Simulated ticker names in this repo (`dhakgilim/minndrive`, `dhakgilim/fleet-dash`) are **not** cloneable from this environment.

## What the cloud agent checked

Accessible GitHub under `dhakgilim`:

- `TripCoreX` (this marketing site)
- `hazeltine` (archived detailing site)
- `claude-code` (public fork)

Probed and missing or inaccessible: `minndrive`, `MinnDrive`, `minndrive-admin`, `MinnDrive-admin`, `tripcorex-admin`, `fleet-dash`, `minndrive-driver`, `minndrive-rider`, and similar names.

No self-hosted Cursor worker was connected, so this cloud run cannot see folders on the Mac.

## What the local host should do next

1. **Do not build TestFlight from TripCoreX.** Wrong project.
2. On the Mac, find the real app trees:

   ```bash
   mdfind 'kMDItemFSName == "app.json"c || kMDItemFSName == "eas.json"c || kMDItemFSName == "*.xcworkspace"c'
   ```

   Also look in typical folders named `MinnDrive`, `minndrive-admin`, `rider`, `driver`.
3. If those apps live in **private GitHub repos**, open those repos in local Cursor. This cloud token is scoped to TripCoreX only.
4. Continue the new TestFlight build from the Expo Rider and/or native Driver project with Xcode / EAS on the Mac.

Machine-readable copy: [testflight-app-locations.json](./testflight-app-locations.json)
