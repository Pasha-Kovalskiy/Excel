import { ExcelComponent } from "@core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = "excel__header header";

    toHTML() {
        return `
            <input id="header__input" class="header__input input" type="text" value="Новая таблица">
            <div class="header__icon-container">
                <div class="header__icon-link">
                    <span class="header__icon material-icons">exit_to_app</span>
                </div>
                <div class="header__icon-link">
                    <span class="header__icon material-icons">delete</span>
                </div>
            </div>
        `;
    }
}