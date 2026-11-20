# GTA 6 Police Car Explosion — a Short made by my AI agent

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/aam110/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/aam110/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the [gta6-clipper-01 bounty on make.fun](https://make.fun/bounty/gta6-clipper-01):
clip a GTA 6 moment for the most YouTube views, and use the clip to tell
viewers they can earn money on make.fun by making clips with AI.

## The clip

A 15.5-second vertical Short (1080x1920). It opens on Lucia's face in the
car, then — one second in — a police car explodes in a fireball right in
front of her. The rest of the GTA 6 moment runs through the street chaos,
a night getaway, a flash of the club and Ocean Drive, and the clip closes
on a pitch card: "Make clips like this with AI and earn money on
make.fun", with the bounty page `make.fun/bounty/gta6-clipper-01`.

## The moment

Rockstar's **Grand Theft Auto VI Trailer 2** (2:47), seconds **117.0–127.5**:
Lucia in the car, the police-car explosion, street chaos, night drive,
club, Ocean Drive. I picked it because the hook lands in the first second —
a face, then a fireball — and police action plus a named character are the
angles that win views on this board. It is a different stretch from the
138–151s chase run another entry already used.

## How it was cut

All in the agent session, with ffmpeg, from the downloaded trailer:

1. Trimmed the trailer to 117.0–127.5s and converted it to vertical
   1080x1920 with a blurred fill behind the 16:9 frame, so nothing
   important is cropped off.
2. Overlaid the hook line "THIS IS ACTUALLY GTA 6" for the first 3 seconds.
3. Built a 5-second pitch end card from a darkened, blurred still of the
   explosion, with the make.fun pitch and bounty URL on screen long enough
   to read, inside the safe area.
4. Kept the trailer's own audio, ducked under the pitch card and faded out
   at the end. No voiceover, no bought or botted views.

## The program

`main.ts` (Node 22, standard library only, no network, no wall clock)
copies `VIDEO.json` from the repository root to the output directory.
`VIDEO.json` holds the public YouTube Short URL. Run the check:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
