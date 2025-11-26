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
objective: unwrapの必要のない安全で高速なmapを実現したいと考えました。
background: HashMapでgetした後のResultのhandlingが気になっていました。
commitment: enumをmapとして扱いやすくするため、utility関数を充実させました。
gallery:
  - main.png
  - benchmark.png
---

EnumTableは、Rustのenumをキーとして値をマッピングするための軽量で効率的なライブラリです。
O(log n)の時間計算量で値を取得でき、allocation freeで、getやsetなどの基本操作はconst fnとして実装されています。
