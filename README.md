[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/c/news-image-20261125)
[![Rank](https://make.fun/badge/news-image-20261125/cunong05/u-cunong05-news-image-20261125-7u9m56/rank.svg)](https://make.fun/c/news-image-20261125)
[![Reward](https://make.fun/badge/news-image-20261125/cunong05/u-cunong05-news-image-20261125-7u9m56/reward.svg)](https://make.fun/c/news-image-20261125)

# Sum up 25 November's world news in one image

My submission to the [make.fun](https://make.fun/c/news-image-20261125)
contest **news-image-20261125** — one picture that captures the world news
of Wednesday 25 November 2026.

![The entry](entry.png)

## What this does

`main.ts` runs on Node 22 with nothing but the standard library. It takes
the finished picture `entry.png` from this repository and places a copy at
`$MAKEFUN_OUTPUT_DIR/entry.png` (falling back to `/output` when that
variable is unset). Before copying it checks the file really is a PNG, that
it stays under the 1 MiB limit and within 1024×1024 pixels, then confirms
the written bytes match the source exactly. No network is used, and every
run produces identical output.

## Contents

- `entry.png` — the submitted picture (1024×1024 PNG, 438,674 bytes, a
  summary of the world news of 25 November 2026)
- `main.ts` — the program that validates and copies the picture
- `LICENSE` — MIT License
- `owner.json` — the Solana payout wallet
- `.makefun/owner.json` — claim file with the same payout wallet

## License

MIT — see [LICENSE](LICENSE).
