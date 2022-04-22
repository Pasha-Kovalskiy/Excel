import { $ } from "@core/dom";

export class Excel {
    constructor(selector, options) {
        this.$element = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');

        this.components = this.components.map((Component) => {
            const classNameList = Component.className.split(' ');

            const $elementToAppend = $.create('div', classNameList);

            const component = new Component($elementToAppend);
            // DEBUG
            if(component.name) {
                window['c' + component.name] = component;
            }

            $elementToAppend.html(component.toHTML());

            $root.append($elementToAppend);

            return component;
        });

        return $root;
    }

    render() {
        this.$element.append(this.getRoot());
        this.components.forEach((component) => component.init());
    }
}