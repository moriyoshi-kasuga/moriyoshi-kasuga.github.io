---
title: dotfiles
description: Nixを使った開発環境
createdAt: "2023/8/12"
genre: "CLI"
github: "https://github.com/moriyoshi-kasuga/dotfiles"
technology:
  - "nix"
  - "zsh"
  - "neovim"
  - "lua"
  - "shellscript"
objective: "WSL2環境を初期化する際に、スムーズに開発環境を復元できるようにしたいと考えて作り始めました。"
background: "最初はWSL2上での環境管理から始めましたが、nixの便利さに魅了され、最終的にはWindowsを離れてNixOSをメインOSとして使うようになりました。"
commitment: "当初はshellscriptで実装していましたが、nixを導入することでより宣言的で管理しやすい構成にできました。"
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

現在は、NixOS、Mac、NixOS(GUIなし)の自宅サーバーなど、複数の環境で統一された開発環境を維持できています。
NixOSの宣言的な設定の恩恵を受けながら、このリポジトリは今後も継続的に改善していく予定です。
