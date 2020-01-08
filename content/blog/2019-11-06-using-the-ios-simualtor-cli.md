---
title: "Using the iOS device simulator via the command line"
date: 2019-12-16T11:26:20-04:00
draft: true
---
- As part of a recent automation project, with codecept.
- Background - part of Xcode
- Getting a device name from an open/installed simulator
- Take a screenshot of a simulator

## Open a new simulator

## Create a new simulator from an image

```bash
xcrun simctl create <shortname> <device type> <OS version>
```

```bash
xcrun simctl create iphone7 com.apple.CoreSimulator.SimDeviceType.iPhone-7 com.apple.CoreSimulator.SimRuntime.iOS-13-2
```

This returns a UUID for your new simulator that will look something like this: `8FDB56E0-808F-4CA9-AF0E-C0E70C84FCEE`.

Open the simulator `open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/`;

## Example Opening a URL

```
xcrun simctl openurl booted "https://jamesrwilliams.ca"
```

https://www.iosdev.recipes/simctl/
