---
sidebar_label: termui
title: _vendor.click.termui
---

#### prompt

```python
prompt(text, default=None, hide_input=False, confirmation_prompt=False, type=None, value_proc=None, prompt_suffix=": ", show_default=True, err=False, show_choices=True)
```

Prompts a user for input.  This is a convenience function that can
be used to prompt a user for input later.

If the user aborts the input by sending a interrupt signal, this
function will catch it and raise a :exc:`Abort` exception.

.. versionadded:: 7.0
Added the show_choices parameter.

.. versionadded:: 6.0
Added unicode support for cmd.exe on Windows.

.. versionadded:: 4.0
Added the `err` parameter.

**Arguments**:

                is not given it will prompt until it&#x27;s aborted.
                   be hidden.
                   is invoked instead of the type conversion to
                   convert a value.
            ``stdout``, the same as with echo.
                     For example if type is a Choice of either day or week,
                     show_choices is true and text is &quot;Group by&quot; then the
                     prompt will be &quot;Group by (day, week): &quot;.
- `text`: the text to show for the prompt.
- `default`: the default value to use if no input happens.  If this
- `hide_input`: if this is set to true then the input value will
- `confirmation_prompt`: asks for confirmation for the value.
- `type`: the type to use to check the value against.
- `value_proc`: if this parameter is provided it&#x27;s a function that
- `prompt_suffix`: a suffix that should be added to the prompt.
- `show_default`: shows or hides the default value in the prompt.
- `err`: if set to true the file defaults to ``stderr`` instead of
- `show_choices`: Show or hide choices if the passed type is a Choice.

#### confirm

```python
confirm(text, default=False, abort=False, prompt_suffix=": ", show_default=True, err=False)
```

Prompts for confirmation (yes/no question).

If the user aborts the input by sending a interrupt signal this
function will catch it and raise a :exc:`Abort` exception.

.. versionadded:: 4.0
Added the `err` parameter.

**Arguments**:

              exception by raising :exc:`Abort`.
            ``stdout``, the same as with echo.
- `text`: the question to ask.
- `default`: the default for the prompt.
- `abort`: if this is set to `True` a negative answer aborts the
- `prompt_suffix`: a suffix that should be added to the prompt.
- `show_default`: shows or hides the default value in the prompt.
- `err`: if set to true the file defaults to ``stderr`` instead of

#### get\_terminal\_size

```python
get_terminal_size()
```

Returns the current size of the terminal as tuple in the form
``(width, height)`` in columns and rows.

#### echo\_via\_pager

```python
echo_via_pager(text_or_generator, color=None)
```

This function takes a text and shows it via an environment specific
pager on stdout.

.. versionchanged:: 3.0
Added the `color` flag.

**Arguments**:

                          generator emitting the text to page.
              default is autodetection.
- `text_or_generator`: the text to page, or alternatively, a
- `color`: controls if the pager supports ANSI colors or not.  The

#### progressbar

```python
progressbar(iterable=None, length=None, label=None, show_eta=True, show_percent=None, show_pos=False, item_show_func=None, fill_char="#", empty_char="-", bar_template="%(label)s  [%(bar)s]  %(info)s", info_sep="  ", width=36, file=None, color=None)
```

This function creates an iterable context manager that can be used
to iterate over something while showing a progress bar.  It will
either iterate over the `iterable` or `length` items (that are counted
up).  While iteration happens, this function will print a rendered
progress bar to the given `file` (defaults to stdout) and will attempt
to calculate remaining time and more.  By default, this progress bar
will not be rendered if the file is not a terminal.

The context manager creates the progress bar.  When the context
manager is entered the progress bar is already created.  With every
iteration over the progress bar, the iterable passed to the bar is
advanced and the bar is updated.  When the context manager exits,
a newline is printed and the progress bar is finalized on screen.

Note: The progress bar is currently designed for use cases where the
total progress can be expected to take at least several seconds.
Because of this, the ProgressBar class object won&#x27;t display
progress that is considered too fast, and progress where the time
between steps is less than a second.

No printing must happen or the progress bar will be unintentionally
destroyed.

Example usage::

    with progressbar(items) as bar:
        for item in bar:
            do_something_with(item)

Alternatively, if no iterable is specified, one can manually update the
progress bar through the `update()` method instead of directly
iterating over the progress bar.  The update method accepts the number
of steps to increment the bar with::

    with progressbar(length=chunks.total_bytes) as bar:
        for chunk in chunks:
            process_chunk(chunk)
            bar.update(chunks.bytes)

.. versionadded:: 2.0

.. versionadded:: 4.0
Added the `color` parameter.  Added a `update` method to the
progressbar object.

**Arguments**:

                 is required.
               progressbar will attempt to ask the iterator about its
               length, which might or might not work.  If an iterable is
               also provided this parameter can be used to override the
               length.  If an iterable is not provided the progress bar
               will iterate over a range of that length.
                 automatically disabled if the length cannot be
                 determined.
                     default is `True` if the iterable has a length or
                     `False` if not.
                 default is `False`.
                       can return a string to show the current item
                       next to the progress bar.  Note that the current
                       item can be `None`!
                  progress bar.
                   the progress bar.
                     The parameters in it are ``label`` for the label,
                     ``bar`` for the progress bar and ``info`` for the
                     info section.
              terminal width
             only the label is printed.
              default is autodetection.  This is only needed if ANSI
              codes are included anywhere in the progress bar output
              which is not the case by default.
- `iterable`: an iterable to iterate over.  If not provided the length
- `length`: the number of items to iterate over.  By default the
- `label`: the label to show next to the progress bar.
- `show_eta`: enables or disables the estimated time display.  This is
- `show_percent`: enables or disables the percentage display.  The
- `show_pos`: enables or disables the absolute position display.  The
- `item_show_func`: a function called with the current item which
- `fill_char`: the character to use to show the filled part of the
- `empty_char`: the character to use to show the non-filled part of
- `bar_template`: the format string to use as template for the bar.
- `info_sep`: the separator between multiple info items (eta etc.)
- `width`: the width of the progress bar in characters, 0 means full
- `file`: the file to write to.  If this is not a terminal then
- `color`: controls if the terminal supports ANSI colors or not.  The

#### clear

```python
clear()
```

Clears the terminal screen.  This will have the effect of clearing
the whole visible space of the terminal and moving the cursor to the
top left.  This does not do anything if not connected to a terminal.

.. versionadded:: 2.0

#### style

```python
style(text, fg=None, bg=None, bold=None, dim=None, underline=None, blink=None, reverse=None, reset=True)
```

Styles a text with ANSI styles and returns the new string.  By
default the styling is self contained which means that at the end
of the string a reset code is issued.  This can be prevented by
passing ``reset=False``.

Examples::

    click.echo(click.style(&#x27;Hello World!&#x27;, fg=&#x27;green&#x27;))
    click.echo(click.style(&#x27;ATTENTION!&#x27;, blink=True))
    click.echo(click.style(&#x27;Some things&#x27;, reverse=True, fg=&#x27;cyan&#x27;))

Supported color names:

* ``black`` (might be a gray)
* ``red``
* ``green``
* ``yellow`` (might be an orange)
* ``blue``
* ``magenta``
* ``cyan``
* ``white`` (might be light gray)
* ``bright_black``
* ``bright_red``
* ``bright_green``
* ``bright_yellow``
* ``bright_blue``
* ``bright_magenta``
* ``bright_cyan``
* ``bright_white``
* ``reset`` (reset the color code only)

.. versionadded:: 2.0

.. versionadded:: 7.0
Added support for bright colors.

**Arguments**:

            badly supported.
                rendering (foreground becomes background and the
                other way round).
              string which means that styles do not carry over.  This
              can be disabled to compose styles.
- `text`: the string to style with ansi codes.
- `fg`: if provided this will become the foreground color.
- `bg`: if provided this will become the background color.
- `bold`: if provided this will enable or disable bold mode.
- `dim`: if provided this will enable or disable dim mode.  This is
- `underline`: if provided this will enable or disable underline.
- `blink`: if provided this will enable or disable blinking.
- `reverse`: if provided this will enable or disable inverse
- `reset`: by default a reset-all code is added at the end of the

#### unstyle

```python
unstyle(text)
```

Removes ANSI styling information from a string.  Usually it&#x27;s not
necessary to use this function as Click&#x27;s echo function will
automatically remove styling if necessary.

.. versionadded:: 2.0

**Arguments**:

- `text`: the text to remove style information from.

#### secho

```python
secho(message=None, file=None, nl=True, err=False, color=None, **styles)
```

This function combines :func:`echo` and :func:`style` into one
call.  As such the following two calls are the same::

    click.secho(&#x27;Hello World!&#x27;, fg=&#x27;green&#x27;)
    click.echo(click.style(&#x27;Hello World!&#x27;, fg=&#x27;green&#x27;))

All keyword arguments are forwarded to the underlying functions
depending on which one they go with.

.. versionadded:: 2.0

#### launch

```python
launch(url, wait=False, locate=False)
```

This function launches the given URL (or filename) in the default
viewer application for this file type.  If this is an executable, it
might launch the executable in a new session.  The return value is
the exit code of the launched application.  Usually, ``0`` indicates
success.

Examples::

    click.launch(&#x27;https://click.palletsprojects.com/&#x27;)
    click.launch(&#x27;/my/downloaded/file&#x27;, locate=True)

.. versionadded:: 2.0

**Arguments**:

               application associated with the URL it will attempt to
               launch a file manager with the file located.  This
               might have weird effects if the URL does not point to
               the filesystem.
- `url`: URL or filename of the thing to launch.
- `wait`: waits for the program to stop.
- `locate`: if this is set to `True` then instead of launching the

#### getchar

```python
getchar(echo=False)
```

Fetches a single character from the terminal and returns it.  This
will always return a unicode character and under certain rare
circumstances this might return more than one character.  The
situations which more than one character is returned is when for
whatever reason multiple characters end up in the terminal buffer or
standard input was not actually a terminal.

Note that this will always read from the terminal, even if something
is piped into the standard input.

Note for Windows: in rare cases when typing non-ASCII characters, this
function might wait for a second character and then return both at once.
This is because certain Unicode characters look like special-key markers.

.. versionadded:: 2.0

**Arguments**:

             the terminal.  The default is to not show it.
- `echo`: if set to `True`, the character read will also show up on

#### pause

```python
pause(info="Press any key to continue ...", err=False)
```

This command stops execution and waits for the user to press any
key to continue.  This is similar to the Windows batch &quot;pause&quot;
command.  If the program is not run through a terminal, this command
will instead do nothing.

.. versionadded:: 2.0

.. versionadded:: 4.0
Added the `err` parameter.

**Arguments**:

            ``stdout``, the same as with echo.
- `info`: the info string to print before pausing.
- `err`: if set to message goes to ``stderr`` instead of

