# envdir

This module will populate environment variable from the files in
specified directory (default to `.env` directory). Each file name will
become the variable name and the content will be the value.

For example if you have file `VARIABLE1` with the content `Value 1`
inside `.env` directory, after calling `envdir()` you can access
`VARIABLE1` value with `process.env.VARIABLE1`.

## Install

`npm install --save envdir`

## Usage

```
const envdir = require('envdir')

// will read .env directory by default
envdir()

// or you can specify which directory to read
envdir('secret')
```

## Motivation

Kubernetes secret can be mounted as volume and will become a bunch of
files on a designated directory. This module will read each files and
populate the environment variables with the files content.
