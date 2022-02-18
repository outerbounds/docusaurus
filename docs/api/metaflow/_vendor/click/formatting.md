---
sidebar_label: formatting
title: _vendor.click.formatting
---

#### wrap\_text

```python
wrap_text(text, width=78, initial_indent="", subsequent_indent="", preserve_paragraphs=False)
```

A helper function that intelligently wraps text.  By default, it
assumes that it operates on a single paragraph of text but if the
`preserve_paragraphs` parameter is provided it will intelligently
handle paragraphs (defined by two empty lines).

If paragraphs are handled, a paragraph can be prefixed with an empty
line containing the ``\\b`` character (``\\x08``) to indicate that
no rewrapping should happen in that block.

**Arguments**:

                       first line as a string.
                          each consecutive line.
                            intelligently handle paragraphs.
- `text`: the text that should be rewrapped.
- `width`: the maximum width for the text.
- `initial_indent`: the initial indent that should be placed on the
- `subsequent_indent`: the indent string that should be placed on
- `preserve_paragraphs`: if this flag is set then the wrapping will

## HelpFormatter Objects

```python
class HelpFormatter(object)
```

This class helps with formatting text-based help pages.  It&#x27;s
usually just needed for very special internal cases, but it&#x27;s also
exposed so that developers can write their own fancy outputs.

At present, it always writes into memory.

**Arguments**:

              width clamped to a maximum of 78.
- `indent_increment`: the additional increment for each level.
- `width`: the width for the text.  This defaults to the terminal

#### write

```python
 | write(string)
```

Writes a unicode string into the internal buffer.

#### indent

```python
 | indent()
```

Increases the indentation.

#### dedent

```python
 | dedent()
```

Decreases the indentation.

#### write\_usage

```python
 | write_usage(prog, args="", prefix="Usage: ")
```

Writes a usage line into the buffer.

**Arguments**:

- `prog`: the program name.
- `args`: whitespace separated list of arguments.
- `prefix`: the prefix for the first line.

#### write\_heading

```python
 | write_heading(heading)
```

Writes a heading into the buffer.

#### write\_paragraph

```python
 | write_paragraph()
```

Writes a paragraph into the buffer.

#### write\_text

```python
 | write_text(text)
```

Writes re-indented text into the buffer.  This rewraps and
preserves paragraphs.

#### write\_dl

```python
 | write_dl(rows, col_max=30, col_spacing=2)
```

Writes a definition list into the buffer.  This is how options
and commands are usually formatted.

**Arguments**:

                    second column.
- `rows`: a list of two item tuples for the terms and values.
- `col_max`: the maximum width of the first column.
- `col_spacing`: the number of spaces between the first and

#### section

```python
 | @contextmanager
 | section(name)
```

Helpful context manager that writes a paragraph, a heading,
and the indents.

**Arguments**:

- `name`: the section name that is written as heading.

#### indentation

```python
 | @contextmanager
 | indentation()
```

A context manager that increases the indentation.

#### getvalue

```python
 | getvalue()
```

Returns the buffer contents.

#### join\_options

```python
join_options(options)
```

Given a list of option strings this joins them in the most appropriate
way and returns them in the form ``(formatted_string,
any_prefix_is_slash)`` where the second item in the tuple is a flag that
indicates if any of the option prefixes was a slash.

