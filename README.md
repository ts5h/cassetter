# Forked Cassetter

Cassetter is a MIDI controlled granular sampler. It was created as a companion application to the livecoding environment [ORCΛ](https://github.com/hundredrabbits/Orca).

<img src='screenshot.png' width="600"/>

Powered by [ToneJS](https://tonejs.github.io/), [Svelte](https://svelte.dev/) and [Electron](https://electronjs.org/).

## Installation

```sh
# Install Yarn
npm install -g yarn

# Install dependencies
yarn install

# Start the app
yarn dev
```

## Usage

First you need to select the folder in which the required samples are stored in the wav format. Now you can select a sample for each channel.

The sampler receives MIDI CC signals. Knob 0 starts the sample, the rest set the parameter value.

Knob 0 has 4 values:

- `o` - Play a sample once;
- `l` - Play a sample loop;
- `r` - Play a sample once in reverse;
- `q` - Play a sample loop in reverse;

For example, a signal `!40o` will play a sample on channel 4 once.

Other values will stop playback.

Other knobs range from `0` to `z`.

### Hotkey:

- `Ctrl or Cmd + f` - Select the sample folder
- `Ctrl or Cmd + s` - Save parameters
- `Ctrl or Cmd + o` - Open a parameter file
- `Shift + ↑ or ↓` - Channel selection
- `↑ or ↓` - Selecting a parameter or a sample
- `← or →` - Change a parameter

## What I have done after forking (as of November 21, 2024)

- Update the svelte version to 4.x
- Update relevant dependencies to the latest stable version
- Update the electron and rollup version
- Add the prettier to be abel to format the code
- Change the package manager to yarn (It seems that Yarn was already being used internally, but the README was out of date.)

### Note
- There is a possibility that tone.js will not work if you use the latest version.