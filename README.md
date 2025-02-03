# Dark/Light Theme Toggle Component

This JavaScript module provides a simple way to implement a dark/light theme switcher on your website. It automatically detects the user's system theme preference and offers an optional custom web component for manual toggling.

## Features

*   **Automatic System Theme Detection:** Automatically switches between dark and light themes based on the user's system preferences using `prefers-color-scheme`.
*   **Manual Toggle:** Provides an optional custom web component (`<dark-light-toggle>`) for users to manually switch between themes.
*   **Customizable Styles:** Allows you to customize the appearance of the toggle button via CSS variables.
*   **Auto Mode Disable:** Provides an option to disable automatic theme switching.
*   **Keyboard Accessibility:** Toggle button supports keyboard navigation with `Enter` or `Space` keys

## Usage

### 1. Include the Script

Add the following script tag to your HTML file, preferably in the `<head>` section or before the closing `</body>` tag:

```html
<script src="path/to/component/dark-light-toggle.js"></script>
```

Replace `"path/to/component/dark-light-toggle.js"` with the actual path to the `dark-light-toggle.js` file.

### 2. Add the Custom Component (Optional)

To provide a manual toggle button, use the `<dark-light-toggle>` custom element where you want it to appear in your HTML:

```html
<dark-light-toggle></dark-light-toggle>
```

This will render a clickable icon that toggles between dark and light themes.

### 3. Customize Styles (Optional)

You can customize the look of the toggle button by setting the following CSS variables on the `<dark-light-toggle>` element:

```css
dark-light-toggle {
  --color: var(--basic-txt-color);  /* Icon color */
  --size: 1.5rem;                   /* Icon size */
}
```

Default Values:

*   `--color`: `#000` (for light mode) / `#fff` (for dark mode)
*   `--size`: `1rem`

Adjust the `--color` to match your brand or text color and the `--size` to control its visual dimensions.

### 4. Customize Auto Mode and Visibility (Optional)

The `<dark-light-toggle>` component provides 2 optional attributes:

*   `auto`:
    *   default `true`
    *   accepts a boolean value (`true` or `false`) to set if auto mode should be enabled.
    *   can be set on component init as `<dark-light-toggle auto="false"></dark-light-toggle>`.
    *   dynamically can be changed as `document.querySelector('dark-light-toggle').setAttribute('auto', 'false');`

*   `visible`:
    *   default `true`
    *   accepts a boolean value (`true` or `false`) to set the visibility of the button.
    *   can be set on component init as `<dark-light-toggle visible="false"></dark-light-toggle>`.
    *   dynamically can be changed as `document.querySelector('dark-light-toggle').setAttribute('visible', 'false');`.

### 5. CSS Classes

The script automatically adds `dark` or `light` classes to the `<html>` tag. You can then use these classes to style your website differently for dark and light themes:

```css
/* Styles for light theme */
html.light {
    background-color: #fff;
    color: #000;
}

/* Styles for dark theme */
html.dark {
    background-color: #333;
    color: #eee;
}
```

## How it Works

*   **System Theme Check:** The script uses `window.matchMedia('(prefers-color-scheme: dark)')` to check the user's system's color scheme preference.
*   **Theme Initialization:** On page load, the script sets the initial theme based on system settings.
*   **`html` Class Toggle:** The script adds or removes `dark` and `light` classes on the `<html>` element to enable theme-specific CSS styles.
*   **Web Component:** The optional `<dark-light-toggle>` component provides the manual toggle functionality.
*   **CSS Variables:** The custom component allows style customization through CSS variables `--color` and `--size`.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark/Light Theme Toggle Example</title>
    <script src="dark-light-toggle.js"></script>
    <style>
        html.light {
            background-color: #fff;
            color: #000;
        }
        html.dark {
            background-color: #333;
            color: #eee;
        }
        dark-light-toggle {
            --color: red;
            --size: 2rem;
        }
    </style>
</head>
<body>
    <h1>Theme Toggle Example</h1>
    <p>This page will automatically switch to dark or light theme.</p>
    <p>You can use the button below to switch the theme manually.</p>
    <dark-light-toggle></dark-light-toggle>
</body>
</html>
```

## Notes

*   Ensure the path to `dark-light-toggle.js` is correct.
*   The icon used in the toggle is based on Font Awesome's SVG icons, embedded directly into the component. You can customize these by modifying the template in the `dark-light-toggle.js` file if necessary.
*   The component uses shadow DOM encapsulation to prevent styling conflicts.
*   If you're using CSS frameworks that require setting theme classes in a different way or other kind of integration, please do a manual integration using provided `setTheme()` function.

This README provides a basic guide to implementing dark/light theme switching on your website using the provided JavaScript module.
