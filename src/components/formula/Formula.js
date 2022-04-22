import { ExcelComponent } from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = "excel__formula formula";

    constructor($root) {
        super(
            $root,
            {
                name: 'Formula',
                listeners: ['input', 'click'],
            }
            );
    }

    onInput(event) {
        console.log(event.target.textContent, this.$root);
    }

    onClick() {

    }

    toHTML() {
        return `
        <div class="formula__container">
            <div class="formula__info">fx</div>
            <div class="formula__input" contenteditable spellcheck="false"></div>
        </div>
        `;
    }
}