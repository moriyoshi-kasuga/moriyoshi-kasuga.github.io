---
title: google-translate.nvim
description: Translate text in Neovim with Google Translate, no API key needed.
createdAt: 2026/10/17
genre: Neovim Plugin
github: https://github.com/moriyoshi-kasuga/google-translate.nvim
technology:
  - Lua
  - Neovim
objective: Neovimから離れずに、APIキーなしで手軽に翻訳できるようにしたいと考えました。
background: 翻訳のたびにブラウザへ切り替えるのが手間に感じていました。
commitment: 翻訳で置き換えても、uを1回押せば元に戻せるようにしました。
gallery:
  - ../../assets/projects/google-translate-nvim/main.png
---

Google翻訳を使って、Neovimの中でテキストを翻訳できるプラグインです。
`:Translate ja` で選択範囲を翻訳結果に置き換えたり、`--float` を付けてフローティングウィンドウで読んだりできます。
