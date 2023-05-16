import { NgForOf, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IconName, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgIf, NgForOf, NgxBootstrapIconsModule],
	standalone: true,
	host: {
		class: 'text-black dark:text-white pl-3 rounded bg-transparent inline-flex gap-1 items-center'
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true
		}
	]
})
export class SelectComponent<T> implements ControlValueAccessor {
	@Input() icon?: IconName;
	@Input() label?: string;
	@Input() srOnlyLabel?: string;
	@Input() id?: string;
	@Input() value?: T;
	@Input() list: T[] = [];

	public disabled = false;

	protected onChange?: (value: T) => void;
	protected onTouched?: (value: T) => void;

	write(event: Event): void {
		const target = event.target as HTMLSelectElement
		console.log(target);

		this.onChange?.(target.value as T)
	}

	writeValue(value: T): void {
		this.value = value;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

}
