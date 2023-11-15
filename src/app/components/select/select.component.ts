import { ChangeDetectionStrategy, Component, HostBinding, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { IconName, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'

type ValueCallback<T> = (value: T) => void

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgxBootstrapIconsModule],
	standalone: true,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true,
		},
	],
})
export class SelectComponent<T> implements ControlValueAccessor {
	@HostBinding('class') readonly className =
		'text-black dark:text-white pl-3 rounded bg-transparent inline-flex gap-1 items-center'
	@HostBinding('attr.role') readonly role = 'presentation'
	@Input() icon?: IconName
	@Input() label?: string
	@Input() srOnlyLabel?: string
	@Input() id?: string
	@Input() value?: T
	@Input() list: T[] = []

	public disabled = false

	public onChange?: ValueCallback<T>
	public onTouched?: ValueCallback<T>

	write(event: Event): void {
		const target = event.target as HTMLSelectElement
		this.onChange?.(target.value as T)
	}

	writeValue(value: T): void {
		this.value = value
	}

	registerOnChange(fn: ValueCallback<T>): void {
		this.onChange = fn
	}

	registerOnTouched(fn: ValueCallback<T>): void {
		this.onTouched = fn
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled
	}
}
