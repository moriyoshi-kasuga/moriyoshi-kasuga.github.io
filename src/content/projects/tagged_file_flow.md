---
title: TaggedFileFlow
description: Tag files and move or copy them anywhere later, without typing long paths for mv and cp.
createdAt: 2024/7/22
genre: CLI
github: "https://github.com/moriyoshi-kasuga/TaggedFileFlow"
technology:
  - Rust
  - CLI
objective: パスを意識せずに、より直感的にcpやmvができるようにしたいと考えました
background: 相対パスなどを気にしながら操作するのが少し煩わしく感じていたため作成しました
commitment: シンプルさを心がけ、aliasなども用意しました
gallery:
  - ../../assets/projects/tagged_file_flow/main.png
---

ファイルやディレクトリをランダムな文字列か好きな名前で保存しておき、
zoxideやfzfで移動先のディレクトリへ移ってから貼り付けるという流れでファイルを操作できます。

`mvg` や `cpg` で保存し、`pasteg` で貼り付けるといったaliasを用意していて、
zsh、bash、fish、nushellで使えます。

このツールを使うようになってから、ファイル操作がより快適になりました。
今は自分のdotfilesにも組み込んで使っています。
