# Are you sure?

![Demo](https://github.com/mav-erick/are-you-sure/raw/master/demo.gif)

This is a project built in Angular, that creates a web component, which you can use as a confirmation button for critical actions. You can use this component with any framework like React, Angular, Vue or even without framework. Learn more about web components [here](https://www.webcomponents.org/introduction).

## How to use?

Download the latest `element.js` file from the [releases](https://github.com/mav-erick/are-you-sure/releases), and import it to your project.

Add it to your project,

```
<script src="/path-to-your-file/elements.js">
```

Use the component anywhere.

```
<ays-button
label="Delete"
confirmationtext="Are you sure you want to delete?"
yeslabel="Yes"
nolabel="No"></ays-button>
```

## Attributes

- `label` - Button label (String)
- `confirmationtext` - Text inside the modal for confirmation (String)
- `yeslabel` - Button text for Yes action (String)
- `nolabel` - Button text for No action (String)
- `textclass` - Class name to apply styling to text inside the modal. (String)
- `stickyfooter` - If you want the footer to be fixed, set this to true. (Boolean)
- `closelabel` - Label for close button
- `modalclass` - Class to apply styling to the modal container

## Events

- `select` - Fires true when use clicks 'Yes' and fires false when the use clicks 'No'.
- `onOpen` - Fires after the modal is opened.
- `beforeClose` - Fires before the modal closes.
- `onClose` - Fires after the modal closes.

You can attach event listeners just like how you'd attach the events in your respective frameworks. If you're not using any framework, you can attach events like so:

```
var element = document.getElementById("aysButton");
element.addEventListener("onOpen",  function(e)  {
	console.log("On opened fired");
});
element.addEventListener("onClose",  function(e)  {
	console.log("On closed fired");
});
element.addEventListener("beforeClose",  function(e)  {
	console.log("Before closed fired");
});
element.addEventListener("select",  function(e)  {
	console.log("Received event:",  e.detail);
});
```
