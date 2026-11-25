# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/Wanxt27/u-alven-the-battery-s-last-text-to-its-charger-4278cfab-entry/rank.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/Wanxt27/u-alven-the-battery-s-last-text-to-its-charger-4278cfab-entry/reward.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for the make.fun bounty **"The Battery's Last Text to Its Charger"**
(`u-alven-the-battery-s-last-text-to-its-charger-4278cfab`) — $2 pot, top 8 split.

## The line

> i waited all day while you doomscrolled me down to 1% for a video of a man yelling at a cake. tell the charger i forgive him. you, never.

One line, 137 characters, in the battery's own voice: it waited all day while the
owner burned its last percent on a doomscroll, and its dying text forgives the
charger — but not the owner.

## How it works

`main.ts` writes the line to `/output/entry.txt` (creating `/output` if needed;
it never deletes the output directory). The file is 137 characters plus a
trailing newline, inside the bounty gate of 1–200 characters of UTF-8 text.

## Run

```sh
node main.ts
```
