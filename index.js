function defineNamespace()
{
    window.Flarebrass = {};
    var flare = window.Flarebrass;

    flare.register = {};
    flare.register.registerAll = function()
    {
        flare.register.htmltags();
    };
    flare.register.htmltags = function()
    {
        /*
        var popupBanner = Object.create(HTMLElement.prototype);
        popupBanner.createdCallback = function(input)
        {
            this.innerHTML = "<div class='popupBanner'>Some text here." + input + "</div>"
        };
        document.registerElement('popup-banner', {prototype: popupBanner});
        */
        class PopupBanner extends HTMLElement
        {
            constructor()
            {
                super();
                //var shadow = this.attachShadow({mode: 'open'});

                var outer = document.createElement('div');
                outer.classList.add('popupBannerOuter');
                var middle = document.createElement('div');
                middle.classList.add('popupBannerMiddle');
                var inner = document.createElement('div');
                inner.classList.add('popupBannerInner');
                middle.appendChild(inner);
                outer.appendChild(middle);

                //var text = this.getAttribute('text');
                //inner.textContent = text;
                
                //var content = document.createElement('content');
                //inner.appendChild(content);

                var text = this.textContent;
                this.textContent = '';
                inner.textContent = text;

                //shadow.appendChild(outer);
                this.appendChild(outer);
            }
        }
        customElements.define('popup-banner', PopupBanner);
    };

    flare.initAll = function()
    {
        flare.register.registerAll();
    };
}
defineNamespace();
window.Flarebrass.initAll();
