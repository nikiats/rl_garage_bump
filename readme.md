# RL Garage Auto Bump Extension

Browser (Firefox) extension for automatic trades bumping on RL Garage platform

*Working version of auto bump tool. Bumps with some intervals, reloads the page automatically*

## Warning
THIS PROGRAM WITH ALL THE CODE IS PROVIDED AS-IS WITHOUT ANY WARRANY. ONLY YOU ARE RESPONSIBLE FOR SITUATIONS THAT CAN OCCUR DURING USAGE OR ANOTHER INTERACTION WITH THE CODE. THIS TOOL CAN ALSO LEAD TO BEING BANNED ON THE PLATFORM. YOU AGREE THAT YOU ARE AKNOWLEDGED HOW THE CODE WORKS AND UNDERSTAND THE MEANING OF IT. USE AT YOUR OWN RISK.

## Installation
- Clone data into a desired folder `git clone https://github.com/nikiats/rl_garage_bump.git`
- Open debug page of your browser (about:debugging)
- Find `Load temporary add-on` and select a `manifest.json` as a file (it will be in downloaded folder). 

### Extension will be loaded and become active
The extension produces a sound after it is started and after every single trade bump. You can disable it by setting `SOUND_ENABLED` to `false` in `bumper.js`

## Usage
- Open `bumper.js` file and change **MY_USERNAME** parameter (line 1) to your user's nickname on RL Garage
- Open page with your trades. After a second, button with text "START" will appear
- Control work of the extension using this button. Be aknowledged that it appears only 1 second after page refresh

> During the usage extension eventually reloads the page, it's normal. Also it leaves some tiny random gaps between bumping
> If `STOP` or `START` button doesn't work, reload the page manually and press it again


## If you really like it...
It would be nice to receive some LTC from you in case you are really satisfied with the app.

Any amount is appreciated 😊

`LTC`:  ltc1qfjyfm077zq0w5vk06f0egzfv4tltm6xgk35ay2