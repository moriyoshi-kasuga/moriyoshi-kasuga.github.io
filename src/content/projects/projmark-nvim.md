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
commitment: 変えるのは小文字のマークだけにして、それ以外はVim標準のまま残しました。
gallery:
  - ../../assets/projects/projmark-nvim/main.png
---

Neovimのマークを、プロジェクトごとに使えるようにするプラグインです。
操作はVimのマークと同じで、`ma` で付けて `'a` で飛び、`dma` で消せます。
付けたマークはプロジェクトごとに保存されるので、Neovimを開き直しても残っています。
