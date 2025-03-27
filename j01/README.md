# JavaScript Drum Kit

## CSS


## JavaScript

To rewind the playing audio to the start:

```javascript
element.currentTime = 0

```

### HTMLAudioElement: Audio() constructor

```js
new Audio()
new Audio(url)
```

- Listen for the `canplay` event. It is sent to the `<audio>` element when there's enough audio available to begin playback, although interruptions may occur.
- Listen for the `canplaythrough` event. It is sent when it's estimated that the audio should be able to play to the end without interruption.
