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
commitment: 置き換えた翻訳は1回の u で元に戻せるようにし、翻訳中にバッファを編集した場合は置き換えないようにしました。
gallery:
  - ../../assets/projects/google-translate-nvim/main.png
---

google-translate.nvimは、Google翻訳の無料のWebエンドポイントを使ってNeovim上でテキストを翻訳するプラグインです。
`:Translate ja` で選択範囲を翻訳結果に置き換えたり、`--float` を付けてフローティングウィンドウで読んだりできます。

エンドポイントは非公式なため、レート制限やエラーが返ってきたときは次のエンドポイントを試し、応答したものを使い続けます。
直近100件の結果はメモリに残しているので、同じテキストを同じ言語へ翻訳し直してもリクエストは送りません。
