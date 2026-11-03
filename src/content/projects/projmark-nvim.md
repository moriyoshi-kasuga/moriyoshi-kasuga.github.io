---
title: projmark.nvim
description: globalではなく、project scopeのmark
createdAt: 2026/3/1
genre: Neovim Plugin
github: https://github.com/moriyoshi-kasuga/projmark.nvim
technology:
  - Lua
  - Neovim
objective: プロジェクトの中であれば、ファイルをまたいでマークへジャンプできるようにしたいと考えました。
background: Vimの小文字のマークはファイルごと、大文字のマークはすべてのプロジェクトで共有されるため、プロジェクト単位で使えるマークがありませんでした。
commitment: プロジェクト単位にするのは a-z のマークだけにして、大文字や特殊なマークは標準のまま残し、Vimの操作感を崩さないようにしました。
gallery:
  - ../../assets/projects/projmark-nvim/main.png
---

projmark.nvimは、Neovimのマークをプロジェクトごとに管理するプラグインです。
`ma` でマークを付け、`'a` でジャンプし、`dma` で削除します。

a-z のマークはプロジェクトのルートごとに保存され、ディスクに書き出されるので、Neovimを再起動しても残ります。
