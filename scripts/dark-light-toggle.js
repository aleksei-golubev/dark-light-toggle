(function () {
    /**
     * This module provides dark/light theme global switcher.
     * 
     * Switcher is enabled by adding script to the web-page:
     * 
     * <script src="path/to/component/dark-light-toggle.js"></script>
     * 
     * Custom web component is optional and can be used to provide
     * user manuality switch theme with possibility to disable auto switching.
     * 
     * Custom component style support two properties which can be set in global stylesheet:
     * 
     * dark-light-toggle {
     *  --color: var(--basic-txt-color);
     *  --size: 1.5rem;
     * }
     * 
     * Default values:
     *  --color: #000 (for light mode) / #fff (for dark mode)
     *  --size: 1rem
     */
    
    // Media query to check theme from system settings
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // Link to root element for setting class: dark/light
    const html = document.documentElement;

    // Define dafault value for auto theme switching
    let isAuto = true;

    // Variable to store current theme
    let currentMode;

    // Toggeler button. By default is not defined.
    let toggleModeButton;

    // General theme setup function
    function setTheme(mode) {
        html.classList.toggle('dark', mode === 'dark');
        html.classList.toggle('light', mode === 'light');
        if (toggleModeButton) {
            toggleModeButton.classList.toggle('dark', mode === 'dark');
            toggleModeButton.classList.toggle('light', mode === 'light');
        }
    }

    // Change class of html element when auto mode is on 
    darkMode.addEventListener('change', (e) => {
        if (isAuto) {
            currentMode = e.matches ? 'dark' : 'light';
            setTheme(currentMode);
        }
    });

    // Toggle function
    function toggle() {
        if (html.classList.length === 0) {
            currentMode = darkMode.matches ? 'dark' : 'light';
        } else {
            currentMode = currentMode === 'dark' ? 'light' : 'dark';
        }
        setTheme(currentMode);
    }

    // Theme initialization function
    function initTheme() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', toggle);
        } else {
            toggle();
        }
    }

    // Theme initialization
    initTheme();

    // Web component definition
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            :host {
                display: inline-block;
                height: var(--size, 1rem);
            )}
            #toggle-dark-light-mode {
                cursor: pointer;
                display: inline-block;
                height: var(--size, 1rem);
            }
            #toggle-dark-light-mode::before {
                width: var(--size, 1rem);
                height: var(--size, 1rem);
                display: inline-block;
                background-repeat: no-repeat;
                background-position: center;
                content: "";
                mask-size: contain;
                mask-repeat: no-repeat;
                -webkit-mask-size: contain;
                -webkit-mask-repeat: no-repeat;
            }
            #toggle-dark-light-mode.light::before {
                background-color: var(--color, #000);
                mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>');
                -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>');
            }
            #toggle-dark-light-mode.dark::before {
                background-color: var(--color, #fff);
                mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="currentColor" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>');
                -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="currentColor" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>');
            }
        </style>
        <span id="toggle-dark-light-mode" role="button" aria-label="Toggle dark/light mode" title="Toggle dark/light mode" tabindex="0"></span>
    `;

    class DarkLightToggle extends HTMLElement {
        button;
        static observedAttributes = ['auto', 'visible'];

        constructor() {
            super();

            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.button = this.shadowRoot.getElementById("toggle-dark-light-mode");
            this.button.classList.add(currentMode);

            toggleModeButton = this.button;
        }

        connectedCallback() {
            this.button.addEventListener("click", () => toggle());
            this.button.addEventListener('keydown', (event) => {
                if (event.code === 'Enter' || event.code === 'Space') {
                    toggle();
                    event.preventDefault();
                }
            });
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch(name) {
                case 'auto':
                    isAuto = newValue !== 'false';
                    break;
                case 'visible':
                    this.button.style.display = newValue === 'false' ? 'none' : 'inline-block';
                    break;
            }
        }
    }

    window.customElements.define('dark-light-toggle', DarkLightToggle);
})();