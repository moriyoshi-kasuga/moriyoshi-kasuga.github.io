---
name: enum-table
title: EnumTable
description: A lightweight and efficient Rust library for mapping enums to values, providing a fast and type-safe alternative to HashMap for enum keys.
createdAt: 2025/2/26
genre: crate
github: https://github.com/moriyoshi-kasuga/enum-table
site: https://crates.io/crates/enum-table
technology:
  - Rust
  - crate
objective: hashを使わずにunwrapもしないsafeで高速なmapを作りたかったため。
background: HashMapでgetでunwrapするのが嫌だし、わざわざhashを使うのもオーバーヘッドが大きいから嫌だった。
commitment: utility関数を充実させてenumのmapとして使いやすくしました。
galary:
  - main.png
  - benchmark.png
---

EnumTableは、Rustのenumをキーとして値をマッピングするための軽量で効率的なライブラリです。
O(log n)の時間計算量で値を取得でき、allocation freeで、getやsetなどの基本操作はconst fnとして実装されています。
