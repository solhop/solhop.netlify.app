---
title: Rsat - Introduction
subtitle: A SAT Solver written primarily in Rust.
description: A SAT Solver written primarily in Rust.
position: 3
category: rsat
badge: v0.1.11
---

## Code

The code for rsat is open source and available on [GitHub](https://github.com/solhop/rsat) under the MIT License.

## Usage

### Install

```sh
cargo install rsat
```

### Build

```sh
cargo build --release
```

### Run

```sh
./target/release/rsat file.cnf
```

where `file.cnf` is in [dimacs](/rsat/dimacs) format.

## Examples

Example 1

<code-group>
  <code-block label="Input" active>

```txt
p cnf 3 4
1 0
-1 -2 0
2 -3 0
3 0
```

  </code-block>
  <code-block label="Output">

```txt
s UNSATISFIABLE
```

  </code-block>
</code-group>

Example 2

<code-group>
  <code-block label="Input" active>

```txt
p cnf 3 4
1 0
-1 -2 0
2 -3 0
-3 0
```

  </code-block>
  <code-block label="Output">

```txt
s SATISFIABLE
v 1 -2 -3 0
```

  </code-block>
</code-group>

## API Docs

The api docs are available on [docs.rs/rsat](https://docs.rs/rsat/) and [solhop.github.io/rsat/](https://solhop.github.io/rsat/).
