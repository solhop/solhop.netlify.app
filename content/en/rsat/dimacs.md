---
title: Dimacs format
subtitle: Dimacs is a popular format used for specifying a boolean formula in CNF form.
description: Dimacs is a popular format used for specifying a boolean formula in CNF form.
position: 3
category: rsat
---

A dimacs input file contains zero or more comment lines, a single p line following by multiple clause lines.

A comment line starts with `c` and ends with a newline. The `p` line describes the number of variables and clauses in the formula. The format for `p` line is `p cnf <num_vars> <num_clauses>`. A clause line contains the literals (positive numbers denote positive literals and negative numbers denote negative literals) separated by space and ends with `0`.

## Example

An example for formula in the dimacs format is given below:

Let us say there are three variables  with clauses given below.

```txt
{ v1 | ~v3, v2 | v3 | ~v1, v2 | ~v3, v3 }
```

Then the corresponding formula in the dimcas format is:

```txt
c This is a comment
p cnf 3 4
1 -3 0
2 3 -1 0
2 -3 0
3 0
```
