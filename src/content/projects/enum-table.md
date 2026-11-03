---
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
background: HashMapでgetした後のOptionのhandlingが気になっていました。
commitment: enumをmapとして扱いやすくするため、utility関数を充実させました。
gallery:
  - ../../assets/projects/enum-table/main.png
  - ../../assets/projects/enum-table/benchmark.png
---

EnumTableは、Rustのenumをキーとして値をマッピングするための軽量で効率的なライブラリです。
allocation freeで、通常の `get` / `set` 関数はO(1)で動作します。また、 `get_const` のようなconst関数はO(log N)で実装されており、コンパイル時にも利用できます。

HashMapと違って全variantの値を必ず持つので、`get` しても `Option` が返ってきません。
`#[derive(Enumerable)]` を付けるだけで使えて、no_std環境でも動きます。
今は `et!` マクロでのコンパイル時のテーブル作成や、serdeにも対応しています。
