---
title: dotfiles
description: Nixで管理しているNixOSとmacOSの開発環境
createdAt: "2023/8/12"
genre: "CLI"
github: "https://github.com/moriyoshi-kasuga/dotfiles"
technology:
  - "Nix"
  - "Home Manager"
  - "flake-parts"
  - "Neovim"
  - "Lua"
  - "Fish"
objective: "どのマシンでも、同じ開発環境をすぐに再現できるようにしたいと考えて作り始めました。"
background: "最初はWSL2上での環境管理から始めましたが、nixの便利さに魅了され、最終的にはWindowsを離れてNixOSをメインOSとして使うようになりました。"
commitment: "dendritic patternを取り入れて、設定をOSごとではなく機能ごとに分けました。どこに何を書いたか迷わなくなりました。"
gallery:
  - "../../assets/projects/dotfiles/main.png"
  - "../../assets/projects/dotfiles/zoxide.png"
pin: true
---

NixOSを使い始めてから、環境構築がとても楽になりました。
以前は自宅サーバーでUbuntuを使っていた際、aptで個別にパッケージをインストールしたり、
様々な設定ファイルを手動で編集したりする必要がありましたが、
NixOSではnixの設定ファイルを少し書くだけで、すぐにインストールと設定が完了します。
設定が一箇所にまとまっているため、管理がとてもシンプルになりました。

今はNixOSのデスクトップとノートPC、自宅サーバー、macOSのノートPC、仕事用のMacをこのリポジトリで管理しています。
どのマシンでもWezTerm、Neovim、Fishを使っているので、どこで作業しても同じ感覚で触れます。
